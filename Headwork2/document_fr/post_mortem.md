# Document post-mortem

## Etat du projet à la livraison
### Eléments implémentés

| FP01 | Fonctionnalité principale 01 reprenant la partie connexion des utilisateurs : |
| :----------- | :------ |
| FS11 | Tentative de login |
| FS12 | Récupération des informations |
| FS13 | Actualisation du site après login |

La fonctionnalité FP01 à été codé dans sa majeur partie en local. La connexion est possible, en tant qu'utilisateur, admin et superadmin via uun fichier d'utilisateurs json. Le site s'actualise en fonction des utilisateurs connectés.

| FP02 | Fonctionnalité principale 02 reprenant la partie d’affichage de la liste des tâches : |
| :----------- | :------ |
| FS21 | Récupération des tâches |
| FS22 | Lien vers la view d’une tâche spécifique |
| FS23 | Système de filtrage et tri des tâches |

La récupération des tâches se fait entièrement en local. L'affichage des tâches permet également de les trier et de les filtrer. Le bouton play permet d'acceder à la tâche en question.

| FP04 | Fonctionnalité principale 04 reprenant la partie de conception et développement d’une page d’accueil : |
| :----------- | :------ |
| FS41 | Différenciation page d’accueil hors ligne et connecté |
| FS42 | Ajout d’une présentation du site |
| FS43 | Accès rapide à une liste de tâche |
| FS44 | Actualité du site |

Il n'y a pour le moment pas de différenciation de page d'accuueil en hors ligne et connecté. La présentation du site et l'accès rapide à la liste des tâches sont implementés.

| FP05 | Fonctionnalité principale 05 reprenant la partie d’affichage d’une tâche : |
| :----------- | :------ |
| FS51 | Récupération de la tâche dans la base de données |
| FS52 | Insertion du code Javascript dans l'élément tâche |
| FS53 | Généralisation de tâche |

L'affichage d'une tâche est implementé. Il est possible d'afficher uune tâche créée avec le systèeme de création de tâche ou une tâche étant contenu dans du code javascript. La généralisation de tâche a été commencé grâce à l'outil de création de tâche mais pourra être constamment améliorée à mesure que l'on veut spécifier les tâches.

| FP07 | Fonctionnalité principale 07 reprenant la partie de design général du site Headwork : |
| :----------- | :------ |
| FS71 | Ajout d’un footer |
| FS72 | Ajout d’une page de crédit |
| FS73 | Ajout d’une FAQ |
| FS74 | Ajout du logo |

Le footer et le logo du site ont été inclus.
La page de crédit et la FAQ doivent encore être créé.

| FP08 | Fonctionnalité principale 08 reprenant la partie de création d’une tâche : |
| :----------- | :------ |
| FS81 | Généralisation d’une tâche |
| FS82 | Ajout de la tâche dans la base de données |

Une page de création de tâche été créée. Il est possible d'ajouter une tâche consistant en du code javascript directement; Ou bien de créer uun tâche avec l'outil, comprenant plusieurs possiblités comme les questions à input, les QCM, l'importation d'images et de fichiers pdf...

|FP09 | Fonctionnalité principale 09 reprenant le mode administrateur : |
| :----------- | :------ |
|FS91 | Gestion des utilisateurs |
|FS92 | Création de compétences |
|FS93 | Validation de tâche |
|FS94 | Gestion des tâches |

Une gestion d'utilisateur simple consistant à les bannir à été ajouté. La validation et suppression de tâche est également possible.
La partie de création de compétence n'a pas été implémentée.

### Eléments à implémenter

| FP03 | Fonctionnalité principale 03 reprenant la partie de connexion du front end à la base de données : |
| :----------- | :------ |
| FS31 | Adaptation des fonctions php avec angular |
| FS32 | Récupération des valeurs de retour des fonctions et traitement |
| FS33 | Transmission des données aux éléments angular |
| FS34 | Actualisation de la base de données |

La liaison à la base de données SQL headwork n'a pas été finalisée. Des scripts de laisons php existent dans le dossier API à la racine du projet mais ils doivent être finalisés et adaptés pour chacune des fonctionnalités.

| FP06 | Fonctionnalité principale 06 reprenant la partie profil d’un utilisateur : |
| :----------- | :------ |
| FS61 | Refonte du système d’arbre de compétence |
| FS62 | Ajout d’un historique des tâches effectuées |
| FS63 | Ajout de préférences utilisateur pour le filtrage et le tri des tâches |

| FP10 | Fonctionnalité principale 10 reprenant le mode super admin : |
| :----------- | :------ |
| FS101 | Vue de crowd Artefact |
| FS102 | Démo du site |
| FS103 | Bouton restart |

Cette partie là est toujours à implementé. Le superadmin peut par contre promovoir un utilisateur en administrateur, et inversement, destituer un adminstrateur en utilisateur. Nous avons également décidé que les superadmin ne pourrait être ajouté que manuellement dans la base de données directement.

## Déroulement du projet

...


## Axes d'amélioration

...
<br><br>

---

Autres documents d'information :  
- [manuel d'utilisation](https://github.com/Rhohen/HD12/blob/master/Headwork2/document_fr/utilisation.md) ;
- [manuel de reprise de code](https://github.com/Rhohen/HD12/blob/master/Headwork2/document_fr/reprise_de_code.md).
