// Banque de questions. Pour ajouter un thème : ajoute une entrée dans THEMES et une liste dans Q.
// a = réponses acceptées (sans accents, minuscules), c = 4 indices du plus dur au plus facile,
// emo = true si le premier indice est un rébus en émojis.
const THEMES=[
  {id:'perso',name:'Qui suis-je ?',q:'Qui suis-je ?'},
  {id:'musique',name:'Qui chante ça ?',q:'Qui chante ce titre ?'},
  {id:'film',name:'Devine le film',q:'Quel est ce film ?'}
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
module.exports={Q,THEMES};
