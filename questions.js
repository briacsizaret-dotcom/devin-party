// Banque de questions.
// a = réponses acceptées (minuscules, sans accents), c = 4 indices du plus dur au plus facile,
// emo = true si le premier indice est un rébus en émojis,
// d = difficulté (1 = normal, 2 = difficile ; 1 si absent),
// img = image facultative placée dans public/img (ex. 'img/perso/photo.jpg'), zoom = true pour la dévoiler en dézoomant.
const THEMES=[
  {id:'perso',name:'Qui suis-je ?',q:'Qui suis-je ?'},
  {id:'musique',name:'Qui chante ça ?',q:'Qui chante ce titre ?'},
  {id:'film',name:'Devine le film',q:'Quel est ce film ?'},
  {id:'repliques',name:'Répliques cultes',q:'De quel film vient cette réplique ?'},
  {id:'titres',name:'Complète le titre',q:'Quel mot manque dans ce titre ?'},
  {id:'chansons',name:'Chansons en émojis',q:'Quelle est cette chanson ?'},
  {id:'expressions',name:'Expressions en émojis',q:'Quelle est cette expression ?'},
  {id:'jeux',name:'Jeux vidéo',q:'Quel est ce jeu vidéo ?'},
  {id:'drapeaux',name:'Drapeaux',q:'À quel pays est ce drapeau ?'},
  {id:'silhouettes',name:'Silhouettes de pays',q:'Quel est ce pays ?'},
  {id:'capitales',name:'Capitales',q:'Quelle est la capitale de ce pays ?'},
  {id:'photos',name:'Qui est-ce ? (tes photos)',q:'Qui est sur cette photo ?'}
];
const Q={
perso:[
 {a:['zinedine zidane','zidane','zizou'],c:['Je suis né à Marseille en 1972.','Comme entraîneur, j’ai gagné trois Ligues des champions d’affilée avec le Real Madrid.','Mon coup de tête en finale de la Coupe du monde 2006 est resté célèbre.','Champion du monde 1998, on m’appelle « Zizou ».']},
 {a:['marie curie','curie'],c:['Je suis née à Varsovie en 1867.','J’ai découvert deux éléments, dont l’un porte le nom de mon pays natal.','Je suis la première personne à avoir reçu deux prix Nobel.','J’ai étudié la radioactivité avec mon mari Pierre.']},
 {a:['napoleon','napoleon bonaparte','bonaparte','napoleon 1er'],c:['Je suis né en Corse en 1769.','J’ai fait rédiger un Code civil encore en partie en vigueur.','J’ai été exilé à l’île d’Elbe, puis à Sainte-Hélène.','Empereur des Français, battu à Waterloo.']},
 {a:['thomas pesquet','pesquet'],c:['Je suis né à Rouen en 1978.','J’ai été pilote de ligne avant de changer de cap.','J’ai effectué deux longues missions à bord de la Station spatiale internationale.','Astronaute français de l’ESA, mes photos de la Terre font le tour des réseaux.']},
 {a:['beyonce','beyonce knowles'],c:['Je suis née à Houston en 1981.','J’ai débuté dans un groupe féminin avec Kelly et Michelle.','Mon album visuel « Lemonade » est sorti en 2016.','On m’appelle Queen B, je suis mariée à Jay-Z.']},
 {a:['leonard de vinci','de vinci','leonardo da vinci','da vinci','leonard'],c:['Je suis né en Toscane en 1452.','J’ai dessiné des machines volantes des siècles avant l’avion.','J’ai fini ma vie au Clos Lucé, à Amboise.','J’ai peint La Joconde.']},
 {a:['kylian mbappe','mbappe'],c:['Je suis né en 1998 et j’ai grandi à Bondy.','J’ai débuté chez les pros à Monaco.','J’ai marqué un triplé en finale de la Coupe du monde 2022.','Attaquant, je suis passé du PSG au Real Madrid en 2024.']},
 {a:['albert einstein','einstein'],c:['Je suis né en Allemagne en 1879.','J’ai travaillé dans un office des brevets à Berne.','J’ai reçu le prix Nobel de physique en 1921.','E = mc², c’est moi.']},
 {a:['celine dion','celine'],c:['Je suis née au Québec en 1968, la cadette de quatorze enfants.','J’ai gagné l’Eurovision en 1988 en chantant pour la Suisse.','J’ai tenu une résidence de plusieurs années à Las Vegas.','J’ai chanté la chanson phare du film Titanic.']},
 {a:['omar sy','omar'],c:['Je suis né à Trappes en 1978.','J’ai débuté à la radio puis à la télé en duo avec Fred Testot.','J’ai reçu le César du meilleur acteur en 2012.','J’ai joué Driss dans Intouchables et Assane dans Lupin.']},
 {a:['simone veil','veil'],c:['Je suis née à Nice en 1927.','J’ai survécu à la déportation à Auschwitz.','J’ai présidé le premier Parlement européen élu au suffrage universel.','Ministre de la Santé, j’ai porté la loi de 1975 sur l’IVG.']},
 {a:['elon musk','musk'],c:['Je suis né en Afrique du Sud en 1971.','J’ai cofondé un service de paiement en ligne revendu à eBay.','Mes fusées reviennent se poser à la verticale.','Patron de Tesla et SpaceX, j’ai racheté Twitter.']},
 {a:['jean de la fontaine','la fontaine'],c:['Je suis né à Château-Thierry en 1621.','J’ai été protégé par le surintendant Fouquet.','J’ai emprunté beaucoup d’histoires au Grec Ésope.','Le Corbeau et le Renard, c’est moi.']},
 {a:['teddy riner','riner','teddy'],c:['Je suis né en Guadeloupe en 1989.','Je mesure plus de deux mètres.','Je suis resté invaincu pendant près de dix ans.','Judoka, plusieurs fois champion olympique, dont à Paris en 2024.']},
 {a:['squeezie','lucas hauchard'],c:['Je suis né en 1996 en région parisienne.','J’ai commencé en 2011 avec des vidéos de jeux vidéo.','J’organise une course automobile entre créateurs de contenu, le GP Explorer.','YouTubeur parmi les plus suivis de France, de mon vrai nom Lucas Hauchard.']}
],
musique:[
 {a:['stromae'],c:['« Alors on danse », 2009','Artiste belge qui mêle électro et chanson.','Il a aussi sorti « Papaoutai » et « Formidable ».','Son nom de scène est le verlan de « maestro ».']},
 {a:['billie eilish','billie','eilish'],c:['« Bad Guy », 2019','Chanteuse américaine qui produit ses titres avec son frère Finneas.','Elle a chanté la chanson du James Bond « Mourir peut attendre ».','Ses initiales sont B. E.']},
 {a:['zaz'],c:['« Je veux », 2010','Chanteuse française à la voix éraillée, inspirée du jazz manouche.','Elle a aussi chanté « On ira ».','Son nom de scène tient en trois lettres.']},
 {a:['michael jackson','jackson','mickael jackson'],c:['« Thriller », 1982','Son clip de quatorze minutes avec des zombies a marqué l’histoire.','Il a aussi chanté « Billie Jean » et « Beat It ».','Le roi de la pop, célèbre pour son moonwalk.']},
 {a:['aya nakamura','aya','nakamura'],c:['« Djadja », 2018','Artiste française née à Bamako, au Mali.','Elle a aussi chanté « Pookie ».','Elle a chanté avec la Garde républicaine à la cérémonie d’ouverture des JO de Paris.']},
 {a:['ed sheeran','sheeran'],c:['« Shape of You », 2017','Chanteur britannique, souvent seul sur scène avec sa pédale de boucle.','Il a aussi chanté « Perfect » et « Thinking Out Loud ».','Roux, guitare à la main, son prénom tient en deux lettres.']},
 {a:['jacques brel','brel'],c:['« Ne me quitte pas », 1959','Chanteur belge qui a fini sa vie aux îles Marquises.','Il a aussi chanté « Amsterdam » et « Le Plat Pays ».','Son prénom est Jacques.']},
 {a:['adele'],c:['« Rolling in the Deep », 2010','Chanteuse britannique qui nomme ses albums d’après son âge.','Elle a aussi chanté « Someone Like You » et « Hello ».','Un seul prénom de cinq lettres, qui commence par A.']},
 {a:['queen'],c:['« Bohemian Rhapsody », 1975','Groupe britannique ; ce morceau de six minutes mélange ballade, opéra et rock.','Ils ont aussi chanté « We Will Rock You ».','Leur chanteur s’appelait Freddie Mercury.']},
 {a:['charles aznavour','aznavour'],c:['« La Bohème », 1965','Chanteur français d’origine arménienne.','Il a aussi chanté « Emmenez-moi ».','Son prénom est Charles.']},
 {a:['angele'],c:['« Tout oublier », 2019, en duo avec son frère','Chanteuse belge révélée sur Instagram.','Elle a aussi chanté « Balance ton quoi » et « Bruxelles je t’aime ».','Un seul prénom de six lettres, qui commence par A.']},
 {a:['the weeknd','weeknd','the weekend'],c:['« Blinding Lights », 2019','Chanteur canadien aux synthés très années 80.','Il a assuré le show de la mi-temps du Super Bowl en 2021.','Son nom de scène ressemble au mot « week-end ».']},
 {a:['rihanna'],c:['« Diamonds », 2012','Chanteuse originaire de la Barbade.','Elle a aussi chanté « Umbrella » et « Work ».','Elle a fondé la marque de maquillage Fenty Beauty.']},
 {a:['johnny hallyday','johnny','hallyday'],c:['« Je te promets », 1986','Rockeur français qui a rempli les stades pendant des décennies.','Il a aussi chanté « Allumer le feu » et « Que je t’aime ».','On l’appelait « l’idole des jeunes ».']},
 {a:['jul'],c:['« Tchikita », 2016','Rappeur marseillais qui sort des albums à un rythme effréné.','Il fait partie des rappeurs qui ont vendu le plus de disques en France.','Son nom de scène tient en trois lettres.']}
],
film:[
 {a:['titanic'],emo:true,c:['🚢🧊💔','Sorti en 1997.','Une histoire d’amour à bord d’un paquebot pendant sa traversée inaugurale.','Réalisé par James Cameron, avec Leonardo DiCaprio.']},
 {a:['intouchables','les intouchables'],emo:true,c:['♿🤝🎶','Film français sorti en 2011.','Un riche aristocrate tétraplégique engage un aide à domicile venu de banlieue.','Avec Omar Sy et François Cluzet.']},
 {a:['le roi lion','roi lion'],emo:true,c:['🦁👑🌅','Film d’animation sorti en 1994.','Un lionceau s’exile après la mort de son père, puis revient réclamer son trône.','Hakuna matata !']},
 {a:['jurassic park'],emo:true,c:['🦖🏝️🧬','Sorti en 1993.','Un milliardaire ouvre sur une île un parc peuplé de créatures clonées.','Réalisé par Steven Spielberg.']},
 {a:['bienvenue chez les chtis','bienvenue chez les ch tis','les chtis'],emo:true,c:['📮🌧️🍟','Film français sorti en 2008.','Un directeur de la Poste du Sud est muté dans le Nord, qu’il imagine glacial.','Réalisé par Dany Boon, avec Kad Merad.']},
 {a:['harry potter','harry potter a l ecole des sorciers'],emo:true,c:['⚡🧙‍♂️🦉','Sorti en 2001.','Un orphelin apprend le jour de ses 11 ans qu’il est sorcier.','Adapté du premier roman de J. K. Rowling.']},
 {a:['amelie poulain','le fabuleux destin d amelie poulain','amelie'],emo:true,c:['🍮🔍🎠','Film français sorti en 2001.','Une serveuse de Montmartre décide de faire en secret le bonheur des gens autour d’elle.','Réalisé par Jean-Pierre Jeunet, avec Audrey Tautou.']},
 {a:['le monde de nemo','nemo','monde de nemo'],emo:true,c:['🐠🔎🌊','Film d’animation sorti en 2003.','Un poisson-clown traverse l’océan pour retrouver son fils capturé par un plongeur.','Il est aidé par Dory, qui oublie tout.']},
 {a:['inception'],emo:true,c:['💤🌀🕰️','Sorti en 2010.','Une équipe s’infiltre dans les rêves pour y implanter une idée.','Réalisé par Christopher Nolan ; une toupie tourne à la fin.']},
 {a:['les visiteurs','visiteurs'],emo:true,c:['🏰⏳🤪','Comédie française sortie en 1993.','Un chevalier et son écuyer du Moyen Âge atterrissent par erreur dans les années 90.','Avec Jean Reno et Christian Clavier.']},
 {a:['avatar'],emo:true,c:['🔵🌳🪐','Sorti en 2009.','Un ancien marine paraplégique explore la planète Pandora dans un corps d’emprunt.','Réalisé par James Cameron, longtemps numéro un du box-office mondial.']},
 {a:['asterix et obelix mission cleopatre','mission cleopatre','asterix mission cleopatre'],emo:true,c:['🏛️🐫👸','Film français sorti en 2002.','Des Gaulois aident un architecte à bâtir un palais en Égypte en trois mois.','Réalisé par Alain Chabat.']},
 {a:['star wars','la guerre des etoiles'],emo:true,c:['⚔️🌌🤖','Le premier film est sorti en 1977.','Un jeune fermier rejoint une rébellion contre un Empire galactique.','Créé par George Lucas, avec Dark Vador.']},
 {a:['la reine des neiges','reine des neiges','frozen'],emo:true,c:['❄️👭⛄','Film d’animation sorti en 2013.','Une princesse aux pouvoirs glacés s’enfuit et plonge son royaume dans l’hiver.','Avec Olaf, le bonhomme de neige.']},
 {a:['le diner de cons','diner de cons'],emo:true,c:['🍽️🤡🚢','Comédie française sortie en 1998.','Un éditeur invite chaque semaine un « idiot » à dîner pour s’en moquer.','Avec Jacques Villeret dans le rôle de François Pignon.']}
]};

