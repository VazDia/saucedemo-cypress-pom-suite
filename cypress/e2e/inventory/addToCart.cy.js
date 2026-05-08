import { authenticationPage } from '../../support/page_objects/authenticationPage';
import { inventoryPage } from '../../support/page_objects/inventoryPage';

describe('Fonctionnalité : Ajout au panier', () => {
  beforeEach(() => {
    authenticationPage.openUrl();
    authenticationPage.login('standard_user', 'secret_sauce');
    
    // On vérifie qu'on est sur l'inventaire avant de commencer
    inventoryPage.verifyPage(); 
  });

  it('Ajouter le sac à dos au panier', () => {
    // Action
    inventoryPage.addItem('Sauce Labs Backpack');

    // Assertions sur la page inventaire
    inventoryPage.cartBadge.should('be.visible').and('have.text', '1');

    // Navigation vers le panier
    inventoryPage.shoppingCartClick();

    // Vérifications finales sur la page panier
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item')
      .should('have.length', 1)
      .and('contain', 'Sauce Labs Backpack');
  });
});

describe('Fonctionnalité : Ajout au panier', () => {
  beforeEach(() => {
    authenticationPage.openUrl();
    authenticationPage.login('standard_user', 'secret_sauce');
    inventoryPage.verifyPage(); 
  });

  it('Ajouter le sac à dos au panier', () => {
    // Action
    inventoryPage.addItem('Sauce Labs Backpack');

    // Assertions sur la page inventaire
    inventoryPage.cartBadge.should('be.visible').and('have.text', '1');

    // Navigation vers le panier
    inventoryPage.shoppingCartClick();

    // Vérifications finales sur la page panier
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item')
      .should('have.length', 1)
      .and('contain', 'Sauce Labs Backpack');
  });
});