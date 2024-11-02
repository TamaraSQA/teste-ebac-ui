///reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')


describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('my-account')
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

     it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, tamara.teste2 (não é tamara.teste2? Sair)')
    
     });
     
     it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then( dados => {
        cy.get('#username').type(dados.usuario, {log: false })
        cy.get('#password').type(dados.senha, {log: false })
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, tamara.teste2 (não é tamara.teste2? Sair)')

        })
        
     });

     it('Deve fazer login com sucesso - usando Comandos customizado', () => {
        cy.login('tamara.teste2@teste.com.br', 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, tamara.teste2 (não é tamara.teste2? Sair)')

     });
})