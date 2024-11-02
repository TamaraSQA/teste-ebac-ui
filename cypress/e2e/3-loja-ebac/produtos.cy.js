///reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        ///.first()
        ///.last()
        ///.eq(2)
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()

        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});