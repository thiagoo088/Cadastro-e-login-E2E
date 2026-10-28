/// <reference types="cypress" />

import { faker } from '@faker-js/faker';


describe('Funcionalidade: Deve fazer cadastro e login com sucesso', () => {

  beforeEach(() => {
    cy.visit("register.html")
  });

  it('deve preencher cadastro e login com sucesso ', () => {
    let email = `teste${Date.now()}@teste.com`
    let nome = faker.person.fullName({ sex: 'female'})
         cy.preencherCadastro(
            nome, 
            email,
            '8898665432165',
            '2233@123',
            '2233@123',
        )
        cy.url({ timeout: 40000 }).should('include', 'dashboard.html')
        cy.get('#user-name').should('contain', nome)
    
        cy.clearAllSessionStorage()
       
        
        cy.visit('login.html')
        
        cy.get('.btn-outline-danger').click()
        cy.get('#email').type(email)
        cy.get('#password').type('2233@123')
        cy.get('#login-btn').click()
        cy.url({ timeout: 40000 }).should('include', 'dashboard.html')
        cy.get('#user-name').should('contain', nome)

    });

});





