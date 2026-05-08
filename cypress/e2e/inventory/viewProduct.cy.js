import { authenticationPage } from '../../support/page_objects/authenticationPage';
import { inventoryPage } from '../../support/page_objects/inventoryPage';

describe('Fonctionnalité : Consultation d\'article', () => {
  beforeEach(() => {
    authenticationPage.openUrl();
    authenticationPage.login('standard_user', 'secret_sauce');
  });

  it('Consulter les détails du produit "Sauce Labs Bike Light"', () => {
    const productName = 'Sauce Labs Bike Light';
    inventoryPage.viewProductDetails(productName);
    
    // Vérification sur la page de détails
    cy.url().should('include', '/inventory-item.html');
    cy.get('.inventory_details_name').should('contain', productName);
    cy.get('.inventory_details_desc').should('be.visible');
  });
});