# Document post-mortem

## Etat du projet à la livraison
### Eléments implémentés

| FP01 | Fonctionnalité principale 01 reprenant la partie connexion des utilisateurs |
| :--- | :--- |
| FS11 | Tentative de login |
| FS12 | Récupération des informations |
| FS13 | Actualisation du site après login |

La fonctionnalité FP01 a été codée dans sa majeure partie en local (via des fichiers JSON d'utilisateurs). La connexion est possible, en tant qu'utilisateur, admin et superadmin via un fichier d'utilisateurs json. Le site s'actualise en fonction des utilisateurs connectés.

| FP02 | Fonctionnalité principale 02 reprenant la partie d’affichage de la liste des tâches |
| :--- | :--- |
| FS21 | Récupération des tâches |
| FS22 | Lien vers la view d’une tâche spécifique |
| FS23 | Système de filtrage et tri des tâches |

La récupération des tâches se fait entièrement en local. L'affichage des tâches permet également de les trier et de les filtrer. Le bouton "play" permet d'accéder à la tâche en question.

| FP04 | Fonctionnalité principale 04 reprenant la partie de conception et développement d’une page d’accueil |
| :--- | :--- |
| FS41 | Différenciation page d’accueil hors ligne et connecté |
| FS42 | Ajout d’une présentation du site |
| FS43 | Accès rapide à une liste de tâche |
| FS44 | Actualité du site |

Il n'y a pour le moment pas de différenciation entre la page d'accueil hors ligne et connecté. La présentation du site et l'accès rapide à la liste des tâches sont implementés.

| FP05 | Fonctionnalité principale 05 reprenant la partie d’affichage d’une tâche |
| :--- | :--- |
| FS51 | Récupération de la tâche dans la base de données |
| FS52 | Insertion du code Javascript dans l'élément tâche |
| FS53 | Généralisation de tâche |

L'affichage d'une tâche est implementé. Il est possible d'afficher une tâche créée avec le système de création de tâche ou une tâche étant contenue dans du code javascript. La généralisation de tâche a été commencée grâce à l'outil de création de tâche mais pourra être améliorée pour affiner de plus en plus les types de tâches.

| FP07 | Fonctionnalité principale 07 reprenant la partie de design général du site Headwork |
| :--- | :--- |
| FS71 | Ajout d’un footer |
| FS72 | Ajout d’une page de crédit |
| FS73 | Ajout d’une FAQ |
| FS74 | Ajout du logo |

Le footer et le logo du site ont été inclus.
La page de crédit et la FAQ doivent encore être créées.

| FP08 | Fonctionnalité principale 08 reprenant la partie de création d’une tâche |
| :--- | :--- |
| FS81 | Généralisation d’une tâche |
| FS82 | Ajout de la tâche dans la base de données |

Une page de création de tâche été créée. Il est possible d'ajouter une tâche consistant en du code javascript directement, ou bien de créer une tâche avec l'outil, comprenant plusieurs possiblités telles que les questions à input, les QCM, l'importation d'images et de fichiers pdf...

|FP09 | Fonctionnalité principale 09 reprenant le mode administrateur |
| :--- | :--- |
|FS91 | Gestion des utilisateurs |
|FS92 | Création de compétences |
|FS93 | Validation de tâche |
|FS94 | Gestion des tâches |

Une gestion d'utilisateur simple permettant de les bannir a été ajoutée. La validation et suppression de tâche est également possible.
La partie de création de compétences n'a pas été implémentée.

### Eléments à implémenter

| FP03 | Fonctionnalité principale 03 reprenant la partie de connexion du front end à la base de données |
| :--- | :--- |
| FS31 | Adaptation des fonctions php avec angular |
| FS32 | Récupération des valeurs de retour des fonctions et traitement |
| FS33 | Transmission des données aux éléments angular |
| FS34 | Actualisation de la base de données |

La liaison à la base de données SQL Headwork n'a pas été finalisée. Des scripts de liaison php existent dans le dossier API à la racine du projet mais ils doivent être finalisés et adaptés pour chacune des fonctionnalités.

| FP06 | Fonctionnalité principale 06 reprenant la partie profil d’un utilisateur |
| :--- | :--- |
| FS61 | Refonte du système d’arbre de compétence |
| FS62 | Ajout d’un historique des tâches effectuées |
| FS63 | Ajout de préférences utilisateur pour le filtrage et le tri des tâches |

Le profil utilisateur n'a pas pu être implémenté.

| FP10 | Fonctionnalité principale 10 reprenant le mode super admin |
| :----------- | :------ |
| FS101 | Vue de crowd Artefact |
| FS102 | Démo du site |
| FS103 | Bouton restart |

Cette partie est toujours à implementer. Le superadmin peut cependant promovoir un utilisateur en administrateur - et inversement, destituer un administrateur en utilisateur. Nous avons également décidé que les superadmin ne pourraient être ajoutés que manuellement, directement dans la base de données.

## Déroulement du projet
La communication a principalement été faite via Discord, une application regroupant un tchat écrit et vocal.<br>
L'outil Trello a aussi été utilisé par certains membres du groupe pour la répartition des tâches, une todo-list.<br>
Des réunions hebdomadaires à l'université ou en audioconférence ont aussi permis de faire le point sur l'avancement et de se répartir les tâches au cours du projet. Les rapports de réunion sont disponibles sur le Drive, [ici](https://drive.google.com/drive/folders/1t8fLadVgCTGe_UEUTYtVCEY1GNZfwlm8).

Dans un premier temps, nous avons dû prendre en main le framework Angular et mettre en place un environnement de travail sur nos machines personnelles.

Nous étions partis sur une méthodologie Agile, en implémentant les fonctionnalités progressivement. Il y a cependant eu plusieurs déconvenues, à commencer par un absentéisme récurrent. Les tâches attribuées n'ont pas toutes été réalisées comme il était convenu. Le code produit était éparpillé sur des machines différentes et non centralisé sur les plateformes prévues à cet effet, malgré la mise en place d'un GitHub et GitLab (avec tutoriel d'utilisation), certains éléments de code ont ainsi été perdus. Les effectifs ayant chutés ineluctablement, une baisse de productivité généralisée a frappé le projet de plein fouet.

Par ailleurs, le projet était initialement séparé en deux parties distinctes : Headwork et IAT ; la partie IAT s'est complètement perdue après avoir été mise en suspens.

## Axes d'amélioration
Il reste un certain nombre de fonctionnalités à implémenter, détaillées dans le [manuel de reprise de code](https://github.com/Rhohen/HD12/blob/master/Headwork2/document_fr/reprise_de_code.md). 

On peut également affiner l'outil de création de tâche ainsi que les catégories de tâches, permettant par exemple de proposer une carte OpenStreetMap pour localiser un lieu.

Il serait également intéressant de développer une version mobile. En effet, le principe étant de séduire un maximum d'utilisateurs (crowdsourcing oblige), une version mobile permettrait une utilisation plus souple, la résolution de tâches sur les moments de temps libre (dans les transports, dans une salle d'attente...) à la manière d'un jeu de réflexion.

En termes d'organisation, la taille du groupe de projet était peut-être trop grande pour une répartition des tâches efficace (14 étudiants, à l'origine). Nous avions tenté de faire des sous-équipes assignées à une tâche en particulier, sans grand succès, chacun attendant que d'autres fassent le travail. Nous aurions peut-être eu plus de résultats en ayant eu davantage de comptes à rendre individuellement, en mettant chacun face à ses responsabilités, sans doute aux détriments de l'autonomie, mais elle n'était visiblement pas envisageable.
<br><br>

---

Autres documents d'information :  
- [manuel d'utilisation](https://github.com/Rhohen/HD12/blob/master/Headwork2/document_fr/utilisation.md) ;
- [manuel de reprise de code](https://github.com/Rhohen/HD12/blob/master/Headwork2/document_fr/reprise_de_code.md).