// ---------- Niveau difficile ----------
const HARD={
perso:[
 {a:['alan turing','turing'],c:['Je suis né à Londres en 1912.','J’ai couru un marathon en à peine plus de 2 h 46.','Mon test sert encore à juger si une machine peut passer pour un humain.','J’ai aidé à casser le code Enigma pendant la Seconde Guerre mondiale.']},
 {a:['frida kahlo','frida','kahlo'],c:['Je suis née en 1907 près de Mexico.','Un accident de bus à 18 ans m’a laissé des douleurs toute ma vie.','J’ai épousé deux fois le muraliste Diego Rivera.','Peintre mexicaine, je suis célèbre pour mes autoportraits.']},
 {a:['coco chanel','chanel','gabrielle chanel'],c:['Je suis née à Saumur en 1883.','J’ai grandi en partie dans un orphelinat, à Aubazine.','Mon parfum n° 5 est sorti en 1921.','Créatrice de mode, j’ai popularisé la petite robe noire.']},
 {a:['nikola tesla','tesla'],c:['Je suis né en 1856 dans l’actuelle Croatie.','J’ai travaillé pour Thomas Edison avant de me brouiller avec lui.','L’unité de mesure du champ magnétique porte mon nom.','Une marque de voitures électriques porte mon nom.']},
 {a:['josephine baker','baker'],c:['Je suis née à Saint-Louis, aux États-Unis, en 1906.','J’ai été agente de renseignement pour la France libre.','Je suis entrée au Panthéon en 2021.','Meneuse de revue, je dansais avec une ceinture de bananes.']},
 {a:['jean jacques goldman','goldman','jj goldman'],c:['Je suis né à Paris en 1951.','J’ai écrit l’album « D’eux » pour Céline Dion.','J’ai composé la chanson des Restos du cœur.','J’ai chanté « Encore un matin » et « Je te donne ».']},
 {a:['ada lovelace','lovelace'],c:['Je suis née à Londres en 1815.','Mon père était le poète Lord Byron.','J’ai travaillé sur la machine analytique de Charles Babbage.','On me considère comme la première programmeuse de l’histoire.']},
 {a:['antoine griezmann','griezmann'],c:['Je suis né à Mâcon en 1991.','Refusé par plusieurs centres de formation français, j’ai été recruté par un club espagnol.','J’ai été élu meilleur joueur de l’Euro 2016.','Attaquant de l’Atlético de Madrid, champion du monde 2018.']},
 {a:['gustave eiffel','eiffel'],c:['Je suis né à Dijon en 1832.','Mon entreprise a conçu la structure interne de la statue de la Liberté.','J’ai construit le viaduc de Garabit.','Ma tour de fer a été inaugurée pour l’Exposition universelle de 1889.']},
 {a:['serena williams','serena'],c:['Je suis née dans le Michigan en 1981.','J’ai gagné un tournoi du Grand Chelem en étant enceinte.','J’ai remporté 23 titres du Grand Chelem en simple.','Joueuse de tennis américaine, j’ai souvent affronté ma sœur Venus.']},
 {a:['louis pasteur','pasteur'],c:['Je suis né à Dole en 1822.','J’ai d’abord étudié les cristaux.','En 1885, j’ai sauvé le jeune Joseph Meister de la rage.','Le procédé pour conserver le lait porte mon nom.']},
 {a:['hayao miyazaki','miyazaki'],c:['Je suis né à Tokyo en 1941.','L’entreprise de mon père fabriquait des pièces d’avions.','J’ai reçu l’Oscar du film d’animation en 2003.','Cofondateur du studio Ghibli, j’ai réalisé Le Voyage de Chihiro.']},
 {a:['mohamed ali','muhammad ali','cassius clay','ali'],c:['Je suis né à Louisville en 1942.','J’ai été champion olympique à Rome en 1960.','J’ai refusé de partir combattre au Vietnam.','Boxeur surnommé « The Greatest », né Cassius Clay.']},
 {a:['agatha christie','christie'],c:['Je suis née en Angleterre en 1890.','J’ai disparu onze jours en 1926 sans jamais expliquer pourquoi.','Ma pièce « La Souricière » est jouée à Londres depuis 1952.','Romancière, j’ai créé Hercule Poirot.']}
],
musique:[
 {a:['soft cell'],c:['« Tainted Love », 1981','Duo britannique de synthpop.','Ce titre est la reprise d’une chanson soul de 1964.','Leur nom signifie « cellule molle ».']},
 {a:['serge gainsbourg','gainsbourg'],c:['« La Javanaise », 1963','Chanteur français qui a d’abord voulu être peintre.','Il a écrit « Poupée de cire, poupée de son » pour France Gall.','Il a brûlé un billet de 500 francs à la télévision.']},
 {a:['kate bush'],c:['« Running Up That Hill », 1985','Chanteuse britannique qui a eu son premier tube à 19 ans.','Ce titre est revenu en tête des classements en 2022 grâce à une série Netflix.','Elle a aussi chanté « Wuthering Heights ».']},
 {a:['renaud'],c:['« Mistral gagnant », 1985','Chanteur français au bandana rouge.','Il a aussi chanté « Morgane de toi » et « Laisse béton ».','Son nom de scène est aussi celui d’une marque de voitures.']},
 {a:['a ha','aha'],c:['« Take On Me », 1985','Groupe norvégien.','Le clip mélange prises de vue réelles et dessin au crayon.','Leur nom tient en trois lettres, avec un tiret.']},
 {a:['indila'],c:['« Dernière danse », 2013','Chanteuse française révélée par des featurings avec des rappeurs.','Le clip a dépassé le milliard de vues sur YouTube.','Son nom de scène commence par « Ind ».']},
 {a:['leonard cohen','cohen'],c:['« Hallelujah », 1984','Poète et romancier canadien avant d’être chanteur.','Ce titre a été repris des centaines de fois, notamment par Jeff Buckley.','Il a aussi chanté « Suzanne ».']},
 {a:['clara luciani','luciani'],c:['« La Grenade », 2018','Chanteuse française passée par le groupe La Femme.','Elle a aussi chanté « Le Reste » et « Respire encore ».','Son prénom est Clara.']},
 {a:['david bowie','bowie'],c:['« Heroes », 1977','Ce titre a été enregistré à Berlin, près du Mur.','Il s’est inventé un double extraterrestre, Ziggy Stardust.','Chanteur britannique, il a aussi chanté « Space Oddity ».']},
 {a:['nirvana'],c:['« Smells Like Teen Spirit », 1991','Groupe grunge de la région de Seattle.','La pochette de l’album montre un bébé qui nage vers un billet de banque.','Leur chanteur s’appelait Kurt Cobain.']},
 {a:['francoise hardy','hardy'],c:['« Tous les garçons et les filles », 1962','Chanteuse française devenue icône de mode des années 60.','Elle a été mariée à Jacques Dutronc.','Son prénom est Françoise.']},
 {a:['muse'],c:['« Supermassive Black Hole », 2006','Trio britannique de rock.','Ce titre accompagne la partie de baseball du premier film Twilight.','Leur nom désigne une source d’inspiration.']},
 {a:['michel sardou','sardou'],c:['« Les Lacs du Connemara », 1981','Chanteur français, fils de comédiens.','Ce titre est un incontournable des fins de soirée.','Il a aussi chanté « La Maladie d’amour ».']},
 {a:['pink martini'],c:['« Sympathique », 1997','Groupe américain de Portland qui chante aussi en français.','Une douzaine de musiciens qui mêlent jazz, musique latine et chanson.','Leur nom évoque un cocktail rose.']}
],
film:[
 {a:['la haine','haine'],emo:true,c:['🏙️🔫🕐','Film français en noir et blanc sorti en 1995.','Vingt-quatre heures dans la vie de trois jeunes de banlieue après une nuit d’émeutes.','Réalisé par Mathieu Kassovitz, avec Vincent Cassel.']},
 {a:['parasite'],emo:true,c:['🪜🍑🏠','Film sud-coréen sorti en 2019.','Une famille pauvre s’infiltre peu à peu au service d’une famille riche.','Premier film non anglophone à recevoir l’Oscar du meilleur film.']},
 {a:['le voyage de chihiro','voyage de chihiro','chihiro'],emo:true,c:['🐉🛁🐷','Film d’animation japonais sorti en 2001.','Une fillette travaille dans des bains fréquentés par des esprits pour sauver ses parents changés en cochons.','Réalisé par Hayao Miyazaki.']},
 {a:['retour vers le futur'],emo:true,c:['🚗⚡🕰️','Sorti en 1985.','Un adolescent revient en 1955 et met en danger la rencontre de ses parents.','Une DeLorean doit atteindre 88 miles à l’heure.']},
 {a:['les evades','evades','shawshank redemption','les evades de shawshank'],emo:true,c:['⛏️🧱🌧️','Sorti en 1994, adapté d’une nouvelle de Stephen King.','Un banquier condamné à tort passe des années en prison.','Avec Tim Robbins et Morgan Freeman.']},
 {a:['le cinquieme element','cinquieme element'],emo:true,c:['🚕🍊🪐','Film français sorti en 1997, tourné en anglais.','Un chauffeur de taxi du XXIIIe siècle aide une mystérieuse jeune femme à sauver le monde.','Réalisé par Luc Besson, avec Bruce Willis.']},
 {a:['la cite de la peur','cite de la peur'],emo:true,c:['🔨🔪🎬','Comédie française sortie en 1994.','Un tueur en série s’en prend aux projectionnistes d’un film d’horreur pendant le Festival de Cannes.','Écrit et joué par Les Nuls.']},
 {a:['interstellar'],emo:true,c:['🌽🪐⏳','Sorti en 2014.','Un ancien pilote quitte une Terre ravagée par la poussière pour chercher une nouvelle planète.','Réalisé par Christopher Nolan, avec Matthew McConaughey.']},
 {a:['shining','the shining'],emo:true,c:['🏨🪓❄️','Sorti en 1980.','Un écrivain devient gardien d’un hôtel isolé tout l’hiver avec sa famille.','Réalisé par Stanley Kubrick, avec Jack Nicholson.']},
 {a:['le grand bleu','grand bleu'],emo:true,c:['🐬🌊🤿','Film français sorti en 1988.','Deux amis d’enfance s’affrontent en plongée en apnée.','Réalisé par Luc Besson, avec Jean Reno et Jean-Marc Barr.']},
 {a:['pulp fiction'],emo:true,c:['💼💉🍔','Sorti en 1994, Palme d’or à Cannes.','Plusieurs histoires de gangsters de Los Angeles racontées dans le désordre.','Réalisé par Quentin Tarantino, avec John Travolta.']},
 {a:['ratatouille'],emo:true,c:['🐀👨‍🍳🗼','Film d’animation sorti en 2007.','Un rat rêve de devenir chef dans un grand restaurant parisien.','Il se cache sous la toque d’un commis nommé Linguini.']},
 {a:['oss 117','oss 117 le caire nid d espions','le caire nid d espions'],emo:true,c:['🕵️🐪🐔','Comédie française sortie en 2006.','Un agent secret français, sûr de lui et maladroit, enquête en Égypte en 1955.','Avec Jean Dujardin en Hubert Bonisseur de La Bath.']},
 {a:['matrix','the matrix'],emo:true,c:['💊🕶️💻','Sorti en 1999.','Un pirate informatique découvre que le monde qu’il connaît est une simulation.','Avec Keanu Reeves dans le rôle de Neo.']}
]};
for(const k in HARD)for(const q of HARD[k])Q[k].push({...q,d:2});

