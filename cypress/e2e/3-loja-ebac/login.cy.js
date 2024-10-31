///reference types="cypress"/>

describe('Funcionalidade: Login', () => {

it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    cy.get('#username').type('tamara.teste2@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, tamara.teste2 (não é tamara.teste2? Sair)')


    })

})