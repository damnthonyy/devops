# 🚀 User API DevOps

Une API REST simple pour la gestion d'utilisateurs, développée avec Node.js, TypeScript et Express, incluant une pipeline CI/CD complète.

## 📋 Table des matières

- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [API Endpoints](#api-endpoints)
- [Tests](#tests)
- [CI/CD](#cicd)
- [Structure du projet](#structure-du-projet)
- [Développement](#développement)

## 📝 Description

Ce projet est une API REST simple permettant de gérer des utilisateurs (CRUD). Il a été développé dans le cadre d'un projet DevOps pour démontrer les bonnes pratiques de développement, de test et de déploiement continu.

## ✨ Fonctionnalités

- **CRUD complet** pour la gestion des utilisateurs
- **Validation des données** (nom et email requis)
- **Gestion d'erreurs** appropriée avec codes de statut HTTP
- **Tests unitaires** complets avec Jest et Supertest
- **Pipeline CI/CD** avec GitHub Actions
- **Configuration TypeScript** stricte
- **Documentation** complète

## 🛠 Technologies utilisées

- **Backend** : Node.js, Express.js
- **Langage** : TypeScript
- **Tests** : Jest, Supertest
- **CI/CD** : GitHub Actions
- **Gestion des dépendances** : npm

## 🚀 Installation

1. **Cloner le repository**
   ```bash
   git clone <url-du-repo>
   cd user-api-devops
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer l'application**
   ```bash
   npm run dev
   ```

L'API sera accessible sur `http://localhost:3000`

## 📖 Utilisation

### Démarrer le serveur
```bash
npm run dev
```

### Exécuter les tests
```bash
npm test
```

## 🔗 API Endpoints

### Créer un utilisateur
```http
POST /users
Content-Type: application/json

{
  "name": "Alice",
  "email": "alice@example.com"
}
```

**Réponse (201)** :
```json
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com"
}
```

### Récupérer un utilisateur
```http
GET /users/:id
```

**Réponse (200)** :
```json
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com"
}
```

### Lister tous les utilisateurs
```http
GET /users
```

**Réponse (200)** :
```json
[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com"
  }
]
```

### Supprimer un utilisateur
```http
DELETE /users/:id
```

**Réponse (204)** : Pas de contenu

## 🧪 Tests

Le projet inclut une suite de tests complète couvrant :

- ✅ Création d'utilisateur valide
- ❌ Validation des champs requis
- ❌ Validation du format d'email
- ✅ Récupération d'utilisateur existant
- ❌ Gestion des utilisateurs inexistants

### Exécuter les tests
```bash
npm test
```

## 🔄 CI/CD

Le projet utilise GitHub Actions pour l'intégration continue :

- **Déclenchement** : Push et Pull Requests sur la branche `main`
- **Environnement** : Ubuntu Latest avec Node.js 20
- **Étapes** :
  1. Checkout du code
  2. Installation des dépendances
  3. Exécution des tests

Le workflow est configuré dans `.github/workflows/ci.yml`

## 📁 Structure du projet

```
user-api-devops/
├── .github/
│   └── workflows/
│       └── ci.yml              # Configuration GitHub Actions
├── src/
│   ├── app.ts                  # Configuration Express et routes
│   └── server.ts               # Point d'entrée du serveur
├── test/
│   └── app.test.ts             # Tests unitaires
├── .gitignore                  # Fichiers à ignorer par Git
├── jest.config.js              # Configuration Jest
├── package.json                # Dépendances et scripts
└── tsconfig.json               # Configuration TypeScript
```

## 👨‍💻 Développement

### Scripts disponibles

- `npm run dev` : Lance le serveur en mode développement
- `npm test` : Exécute la suite de tests

### Configuration TypeScript

- **Target** : ES2020
- **Module** : CommonJS
- **Strict mode** : Activé
- **Source** : `./src`
- **Build** : `./dist`

### Bonnes pratiques implémentées

- ✅ Validation des données d'entrée
- ✅ Gestion d'erreurs appropriée
- ✅ Tests unitaires complets
- ✅ Configuration TypeScript stricte
- ✅ Pipeline CI/CD automatisée
- ✅ Documentation complète
- ✅ Structure de projet claire

## 📄 Licence

ISC

## 👤 Auteur

**Antoine Mahassadi** - 2025

---

*Projet développé dans le cadre d'un apprentissage DevOps avec Node.js et TypeScript*