// ---------- Pays : drapeaux, silhouettes et capitales (données dans pays.json) ----------
const PAYS=require('./pays.json');
const lettres=w=>w.normalize('NFD').replace(/[^A-Za-z]/g,'').length;
const debut=(w,txt)=>`${txt} commence par « ${w[0].toUpperCase()} » et compte ${lettres(w)} lettres.`;
Q.drapeaux=PAYS.filter(p=>p.flag&&p.df).map(p=>({a:p.a,d:p.df,img:p.flag,zoom:true,c:['Zoom sur un morceau du drapeau…',`Continent : ${p.cont}`,p.fait||debut(p.nom,'Son nom'),`Capitale : ${p.cap}`]}));
Q.silhouettes=PAYS.filter(p=>p.shape&&p.ds).map(p=>({a:p.a,d:p.ds,img:p.shape,c:['Voici sa forme, le nord en haut.',`Continent : ${p.cont}`,p.fait||debut(p.nom,'Son nom'),`Capitale : ${p.cap}`]}));
Q.capitales=PAYS.filter(p=>p.dc).map(p=>({a:p.capA,d:p.dc,c:[`Pays : ${p.nom}`,`Continent : ${p.cont}`,debut(p.cap,'Elle'),`Début du nom : « ${p.cap.slice(0,Math.ceil(p.cap.length/2))}… »`]}));

