# Devin'Party : version multijoueur en ligne

Jeu de soirée où chacun joue depuis son téléphone ou son PC : on crée un salon, on partage le code de 4 lettres, et tout le monde devine en même temps.

## Règles du jeu

- Chaque question dure 40 secondes. Un nouvel indice apparaît toutes les 8 secondes (4 indices au maximum).
- Une bonne réponse rapporte 4 points avec le premier indice, puis 3, 2 et enfin 1 point. Le premier à trouver gagne 1 point bonus.
- On peut tenter autant de réponses qu'on veut. Les fautes de frappe légères et les accents oubliés sont acceptés.
- Dès que tout le monde a trouvé, la réponse s'affiche et la question suivante démarre.
- L'hôte (celui qui a créé le salon) choisit les thèmes, le nombre de questions et si le salon est public ou privé. S'il part, un autre joueur devient hôte.

## Tester sur ton ordinateur

Il faut Node.js version 18 ou plus récente (https://nodejs.org).

```bash
npm install
npm start
```

Ouvre ensuite http://localhost:3000 dans deux onglets pour jouer contre toi-même. Pour inviter des amis connectés au même Wi-Fi, utilise l'adresse IP locale de ton PC, par exemple http://192.168.1.20:3000.

## Mettre en ligne gratuitement (Render)

1. Crée un compte sur https://github.com et mets-y ce dossier dans un nouveau dépôt. Le plus simple : bouton « Add file » puis « Upload files », en glissant tout sauf le dossier `node_modules`.
2. Crée un compte sur https://render.com et connecte-le à GitHub.
3. Clique sur **New** puis **Web Service** et choisis ton dépôt.
4. Réglages :
   - Runtime : **Node**
   - Build Command : `npm install`
   - Start Command : `npm start`
   - Instance : **Free**
5. Clique sur **Create Web Service**. Au bout de quelques minutes, ton site est en ligne à une adresse du type `https://devin-party.onrender.com`.

Avec l'offre gratuite de Render, le serveur se met en veille quand personne ne l'utilise. Le premier chargement après une pause peut donc prendre jusqu'à une minute. Railway ou Fly.io conviennent aussi (même principe : `npm install` puis `npm start`). Le serveur lit le port dans la variable `PORT`.

Pour un nom de domaine à toi (par exemple devinparty.fr), achète-le chez un registraire (OVH, Gandi…), puis ajoute-le dans Render : Settings, puis Custom Domains.

## Ajouter des questions ou des thèmes

Tout se trouve dans `questions.js` :

- Pour **ajouter une question**, copie une ligne existante dans la bonne liste. `a` contient les réponses acceptées, en minuscules et sans accents (tu peux en mettre plusieurs : surnom, nom seul…). `c` contient les 4 indices, du plus difficile au plus facile.
- Pour **ajouter un thème**, ajoute une entrée dans `THEMES` (par exemple `{id:'pays', name:'Devine le pays', q:'Quel est ce pays ?'}`), puis une liste `pays:[...]` dans `Q`. Pour lui donner une couleur, ajoute-la dans `TC` dans `public/index.html` (sinon il sera rose).

Redémarre le serveur, ou redéploie sur Render, pour voir les changements.

## Réglages

Ils se trouvent en haut de `server.js` : `CLUE_EVERY` (temps entre deux indices), `Q_TIME` (durée d'une question), `REVEAL_TIME` (durée d'affichage de la réponse) et `MAX_PLAYERS` (12 joueurs maximum par salon).

## À savoir

- Les salons et les scores sont gardés en mémoire : ils disparaissent si le serveur redémarre.
- Un joueur qui perd sa connexion quitte le salon et perd son score. Il peut revenir avec le même code.
- Les réponses ne sont jamais envoyées aux joueurs avant la fin de la question : impossible de tricher en fouillant le code de la page.
