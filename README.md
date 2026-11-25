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

## Les thèmes (plus de 650 questions)

Qui suis-je ?, Qui chante ça ?, Devine le film, Répliques cultes, Complète le titre, Chansons en émojis, Expressions en émojis, Jeux vidéo, Drapeaux (170 pays), Silhouettes de pays (138), Capitales (165), et Qui est-ce ? avec tes propres photos.

Chaque question est classée **Normal** ou **Difficile**. L'hôte choisit le niveau dans le salon (Normal, Difficile ou Les deux). Dans un même salon, le jeu ne repose pas une question déjà vue tant qu'il en reste de nouvelles, et il alterne les thèmes choisis.

## Ajouter des questions ou des thèmes

Tout se trouve dans `questions.js` :

- **Ajouter une question** : copie une ligne existante dans la bonne liste. `a` contient les réponses acceptées, en minuscules (tu peux en mettre plusieurs : surnom, nom seul…). `c` contient les 4 indices, du plus difficile au plus facile. Ajoute `d:2` pour qu'elle compte comme difficile.
- **Ajouter un pays** : les drapeaux, silhouettes et capitales viennent de `pays.json` et `images.json`. Demande-moi si tu veux en changer.
- **Ajouter un thème** : ajoute une entrée dans `THEMES` (par exemple `{id:'animaux', name:'Animaux', q:'Quel est cet animal ?'}`), puis une liste `Q.animaux=[...]`. Pour lui donner une couleur, ajoute-la dans `TC` dans `public/index.html`.

## Ajouter tes propres photos (thème « Qui est-ce ? »)

1. Sur GitHub, ouvre le dossier `public`, clique sur **Add file**, puis **Upload files**, et dépose tes photos dans un dossier `img/photos`. Le plus simple : renomme tes photos sans espaces ni accents (par exemple `zidane.jpg`).
2. Dans `questions.js`, dans la liste `Q.photos`, ajoute une ligne par photo, par exemple :
   `{a:['zinedine zidane','zidane'],d:1,img:'img/photos/zidane.jpg',flou:true,c:['Photo floutée…','Sportif français.','Champion du monde 1998.','On l’appelle Zizou.']},`
3. `flou:true` dévoile la photo en la rendant nette petit à petit, `zoom:true` la dévoile en dézoomant.

Le thème apparaît dans le salon dès qu'il contient au moins une photo. N'utilise que des photos que tu as le droit d'utiliser, par exemple celles sous licence libre de Wikimedia Commons, et note leur auteur.

Une fois tes modifications enregistrées sur GitHub, Render met le site à jour tout seul en quelques minutes.

## Réglages

Ils se trouvent en haut de `server.js` : `CLUE_EVERY` (temps entre deux indices), `Q_TIME` (durée d'une question), `REVEAL_TIME` (durée d'affichage de la réponse) et `MAX_PLAYERS` (12 joueurs maximum par salon).

## À savoir

- Les salons et les scores sont gardés en mémoire : ils disparaissent si le serveur redémarre.
- Un joueur qui perd sa connexion quitte le salon et perd son score. Il peut revenir avec le même code.
- Les réponses ne sont jamais envoyées aux joueurs avant la fin de la question : impossible de tricher en fouillant le code de la page.