// ---------- Répliques cultes (d = difficulté) ----------
const R=(a,d,rep,an,pitch,qui)=>({a,d,c:[`« ${rep} »`,an,pitch,qui]});
Q.repliques=[
 R(['star wars','la guerre des etoiles'],1,'Que la Force soit avec toi.','Sorti en 1977.','Un jeune fermier rejoint une rébellion contre un Empire galactique.','Créé par George Lucas.'),
 R(['toy story'],1,'Vers l’infini et au-delà !','Film d’animation sorti en 1995.','Des jouets prennent vie quand les humains ont le dos tourné.','Le cow-boy Woody et le ranger de l’espace Buzz l’Éclair.'),
 R(['le seigneur des anneaux','seigneur des anneaux'],1,'Mon précieux…','Premier film sorti en 2001.','Un hobbit doit détruire un anneau maléfique dans un volcan.','Réalisé par Peter Jackson.'),
 R(['oss 117','oss 117 le caire nid d espions','le caire nid d espions'],1,'Comment est votre blanquette ?','Comédie française sortie en 2006.','Un espion français arrogant enquête au Caire en 1955.','Avec Jean Dujardin.'),
 R(['le diner de cons','diner de cons'],1,'Il s’appelle Juste Leblanc.','Comédie française sortie en 1998.','Un éditeur invite un « idiot » à dîner pour s’en moquer.','Avec Jacques Villeret et Thierry Lhermitte.'),
 R(['asterix et obelix mission cleopatre','mission cleopatre'],1,'C’est une bonne situation, ça, scribe ?','Comédie française sortie en 2002.','Des Gaulois aident un architecte à bâtir un palais en Égypte.','Réalisé par Alain Chabat.'),
 R(['les bronzes font du ski','bronzes font du ski','les bronzes'],1,'Sur un malentendu, ça peut marcher.','Comédie française sortie en 1979.','Une bande d’amis part en vacances à la montagne.','Avec la troupe du Splendid, dont Michel Blanc.'),
 R(['forrest gump'],1,'Cours, Forrest, cours !','Sorti en 1994.','Un homme simple traverse sans le vouloir les grands moments de l’histoire américaine.','Avec Tom Hanks.'),
 R(['e t','et','e t l extraterrestre'],1,'E.T. téléphone maison.','Sorti en 1982.','Un garçon cache un extraterrestre perdu dans sa maison.','Réalisé par Steven Spielberg.'),
 R(['harry potter','harry potter a l ecole des sorciers'],1,'Tu es un sorcier, Harry.','Sorti en 2001.','Un orphelin découvre l’école de sorcellerie Poudlard.','Le demi-géant Hagrid lui annonce la nouvelle.'),
 R(['le sixieme sens','sixieme sens'],2,'Je vois des gens qui sont morts.','Sorti en 1999.','Un psychologue tente d’aider un garçon terrifié.','Avec Bruce Willis ; la fin a surpris tout le monde.'),
 R(['apollo 13'],2,'Houston, on a un problème.','Sorti en 1995, inspiré d’une histoire vraie.','Une mission lunaire tourne mal et l’équipage doit rentrer sur Terre.','Avec Tom Hanks.'),
 R(['terminator 2','terminator'],2,'Hasta la vista, baby.','Sorti en 1991.','Un robot venu du futur protège un adolescent.','Avec Arnold Schwarzenegger.'),
 R(['taxi driver'],2,'C’est à moi que tu parles ?','Sorti en 1976.','Un chauffeur de taxi insomniaque sombre peu à peu à New York.','Réalisé par Martin Scorsese, avec Robert De Niro.'),
 R(['le parrain','parrain'],2,'Je vais lui faire une offre qu’il ne pourra pas refuser.','Sorti en 1972.','Le chef d’une famille mafieuse new-yorkaise passe la main à son fils.','Avec Marlon Brando et Al Pacino.'),
 R(['les tontons flingueurs','tontons flingueurs'],2,'Les cons, ça ose tout.','Comédie française sortie en 1963.','Un truand rangé hérite des affaires d’un ami et de sa fille.','Dialogues de Michel Audiard, avec Lino Ventura.'),
 R(['la haine','haine'],2,'Jusqu’ici tout va bien.','Film français sorti en 1995.','Une journée de trois jeunes de banlieue après une nuit d’émeutes.','Réalisé par Mathieu Kassovitz.'),
 R(['the dark knight','dark knight','le chevalier noir'],2,'Pourquoi tant de sérieux ?','Sorti en 2008.','Un justicier masqué affronte un criminel imprévisible à Gotham.','Réalisé par Christopher Nolan.'),
 R(['casablanca'],2,'Nous aurons toujours Paris.','Sorti en 1942.','Au Maroc, un patron de bar retrouve un amour de jeunesse.','Avec Humphrey Bogart et Ingrid Bergman.'),
 R(['titanic'],1,'Je suis le roi du monde !','Sorti en 1997.','Une histoire d’amour sur un paquebot pendant sa traversée inaugurale.','Avec Leonardo DiCaprio.')
];

