import { authenticationPage } from '../../support/page_objects/authenticationPage';
import { inventoryPage } from '../../support/page_objects/inventoryPage';

describe('Fonctionnalité : Retrait du panier', () => {
  beforeEach(() => {
    authenticationPage.openUrl();
    authenticationPage.login('standard_user', 'secret_sauce');
    // On ajoute un article avant de tester le retrait
    inventoryPage.addItem('Sauce Labs Backpack');
  });

  it('Retirer le sac à dos du panier', () => {
    inventoryPage.removeItem('Sauce Labs Backpack');
    inventoryPage.cartBadge.should('not.exist');
  });
});