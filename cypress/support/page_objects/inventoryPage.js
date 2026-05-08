export class InventoryPage {
  /**
   * --- DÉCLARATION DES SÉLECTEURS ---
   */
  // Sélecteurs statiques
  get cartBadge() { return cy.get('.shopping_cart_badge'); }
  get sortDropdown() { return cy.get('.product_sort_container'); }
  get firstItemPrice() { return cy.get('.inventory_item_price').first(); }
  get inventoryList() { return cy.get('.inventory_list'); }
  get inventoryItemName() { return cy.get('.inventory_item_name'); }
  get shoppingCartLink() { return cy.get('.shopping_cart_link'); }
  get pageTitle() { return cy.get('.title'); }

  // Sélecteurs dynamiques
  getBtnAddFor(id) { return cy.get(`[data-test="add-to-cart-${id}"]`); }
  getBtnRemoveFor(id) { return cy.get(`[data-test="remove-${id}"]`); }

  /**
   * --- MÉTHODES D'ACTION ---
   */

  //Nouvelle méthode à ajouter dans InventoryPage pour consulter les détails d'un produit
  viewProductDetails(productName) {
    // On clique sur le nom du produit pour ouvrir les détails
    // .contains() permet de trouver le texte exact dans la liste
    this.inventoryItemName.contains(productName).click();
  }

  // Vérifier qu'on est sur la bonne page
  verifyPage() {
    cy.url().should('include', '/inventory.html');
    this.pageTitle.should('have.text', 'Products');
  }

  addItem(productName) {
    const id = this._formatId(productName);
    this.getBtnAddFor(id).click();
    
    // Vérifications de sécurité
    this.getBtnRemoveFor(id).should('be.visible');
    this.cartBadge.should('be.visible');
  }

  removeItem(productName) {
    const id = this._formatId(productName);
    this.getBtnRemoveFor(id).click();
    
    // Vérification de sécurité
    this.getBtnAddFor(id).should('be.visible');
  }

  shoppingCartClick() {
    this.shoppingCartLink.click();
  }

  applySort(criteria) {
    // critères possibles : 'az', 'za', 'lohi', 'hilo'
    this.sortDropdown.select(criteria);
  }

  /**
   * --- UTILITAIRES PRIVÉS ---
   */
  _formatId(name) {
    /** 
     * Transforme "Sauce Labs Backpack" en "sauce-labs-backpack"
     * Le .replace(/'/g, '') gère les noms comme "T-Shirt" ou apostrophes si besoin
     */
    return name
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/'/g, ''); 
  }
}

export const inventoryPage = new InventoryPage();