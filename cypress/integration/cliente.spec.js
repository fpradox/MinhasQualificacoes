/// <reference types="cypress" />

context('Validar cpf', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('Digitando cpf válido', () => {
      cy.get('#nome').type('Danilo')
      // cy.wait(1000)
      cy.get('#cpf').type('489.333.610-06')
      // cy.wait(1000)
      cy.get('input[type="submit"]').click()
      // cy.wait(1000)
      cy.get('.sucesso').should("to.have.length", 1)
      // cy.wait(1000)
    })
  
    it('Digitando cpf inválido', () => {
      // cy.wait(1000)
      cy.get('#nome').type('Danilo')
      // cy.wait(1000)
      cy.get('#cpf').type('489.333.111-06')
      // cy.wait(1000)
      cy.get('input[type="submit"]').click()
      // cy.wait(1000)
      cy.get('.erro').should("to.have.length", 1)
      // cy.wait(1000)
    })
  })
  