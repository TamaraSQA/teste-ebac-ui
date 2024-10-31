///reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    });

    afterEach(() => {
        cy.screenshot()
    });

it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('tamara.teste2@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, tamara.teste2 (não é tamara.teste2? Sair)')


    })
it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
    cy.get('#username').type('tamara.teste3@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
    cy.get('.woocommerce-error').should('exist')

    });

it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
    cy.get('#username').type('tamara.teste2@teste.com.br')
    cy.get('#password').type('teste@1234')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail tamara.teste2@teste.com.br está incorreta.')
    cy.get('.woocommerce-error').should('exist')
    
     });
})