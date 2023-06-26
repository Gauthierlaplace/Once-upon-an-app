# Projet Apothéose - Adventure RPG (front)

## Sommaire

  - [Cloner le repository](#cloner-le-repository)
  - [Aller dans le dossier du projet](#aller-dans-le-dossier-du-projet)
  - [Installer les dépendances](#installer-les-dépendances)
  - [Créer la BDD](#créer-la-bdd)
    - [Dans Adminer](#dans-adminer)
  - [Paramètrage de la connexion serveur Adminer pour accès BDD en local](#paramètrage-de-la-connexion-serveur-adminer-pour-accès-bdd-en-local)
  - [Ajout du token JWT](#ajout-du-token-jwt)
    - [Pour accèder a votre App, lancer votre server](#pour-accèder-a-votre-app-lancer-votre-server)

### Cloner le repository

```bash
git clone git@github.com:O-clock-Radium/projet-jeu-de-role-aventure-front.git
```

### Aller dans le dossier du projet

```bash
cd projet-jeu-de-role-aventure-front/
```

### Installer les dépendances  

```bash
npm install
```

### Paramètrage de la connexion à l'API

Dans le fichier .env

```env
    REACT_APP_API_BASE={adresse-de-l-API}
```

Attention, REACT_APP_API_BASE ne se termine pas par un "/".
Le slash sera au début de chaque route.

#### Pour accèder a votre App, lancer votre server

```bash
npm start
```

#### Informations supplémentaires sur Create React App
[Create React App](https://github.com/facebook/create-react-app).

#### Pour la mise en production - `npm run build`
