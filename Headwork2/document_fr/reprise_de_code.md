# Manuel de reprise de code

Le projet Headwork est un projet Angular, nécessitant une installation particulière détaillée ci-dessous.

## 1. Mise en place de l'environnement de travail
### 1.1. Récupération du projet sous Windows
Sur la [page GitHub du projet](https://github.com/Rhohen/HD12), cliquer sur "Clone or Download".

Télécharger l'archive et l'extraire dans le répertoire de votre choix.

### 1.2. Installation de Node.js sous Windows
Sur le [site de Node.js](https://nodejs.org/en/download/), télécharger "Windows installer" et suivre les instructions d'installation fournies.

Dans la console Windows, se positionner à la racine du projet.

Exécuter la commande `npm install -g @angular/cli`.

Si une erreur relative à la version des package apparaît, exécuter la commande `npm update`.

Pour plus de détails sur la mise en place d'un projet Angular tel que celui-ci, consulter le [tutoriel Angular](https://angular.io/guide/quickstart), très complet.

### 1.3. Lancement du serveur local
Exécuter, à la racine du projet, la commande `ng serve -o`.

Après quelques minutes, le serveur est lancé et le navigateur ouvre la page d'acceuil du site en local.

## 2. Organisation des fichiers du projet
Les fichiers sont organisés selon le diagramme suivant :

![Schéma de navigation du site Headwork](img/Schema_navigation_site.png)

## 3. Fonctionnalités implémentées et à implémenter
Le tableau ci-dessous détaille les fonctionnalités du site définies après analyse de l'existant.

| FP01 | Fonctionnalité principale 01 reprenant la partie connexion des utilisateurs : |
| :---: | :---: |
| FS11 | Tentative de login |
| FS12 | Récupération des informations |
| FS13 | Actualisation du site après login |
| **FP02** | **Fonctionnalité principale 02 reprenant la partie d’affichage de la liste des tâches :** |
| FS21 | Récupération des tâches |
| FS22 | Lien vers la view d’une tâche spécifique |
| FS23 | Système de filtrage et tri des tâches |
| **FP03** | **Fonctionnalité principale 03 reprenant la partie de connexion du front end à la base de données :** |
| FS31 | Adaptation des fonctions php avec angular |
| FS32 | Récupération des valeurs de retour des fonctions et traitement |
| FS33 | Transmission des données aux éléments angular |
| FS34 | Actualisation de la base de données |
| **FP04** | **Fonctionnalité principale 04 reprenant la partie de conception et développement d’une page d’accueil :** |
| FS41 | Différenciation page d’accueil hors ligne et connecté |
| FS42 | Ajout d’une présentation du site |
| FS43 | Accès rapide à une liste de tâche |
| FS44 | Actualité du site |
| **FP05** | **Fonctionnalité principale 05 reprenant la partie d’affichage d’une tâche :** |
| FS51 | Récupération de la tâche dans la base de données |
| FS52 | Insertion du code Javascript dans l'élément tâche |
| FS53 | Généralisation de tâche |
| **FP06** | **Fonctionnalité principale 06 reprenant la partie profil d’un utilisateur :** |
| FS61 | Refonte du système d’arbre de compétence
| FS62 | Ajout d’un historique des tâches effectuées
| FS63 | Ajout de préférences utilisateur pour le filtrage et le tri des tâches
| **FP07** | **Fonctionnalité principale 07 reprenant la partie de design général du site Headwork :** |
| FS71 | Ajout d’un footer |
| FS72 | Ajout d’une page de crédit |
| FS73 | Ajout d’une FAQ |
| FS74 | Ajout du logo |
| **FP08** | **Fonctionnalité principale 08 reprenant la partie de création d’une tâche :** |
| FS81 | Généralisation d’une tâche |
| FS82 | Ajout de la tâche dans la base de données |
| **FP09** | **Fonctionnalité principale 09 reprenant le mode administrateur :** |
| FS91 | Gestion des utilisateurs |
| FS92 | Création de compétences |
| FS93 | Validation de tâche |
| FS94 | Gestion des tâches |
| **FP10** | **Fonctionnalité principale 10 reprenant le mode super admin :** |
| FS101 | Vue de crowd Artefact |
| FS102 | Démo du site |
| FS103 | Bouton restart |

<br><br>

---

Autres documents d'information :  
- [manuel d'utilisation](https://github.com/Rhohen/HD12/blob/master/Headwork2/document_fr/utilisation.md) ;
- [document post-mortem](https://github.com/Rhohen/HD12/blob/master/Headwork2/document_fr/post_mortem.md).