// ---------- Complète le titre (titres de chansons, jamais les paroles) ----------
const T=(mot,d,titre,qui,sens)=>({a:[mot],d,c:[`« ${titre} »`,qui,sens,`Le mot commence par « ${mot[0].toUpperCase()} » et a ${mot.replace(/ /g,'').length} lettres.`]});
Q.titres=[
 T('danse',1,'Alors on …','Stromae, 2009','Ce qu’on fait sur une piste.'),
 T('promets',1,'Je te …','Johnny Hallyday, 1986','On le fait quand on s’engage.'),
 T('quitte',1,'Ne me … pas','Jacques Brel, 1959','Le contraire de rester avec quelqu’un.'),
 T('rhapsody',1,'Bohemian …','Queen, 1975','Un morceau libre en plusieurs parties.'),
 T('gagnant',1,'Mistral …','Renaud, 1985','Le contraire de perdant.'),
 T('lights',1,'Blinding …','The Weeknd, 2019','Des lumières, en anglais.'),
 T('habitude',1,'Comme d’…','Claude François, 1967','Ce qu’on fait tous les jours sans y penser.'),
 T('élysées',1,'Les Champs-…','Joe Dassin, 1969','Une avenue célèbre de Paris.'),
 T('deep',1,'Rolling in the …','Adele, 2010','Profond, en anglais.'),
 T('rose',1,'La Vie en …','Édith Piaf, 1947','Une couleur, et une fleur.'),
 T('jean',1,'Billie …','Michael Jackson, 1982','Un prénom, ou un tissu de pantalon.'),
 T('mêmes',1,'Tous les …','Stromae, 2013','Identiques.'),
 T('connemara',2,'Les Lacs du …','Michel Sardou, 1981','Une région d’Irlande.'),
 T('spirit',2,'Smells Like Teen …','Nirvana, 1991','Esprit, en anglais.'),
 T('son',2,'Poupée de cire, poupée de …','France Gall, 1965','Ce qui reste du blé, ou ce qu’on entend.'),
 T('hole',2,'Supermassive Black …','Muse, 2006','Un trou, en anglais.'),
 T('hill',2,'Running Up That …','Kate Bush, 1985','Une colline, en anglais.'),
 T('mine',2,'Sweet Child O’ …','Guns N’ Roses, 1987','À moi, en anglais.'),
 T('california',2,'Hotel …','Eagles, 1976','Un État de l’ouest des États-Unis.'),
 T('danse',1,'Dernière …','Indila, 2013','Ce qu’on fait sur une piste.')
];

