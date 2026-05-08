import { authenticationPage } from "../../support/page_objects/authenticationPage";

describe('Module : Authentification', () => {

  // Cypress va nettoyer et recharger la page avant chaque "it".
  beforeEach(() => {
    authenticationPage.openUrl();
  });

   /**
   * CT-01 : Champs vides
   */
  describe('CT-03 : Champs obligatoires', () => {
    it('Devrait afficher une erreur si les champs sont vides', () => {
      authenticationPage.loginButton.click();
      
      authenticationPage.errorMessage
        .should('be.visible')
        .and('contain', 'Username is required');
    });
  });

   /**
   * CT-02 : Échec avec mot de passe incorrect
   */
  describe('CT-02 : Échec de connexion', () => {
    it('Devrait afficher une erreur avec un mauvais mot de passe', () => {
      // Les étapes sont ici dans le même bloc pour garantir la continuité
      authenticationPage.login('standard_user', 'wrong_password');
      authenticationPage.errorMessage
        .should('be.visible')
        .and('contain', 'Username and password do not match');
    });
  });
  /**
   * CT-03 : Connexion réussie
   */
  describe('CT-01 : Connexion réussie', () => {
    it('Saisir les identifiants et vérifier la redirection', () => {
      authenticationPage.login('standard_user', 'secret_sauce');
      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('have.text', 'Products');
    });
  });
});