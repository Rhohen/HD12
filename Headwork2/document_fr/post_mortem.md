# Document post-mortem

## Etat du projet à la livraison
### Ce qui fonctionne

| FP01 | Fonctionnalité principale 01 reprenant la partie connexion des utilisateurs : |
| :----------- | :------ |
| FS11 | Tentative de login |
| FS12 | Récupération des informations |
| FS13 | Actualisation du site après login |

| FP02 | Fonctionnalité principale 02 reprenant la partie d’affichage de la liste des tâches : |
| :----------- | :------ |
| FS21 | Récupération des tâches |
| FS22 | Lien vers la view d’une tâche spécifique |
| FS23 | Système de filtrage et tri des tâches |

| FP03 | Fonctionnalité principale 03 reprenant la partie de connexion du front end à la base de données : |
| :----------- | :------ |
| FS31 | Adaptation des fonctions php avec angular |
| FS32 | Récupération des valeurs de retour des fonctions et traitement |
| FS33 | Transmission des données aux éléments angular |
| FS34 | Actualisation de la base de données |

| FP04 | Fonctionnalité principale 04 reprenant la partie de conception et développement d’une page d’accueil : |
| :----------- | :------ |
| FS41 | Différenciation page d’accueil hors ligne et connecté |
| FS42 | Ajout d’une présentation du site |
| FS43 | Accès rapide à une liste de tâche |
| FS44 | Actualité du site |

| FP05 | Fonctionnalité principale 05 reprenant la partie d’affichage d’une tâche : |
| :----------- | :------ |
| FS51 | Récupération de la tâche dans la base de données |
| FS52 | Insertion du code Javascript dans l'élément tâche |
| FS53 | Généralisation de tâche |

| FP06 | Fonctionnalité principale 06 reprenant la partie profil d’un utilisateur : |
| :----------- | :------ |
| FS61 | Refonte du système d’arbre de compétence
| FS62 | Ajout d’un historique des tâches effectuées
| FS63 | Ajout de préférences utilisateur pour le filtrage et le tri des tâches

| FP07 | Fonctionnalité principale 07 reprenant la partie de design général du site Headwork : |
| :----------- | :------ |
| FS71 | Ajout d’un footer |
| FS72 | Ajout d’une page de crédit |
| FS73 | Ajout d’une FAQ |
| FS74 | Ajout du logo |

| FP08 | Fonctionnalité principale 08 reprenant la partie de création d’une tâche : |
| :----------- | :------ |
| FS81 | Généralisation d’une tâche |
| FS82 | Ajout de la tâche dans la base de données |

|FP09 | Fonctionnalité principale 09 reprenant le mode administrateur : |
| :----------- | :------ |
|FS91 | Gestion des utilisateurs |
|FS92 | Création de compétences |
|FS93 | Validation de tâche |
|FS94 | Gestion des tâches |

| FP10 | Fonctionnalité principale 10 reprenant le mode super admin : |
| :----------- | :------ |
| FS101 | Vue de crowd Artefact |
| FS102 | Démo du site |
| FS103 | Bouton restart |



### Ce qui ne fonctionne pas


La liaison à la base de données SQL headwork n'a pas été finalisée. Des scripts de laisons php existent dans le dossier API à la racine du projet mais ils doivent être finalisés et adaptés pour chacune des fonctionnalités.

## Déroulement du projet

...


## Axes d'amélioration

...
<br><br>

---

Autres documents d'information :  
- [manuel d'utilisation](https://github.com/Rhohen/HD12/blob/master/Headwork2/document_fr/utilisation.md) ;
- [manuel de reprise de code](https://github.com/Rhohen/HD12/blob/master/Headwork2/document_fr/reprise_de_code.md).