// ---------- Chansons en émojis ----------
const E=(a,d,emo,quand,qui)=>({a,d,emo:true,c:[emo,quand,qui,`Le titre commence par « ${a[0][0].toUpperCase()} ».`]});
Q.chansons=[
 E(['umbrella'],1,'☂️☔💃','Pop, 2007','Rihanna'),
 E(['diamonds'],1,'💎💎✨','Pop, 2012','Rihanna'),
 E(['allumer le feu'],1,'🕯️🔥🔥','Rock français, 1998','Johnny Hallyday'),
 E(['purple rain'],1,'💜🌧️','Rock, 1984','Prince'),
 E(['barbie girl'],1,'👱‍♀️🎀👧','Eurodance, 1997','Aqua'),
 E(['eye of the tiger'],1,'👁️🐯🥊','Rock, 1982, dans un film de boxe','Survivor'),
 E(['happy'],1,'😀👏🎩','Pop, 2013','Pharrell Williams'),
 E(['thriller'],1,'🧟💃🌕','Pop, 1982','Michael Jackson'),
 E(['la mer'],1,'🌊🏖️🎶','Chanson française, 1946','Charles Trenet'),
 E(['la vie en rose'],1,'❤️🌹🌹','Chanson française, 1947','Édith Piaf'),
 E(['rocket man'],2,'🧑‍🚀🚀👨','Pop rock, 1972','Elton John'),
 E(['ice ice baby'],2,'🧊🧊👶','Rap, 1990','Vanilla Ice'),
 E(['highway to hell','highway to hell'],2,'🛣️➡️😈🔥','Hard rock, 1979','AC/DC'),
 E(['the lion sleeps tonight','le lion est mort ce soir'],2,'🦁😴🌙','Années 60, reprise des dizaines de fois','The Tokens'),
 E(['papaoutai','papa ou t es'],2,'👨❓📍','Pop, 2013','Stromae'),
 E(['ghostbusters'],2,'👻🚫🔫','Générique de film, 1984','Ray Parker Jr.'),
 E(['99 luftballons','99 red balloons'],2,'9️⃣9️⃣🎈','Pop allemande, 1983','Nena'),
 E(['over the rainbow'],2,'🌈⬆️🎶','Comédie musicale, 1939','Judy Garland'),
 E(['singin in the rain','singing in the rain','chantons sous la pluie'],2,'🎤🌧️☂️','Comédie musicale, 1952','Gene Kelly'),
 E(['yellow submarine'],2,'💛🌊🚢','Pop, 1966','The Beatles')
];

