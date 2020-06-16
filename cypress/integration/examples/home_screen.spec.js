/// <reference types="cypress" />


context('Home Screen', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('Header is rendered correctly', () => {
    it('Navbar is rendered correctly', () => {
      cy.get('.navbar')
    })
  })

  describe('Jumbotron is rendered correctly', () => {
    it('Title is rendered correctly', () => {
      cy.get('h1').should('contain', 'Ristorante Con Fusion')
    })

    it('Paragraph is rendered correctly', () => {
      cy.get('.col-12 > p').should('contain', 'We take inspiration')
    })
  })

  describe('Cards are rendered correctly', () => {
    it('All cards are rendered correctly', () => {
      cy.get('.card').should('have.length', 3)
    })
  })

  describe('Footer is rendered correctly', () => {
    it('Footer is rendered correctly', () => {
      cy.get('.footer')
    })
  })

})
