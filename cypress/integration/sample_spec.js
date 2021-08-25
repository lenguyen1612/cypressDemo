describe('My First Test', () => {
    it('Visit the Kitchen Sink!', () => {
        
        cy.visit(Cypress.env("URL"))
        cy.viewport(1280, 720)
    })
})