// ---------- Expressions françaises en émojis ----------
const X=(a,d,emo,sens)=>({a:[a],d,emo:true,c:[emo,`${a.split(/[ -]/).length} mots.`,sens,`Elle commence par « ${a.split(' ')[0]} ».`]});
Q.expressions=[
 X('poser un lapin',1,'📍🐰','Ne pas venir à un rendez-vous.'),
 X('il pleut des cordes',1,'🌧️🪢🪢','Il pleut très fort.'),
 X('avoir le cafard',1,'🪳😢','Être déprimé.'),
 X('avoir la chair de poule',1,'🥩🐔🥶','Frissonner de froid ou de peur.'),
 X('tomber dans les pommes',1,'⬇️🍎🍏','S’évanouir.'),
 X('raconter des salades',1,'🗣️🥗','Mentir.'),
 X('les doigts dans le nez',1,'👉👃','Très facilement.'),
 X('casser les pieds',1,'💥🦶🦶','Agacer quelqu’un.'),
 X('donner sa langue au chat',1,'🎁👅🐱','Abandonner, renoncer à deviner.'),
 X('coûter les yeux de la tête',1,'💸👀🧠','Être très cher.'),
 X('avoir un poil dans la main',1,'🖐️〰️😴','Être très paresseux.'),
 X('mettre son grain de sel',2,'🌾🧂','Se mêler d’une conversation sans y être invité.'),
 X('avoir une araignée au plafond',2,'🕷️🏠⬆️','Être un peu fou.'),
 X('prendre ses jambes à son cou',2,'🦵🦵🦒','S’enfuir en courant.'),
 X('avoir d’autres chats à fouetter',2,'🐈🐈‍⬛➕','Avoir des choses plus importantes à faire.'),
 X('être sur son trente-et-un',2,'3️⃣1️⃣👔✨','Être très bien habillé.'),
 X('avoir le melon',2,'🍈🧠','Être prétentieux.'),
 X('ça ne mange pas de pain',2,'🚫🍽️🍞','Ça ne coûte rien d’essayer.'),
 X('tourner autour du pot',2,'🔄🏺','Ne pas aller droit au but.'),
 X('avoir le cœur sur la main',2,'❤️🖐️','Être très généreux.')
];

