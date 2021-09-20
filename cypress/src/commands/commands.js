export class commands {

    clickForce(locator) {
        cy.get(locator).should('be.visible').click();
    }
}