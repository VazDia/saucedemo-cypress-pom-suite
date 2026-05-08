import { authenticationPage } from '../../support/page_objects/authenticationPage';

describe('Fonctionnalité : Déconnexion', () => {

  beforeEach(() => {
    // La déconnexion nécessite d'être d'abord connecté
    authenticationPage.openUrl();
    authenticationPage.login('standard_user', 'secret_sauce');
  });

  it('Devrait déconnecter l\'utilisateur et rediriger vers la page de login', () => {
    // 1. Action de déconnexion
    authenticationPage.logout();

    // 2. Vérification de l'URL (Retour à la racine)
    cy.url().should('eq', Cypress.config().baseUrl + '/');

    // 3. Vérification visuelle (Le bouton login est de nouveau présent)
    authenticationPage.loginButton.should('be.visible');

    // 4. Tentative d'accès forcé à une page sécurisée (Optionnel mais très pro)
    // On vérifie qu'on ne peut plus retourner sur l'inventaire après logout
    cy.visit('/inventory.html', { failOnStatusCode: false });
    authenticationPage.loginButton.should('be.visible'); 
  });

});