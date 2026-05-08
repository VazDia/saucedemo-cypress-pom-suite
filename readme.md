
**`saucedemo-cypress-pom-suite`**

Et voici le README optimisé, propre et prêt à l'emploi.

---

# saucedemo-cypress-pom-suite

Ce projet présente une suite de tests automatisés pour le site [SauceDemo](https://www.saucedemo.com/), réalisée avec **Cypress**. L'objectif est de valider les flux critiques de l'application en utilisant une architecture robuste et évolutive.

## 🏗️ Architecture du Projet

Le projet utilise le design pattern **Page Object Model (POM)** pour assurer une maintenance facile et une haute lisibilité des tests.

* **`cypress/e2e/`** : Scripts de tests organisés par modules métier (Authentification, Inventaire).
* **`cypress/support/page_objects/`** : Centralisation des sélecteurs et des méthodes d'action (encapsulation).
* **`cypress.config.js`** : Configuration globale incluant la `baseUrl` et les paramètres d'environnement.

## 🧪 Scénarios de Tests couverts

1. **Authentification** : Validation des accès (succès, échec mot de passe, champs obligatoires).
2. **Gestion du panier** : Ajout dynamique et retrait d'articles avec mise à jour du badge.
3. **Filtrage & Tris** : Tri des produits par nom (A-Z/Z-A) et par prix (croissant/décroissant).
4. **Détails produits** : Vérification de la cohérence des informations sur la page dédiée.
5. **Déconnexion** : Fermeture de session et redirection sécurisée.

## 🚀 Installation

1. **Cloner le projet** :
```bash
git https://github.com/VazDia/saucedemo-cypress-pom-suite.git
cd saucedemo-cypress-pom-suite

```


2. **Installer les dépendances** :

```bash
    npm install
    ```

## 🖥️ Exécution des Tests

### 1. Interface Graphique (Interactif)
Pour ouvrir le Test Runner de Cypress :
```bash
npx cypress open

```

### 2. Mode Terminal (Headless)

Pour exécuter l'intégralité de la suite de tests en arrière-plan :

```bash
npx cypress run

```

### 3. Exécution ciblée (par Module)

Pour lancer un fichier de test spécifique :

```bash
# Authentification
npx cypress run --spec "cypress/e2e/auth/login.cy.js"

# Gestion du panier
npx cypress run --spec "cypress/e2e/inventory/addToCart.cy.js"

# Filtres et Tris
npx cypress run --spec "cypress/e2e/inventory/filterProducts.cy.js"

```

## 🛠️ Choix Techniques & Robustesse

* **Sélecteurs Dynamiques** : Utilisation de templates literals pour interagir avec des éléments variables (ex: `[data-test="add-to-cart-${id}"]`).
* **Indépendance des tests** : Utilisation systématique de `beforeEach` pour réinitialiser l'état de l'application.
* **Fiabilité des données** : Formatage automatique des identifiants (regex) dans les Page Objects pour correspondre aux attributs `data-test` du site.

---

### 👨‍💻 Auteur

**Vazoumana Diarrassouba**
*Projet réalisé dans le cadre d'un test technique d'automatisation QA.*

```

```