// ---------- Jeux vidéo ----------
Q.jeux=[
 {a:['minecraft'],d:1,c:['Sorti officiellement en 2011, créé par un Suédois surnommé Notch.','Le monde y est entièrement fait de cubes.','Les Creepers explosent quand ils s’approchent.','Racheté par Microsoft en 2014.']},
 {a:['tetris'],d:1,c:['Créé en 1984 par un ingénieur soviétique.','Il n’y a ni héros ni histoire.','Sept formes de pièces tombent du haut de l’écran.','On complète des lignes pour les faire disparaître.']},
 {a:['pac man','pacman'],d:1,c:['Sorti en 1980 au Japon.','Ses ennemis s’appellent Blinky, Pinky, Inky et Clyde.','Il avale des pastilles dans un labyrinthe.','Un rond jaune à la bouche grande ouverte.']},
 {a:['fortnite'],d:1,c:['Sorti en 2017, édité par Epic Games.','Cent joueurs sautent d’un bus volant.','On peut construire des murs et des rampes en plein combat.','Battle royale célèbre pour ses danses.']},
 {a:['super mario','mario','super mario bros'],d:1,c:['Sorti en 1985 sur NES.','Le héros est plombier.','Il doit sauver la princesse Peach.','Il saute sur des Goombas avec son frère Luigi.']},
 {a:['pokemon'],d:1,c:['Sorti en 1996 au Japon sur Game Boy.','Son créateur collectionnait les insectes quand il était enfant.','On capture des créatures dans des balles rouges et blanches.','Le slogan : « Attrapez-les tous ! »']},
 {a:['among us'],d:1,c:['Sorti en 2018, devenu viral en 2020.','Les joueurs réparent un vaisseau spatial.','Des imposteurs se cachent parmi l’équipage.','On vote pour éjecter le suspect.']},
 {a:['sonic','sonic the hedgehog'],d:1,c:['Sorti en 1991 chez Sega.','Il ramasse des anneaux dorés.','Son ennemi est le docteur Eggman.','Un hérisson bleu ultra rapide.']},
 {a:['zelda','the legend of zelda','legend of zelda'],d:2,c:['Sorti en 1986, imaginé par Shigeru Miyamoto.','Le royaume s’appelle Hyrule.','Le héros porte une tunique verte et une épée de légende.','Le héros s’appelle Link, la princesse donne son nom au jeu.']},
 {a:['rayman'],d:2,c:['Créé par le Français Michel Ancel, sorti en 1995.','Édité par Ubisoft.','Le héros n’a ni bras ni jambes : ses mains et ses pieds flottent.','Des lapins crétins lui ont ensuite volé la vedette.']},
 {a:['gta','grand theft auto'],d:2,c:['Série née en 1997, créée par des développeurs écossais.','Le cinquième épisode se déroule à Los Santos.','On peut voler n’importe quelle voiture dans la rue.','Son nom désigne le vol de voiture en anglais juridique.']},
 {a:['street fighter'],d:2,c:['Le deuxième épisode, sorti en 1991, a lancé la mode des jeux de combat.','Ryu et Ken en sont les héros.','Le cri « Hadouken » accompagne une boule d’énergie.','Des combats de rue entre champions du monde entier.']},
 {a:['assassin s creed','assassins creed'],d:2,c:['Série lancée en 2007 par Ubisoft Montréal.','On revit les souvenirs de ses ancêtres grâce à l’Animus.','Les héros sautent de très haut dans des charrettes de foin.','Les héros portent une capuche et une lame secrète.']},
 {a:['animal crossing'],d:2,c:['Série lancée en 2001 au Japon.','L’épisode de mars 2020 a été un refuge pendant le confinement.','On rembourse ses dettes à un tanuki nommé Tom Nook.','On vit sur une île avec des animaux pour voisins.']},
 {a:['league of legends','lol'],d:2,c:['Sorti en 2009, édité par Riot Games.','Deux équipes de cinq s’affrontent sur la Faille de l’invocateur.','La série Arcane en est tirée.','On le surnomme LoL.']}
];

// ---------- Tes photos ----------
// Dépose tes images dans public/img/photos puis ajoute une ligne par photo, par exemple :
//  {a:['zinedine zidane','zidane'],d:1,img:'img/photos/zidane.jpg',flou:true,c:['Photo floutée…','Sportif français.','Champion du monde 1998.','On l’appelle Zizou.']},
// flou:true dévoile l’image en la rendant nette ; zoom:true la dévoile en dézoomant.
// N’utilise que des photos que tu as le droit d’utiliser (par exemple sous licence libre sur Wikimedia Commons).
Q.photos=[
];

module.exports={Q,THEMES};
