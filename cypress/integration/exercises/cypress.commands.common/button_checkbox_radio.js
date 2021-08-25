/// <reference types="cypress" />

describe('[Topic 09] Button Checkbox Radio Button Javascript Alert Authentication Alert', () => {
    it('TC01 Button', () => {
        cy.visit('https://www.fahasa.com/customer/account/create')

        cy.get('li.popup-login-tab-login').click()
        cy.get('button.fhs-btn-login').should('not.be.visible')
        cy.get('input#login_username').type('email@gna.com')
        cy.get('input#login_password').type('email@gna.com')
        cy.get('button.fhs-btn-login').should('be.visible')
    });
});