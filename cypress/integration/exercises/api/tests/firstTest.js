/// <reference types="cypress" />

describe('e-API Dashboard Document', () => {
    it('Get all employees data', () => {
        //GET method
        cy.request({
            method: 'GET',
            url: 'https://sangbui.com/api/v1/employees',
            headers: {
                Authorization: 'Basic d2ViX2FwcDpjaGFuZ2VpdA=='
            }
        }).its('status').should('eq', 200)
    });
});