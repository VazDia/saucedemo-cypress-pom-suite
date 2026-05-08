import { authenticationPage } from '../../support/page_objects/authenticationPage';
import { inventoryPage } from '../../support/page_objects/inventoryPage';

describe('Fonctionnalité : Filtres et Tris', () => {
  
  beforeEach(() => {
    authenticationPage.openUrl();
    authenticationPage.login('standard_user', 'secret_sauce');
    inventoryPage.verifyPage();
  });

  it('Trier les produits par prix croissant (Low to High)', () => {
    // 1. Appliquer le filtre
    inventoryPage.applySort('lohi');

    // 2. Vérifications
    inventoryPage.firstItemPrice.should('contain', '7.99');
    
    inventoryPage.inventoryItemName.first().should('contain', 'Sauce Labs Onesie');
  });

  it('Trier les produits par prix décroissant (High to Low)', () => {
    // 1. Appliquer le filtre (le code pour High to Low est 'hilo')
    inventoryPage.applySort('hilo');

    // 2. Vérifications
    // Le premier prix doit être le plus élevé (49.99)
    inventoryPage.firstItemPrice.should('contain', '49.99');
    
    // Le premier produit doit être la veste
    inventoryPage.inventoryItemName.first().should('contain', 'Sauce Labs Fleece Jacket');
  });

  it('Trier les produits par nom décroissant (Z to A)', () => {
    // 1. Appliquer le filtre
    inventoryPage.applySort('za');

    // 2. Vérification
    inventoryPage.inventoryItemName.first().should('contain', 'Test.allTheThings() T-Shirt (Red)');
  });

});