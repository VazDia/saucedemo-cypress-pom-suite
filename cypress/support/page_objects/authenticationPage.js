export class AuthenticationPage {
  // --- Sélecteurs ---

  // Éléments pour la connexion
  get usernameField() { return cy.get('#user-name'); }
  get passwordField() { return cy.get('#password'); }
  get loginButton() { return cy.get('#login-button'); }
  get errorMessage() { return cy.get('.error-message-container'); }

  // Éléments pour la déconnexion
  get menuButton() { return cy.get('#react-burger-menu-btn'); }
  get logoutLink() { return cy.get('#logout_sidebar_link'); }

  // --- Méthodes ---
  openUrl() {
    cy.visit('/');
  }

  login(username, password) {
    if (username) this.usernameField.clear().type(username);
    if (password) this.passwordField.clear().type(password);
    this.loginButton.click();
  }

  logout() {
    cy.wait(500); // Petite pause pour s'assurer que la page est bien chargée après une connexion
    this.menuButton.click();
    this.logoutLink.should('be.visible').click();
    
    // VERIFICATION FINALE : On confirme qu'on est bien revenu au point de départ
    this.loginButton.should('be.visible');
  }
}
export const authenticationPage = new AuthenticationPage();