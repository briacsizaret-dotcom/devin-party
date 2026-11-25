// Devin'Party — serveur multijoueur (Node.js + Socket.io)
// Lancer : npm install puis npm start  →  http://localhost:3000
const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const { Q, THEMES } = require('./questions');

const PORT = process.env.PORT || 3000;
const CLUE_EVERY = 8000;   // un nouvel indice toutes les 8 s
const Q_TIME = 40000;      // 40 s par question
const REVEAL_TIME = 6000;  // la réponse reste affichée 6 s
const MAX_PLAYERS = 12;
const COLORS = ['#ff5436', '#0f9e84', '#2f5bea', '#e9479b', '#f28c00', '#7a4ddb', '#1c1530', '#00a3c4', '#c2410c', '#15803d', '#be185d', '#4338ca'];

const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/health', (_req, res) => res.send('ok'));

// ---------- Outils ----------
const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, ' ').replace(/^(le|la|les|l|the|un|une) /, '').trim();
function lev(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
function isMatch(input, answers) {
  const x = norm(input);
  if (!x) return false;
  return answers.some(a => {
    const y = norm(a);
    const tol = y.length <= 4 ? 0 : y.length <= 8 ? 1 : 2;
    return x === y || lev(x, y) <= tol;
  });
}
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const cleanName = s => String(s || '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 16);
const titleCase = s => s.replace(/\b\w/g, m => m.toUpperCase());
function newCode() {
  const L = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  let c;
  do { c = Array.from({ length: 4 }, () => L[Math.floor(Math.random() * L.length)]).join(''); } while (rooms.has(c));
  return c;
}

// ---------- Salons ----------
const rooms = new Map();

function roomState(room) {
  const q = room.deck && room.deck[room.k];
  const data = q && Q[q.t][q.i];
  return {
    code: room.code,
    isPublic: room.isPublic,
    hostId: room.hostId,
    phase: room.phase,
    settings: room.settings,
    themes: THEMES.map(t => ({ id: t.id, name: t.name, count: Q[t.id].length })),
    players: [...room.players.values()].map(p => ({ id: p.id, name: p.name, color: p.color, score: p.score, found: p.found })),
    q: (room.phase === 'question' || room.phase === 'reveal') && data ? {
      num: room.k + 1,
      total: room.deck.length,
      theme: q.t,
      themeName: THEMES.find(t => t.id === q.t).name,
      title: THEMES.find(t => t.id === q.t).q,
      clues: data.c.slice(0, room.phase === 'reveal' ? data.c.length : room.shown),
      totalClues: data.c.length,
      emo: !!data.emo,
      worth: 5 - room.shown,
      left: room.phase === 'question' ? Math.max(0, room.endsAt - Date.now()) : 0,
      answer: room.phase === 'reveal' ? titleCase(data.a[0]) : null
    } : null
  };
}
const broadcast = room => io.to(room.code).emit('state', roomState(room));
const feed = (room, msg) => io.to(room.code).emit('feed', msg);

function clearTimers(room) {
  clearInterval(room.clueTimer); clearTimeout(room.endTimer); clearTimeout(room.nextTimer);
}

function startGame(room) {
  const pool = shuffle(room.settings.themes.flatMap(t => Q[t].map((_, i) => ({ t, i }))));
  room.deck = pool.slice(0, Math.min(room.settings.n, pool.length));
  room.k = -1;
  for (const p of room.players.values()) { p.score = 0; p.found = false; }
  nextQuestion(room);
}

function nextQuestion(room) {
  clearTimers(room);
  room.k++;
  if (room.k >= room.deck.length) { room.phase = 'end'; broadcast(room); return; }
  room.phase = 'question';
  room.shown = 1;
  room.firstFound = null;
  room.endsAt = Date.now() + Q_TIME;
  for (const p of room.players.values()) p.found = false;
  const total = Q[room.deck[room.k].t][room.deck[room.k].i].c.length;
  room.clueTimer = setInterval(() => {
    if (room.shown < total) { room.shown++; broadcast(room); }
    if (room.shown >= total) clearInterval(room.clueTimer);
  }, CLUE_EVERY);
  room.endTimer = setTimeout(() => reveal(room), Q_TIME);
  broadcast(room);
}

function reveal(room) {
  if (room.phase !== 'question') return;
  clearTimers(room);
  room.phase = 'reveal';
  broadcast(room);
  room.nextTimer = setTimeout(() => nextQuestion(room), REVEAL_TIME);
}

function checkAllFound(room) {
  const ps = [...room.players.values()];
  if (room.phase === 'question' && ps.length && ps.every(p => p.found)) {
    clearTimers(room);
    room.endTimer = setTimeout(() => reveal(room), 1200);
  }
}

function leave(socket) {
  const room = rooms.get(socket.data.room);
  if (!room) return;
  const p = room.players.get(socket.id);
  room.players.delete(socket.id);
  socket.leave(room.code);
  socket.data.room = null;
  if (room.players.size === 0) { clearTimers(room); rooms.delete(room.code); return; }
  if (room.hostId === socket.id) room.hostId = room.players.keys().next().value;
  if (p) feed(room, { type: 'leave', name: p.name });
  checkAllFound(room);
  broadcast(room);
}

function join(socket, room, name) {
  if (room.players.size >= MAX_PLAYERS) return socket.emit('err', 'Ce salon est plein.');
  const used = new Set([...room.players.values()].map(p => p.color));
  const color = COLORS.find(c => !used.has(c)) || COLORS[0];
  let finalName = name;
  const names = new Set([...room.players.values()].map(p => p.name.toLowerCase()));
  for (let n = 2; names.has(finalName.toLowerCase()); n++) finalName = `${name.slice(0, 13)} ${n}`;
  room.players.set(socket.id, { id: socket.id, name: finalName, color, score: 0, found: room.phase !== 'question' ? false : true, lastTry: 0 });
  socket.join(room.code);
  socket.data.room = room.code;
  socket.emit('joined', { code: room.code, you: socket.id });
  feed(room, { type: 'join', name: finalName });
  broadcast(room);
}

// ---------- Connexions ----------
io.on('connection', socket => {
  socket.data.room = null;

  socket.on('list', () => {
    const list = [...rooms.values()]
      .filter(r => r.isPublic && r.players.size < MAX_PLAYERS)
      .map(r => ({ code: r.code, host: r.players.get(r.hostId)?.name || '?', count: r.players.size, phase: r.phase }))
      .slice(0, 30);
    socket.emit('list', list);
  });

  socket.on('create', ({ name, isPublic } = {}) => {
    name = cleanName(name);
    if (!name) return socket.emit('err', 'Choisis un pseudo.');
    leave(socket);
    const room = {
      code: newCode(), isPublic: !!isPublic, hostId: socket.id, phase: 'lobby',
      settings: { themes: THEMES.map(t => t.id), n: 10 }, players: new Map(), deck: null, k: -1, shown: 1
    };
    rooms.set(room.code, room);
    join(socket, room, name);
  });

  socket.on('join', ({ name, code } = {}) => {
    name = cleanName(name);
    if (!name) return socket.emit('err', 'Choisis un pseudo.');
    const room = rooms.get(String(code || '').toUpperCase().trim());
    if (!room) return socket.emit('err', 'Aucun salon avec ce code.');
    leave(socket);
    join(socket, room, name);
  });

  socket.on('settings', ({ themes, n, isPublic } = {}) => {
    const room = rooms.get(socket.data.room);
    if (!room || room.hostId !== socket.id || room.phase === 'question' || room.phase === 'reveal') return;
    if (Array.isArray(themes)) {
      const ok = themes.filter(t => Q[t]);
      room.settings.themes = [...new Set(ok)];
    }
    if ([5, 10, 15, 20].includes(n)) room.settings.n = n;
    if (typeof isPublic === 'boolean') room.isPublic = isPublic;
    broadcast(room);
  });

  socket.on('start', () => {
    const room = rooms.get(socket.data.room);
    if (!room || room.hostId !== socket.id) return;
    if (room.phase === 'question' || room.phase === 'reveal') return;
    if (!room.settings.themes.length) return socket.emit('err', 'Choisis au moins un thème.');
    startGame(room);
  });

  socket.on('lobby', () => {
    const room = rooms.get(socket.data.room);
    if (!room || room.hostId !== socket.id) return;
    clearTimers(room);
    room.phase = 'lobby';
    broadcast(room);
  });

  socket.on('answer', text => {
    const room = rooms.get(socket.data.room);
    if (!room || room.phase !== 'question') return;
    const p = room.players.get(socket.id);
    if (!p || p.found) return;
    const now = Date.now();
    if (now - p.lastTry < 300) return; // anti-spam
    p.lastTry = now;
    const data = Q[room.deck[room.k].t][room.deck[room.k].i];
    if (isMatch(String(text).slice(0, 60), data.a)) {
      const first = !room.firstFound;
      if (first) room.firstFound = socket.id;
      const pts = 5 - room.shown + (first ? 1 : 0);
      p.score += pts;
      p.found = true;
      socket.emit('result', { ok: true, pts, first });
      feed(room, { type: 'found', name: p.name, pts, first });
      broadcast(room);
      checkAllFound(room);
    } else {
      socket.emit('result', { ok: false });
    }
  });

  socket.on('leave', () => leave(socket));
  socket.on('disconnect', () => leave(socket));
});

server.listen(PORT, () => console.log(`Devin'Party en ligne sur http://localhost:${PORT}`));
