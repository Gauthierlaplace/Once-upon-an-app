# Projet - Once upon an App (front)

## Sommaire

- [Projet - Once upon an App (front)](#projet---once-upon-an-app-front)
  - [Sommaire](#sommaire)
  - [Pour faire tourner le front EN LOCAL](#pour-faire-tourner-le-front-en-local)
    - [Clonez le repository](#clonez-le-repository)
    - [Allez dans le dossier du projet](#allez-dans-le-dossier-du-projet)
    - [Installez les dépendances](#installez-les-dépendances)
    - [Paramètrez la connexion à l'API](#paramètrez-la-connexion-à-lapi)
    - [Pour accèder à votre App, lancez votre serveur](#pour-accèder-à-votre-app-lancez-votre-serveur)
    - [Informations supplémentaires sur Create React App](#informations-supplémentaires-sur-create-react-app)
  - [Pour déployer avec Surge](#pour-déployer-avec-surge)
    - [Installez Surge](#installez-surge)
    - [Créez un compte (si c'est votre première utilisation de Surge)](#créez-un-compte-si-cest-votre-première-utilisation-de-surge)
    - [Créez le dossier build (optimisation React)](#créez-le-dossier-build-optimisation-react)
    - [Déploiement](#déploiement)

## Pour faire tourner le front EN LOCAL

### Clonez le repository

Déplacez-vous dans le dossier de votre choix, puis clonez le repo :

```bash
git clone git@github.com:Gauthierlaplace/Once-upon-an-app-front.git
```

### Allez dans le dossier du projet

```bash
cd Once-upon-an-app-front/
```

### Installez les dépendances  

```bash
npm install
```

### Paramètrez la connexion à l'API

Dans le fichier .env (pensez à redémarrer le serveur après chaque modification du fichier .env)

```env
    REACT_APP_API_BASE={adresse-de-l-API}
```

Attention, REACT_APP_API_BASE ne se termine pas par un "/".
Le slash sera au début de chaque route.

### Pour accèder à votre App, lancez votre serveur

```bash
npm start
```

Le front sera accessible sur : localhost:3000

### Informations supplémentaires sur Create React App

[Create React App](https://github.com/facebook/create-react-app)

## Pour déployer avec Surge

/!\ ATTENTION, le déploiement avec Surge ne concerne que le front

L'API doit être déployée par un autre moyen.

[Rappel déploiement avec Surge](https://kourou.oclock.io/ressources/fiche-recap/mettre-en-production-sur-surge/#anchor-m%c3%a9ga-bonus)

### Installez Surge

```bash
npm install --global surge
```

### Créez un compte (si c'est votre première utilisation de Surge)

```bash
surge login
```

### Créez le dossier build (optimisation React)

A la racine du projet front : (Once-upon-an-app-front/)

```bash
npm run build
```

### Déploiement

/!\ ATTENTION Si votre API n'est pas en https, il faut préciser à surge le http avant l'url 

(le déploiement est en https par défaut)

```bash
surge dossier-a-mettre-en-ligne --domain http://mon-domaine.surge.sh
```
