/// <reference types="Cypress" />

import LoginPage from "../PageObjects/LoginPage"

describe("MyTestSuite", function() {

    it('Valid login Test', function() {
        const lp = new LoginPage()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    })
})