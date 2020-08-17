/// <reference types="Cypress" />

describe('CustomSuite', function() {
    it('LoginTest', function()
    {
        cy.login('admin@yourstore.com', 'admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')

        cy.login('admin@yourstore.com', 'admin12') //invalid
        cy.title().should('not.be.equal', 'Dashboard / nopCommerce administration')

        cy.login('admin1@yourstore.com', 'admin') //invalid
        cy.title().should('be.equal', 'Your store. Login')
    }) //testing new functionality

    it('Add customer', function()
    {
        //Login Script
        cy.login('admin@yourstore.com', 'admin')
        //Script for adding new customer 
        cy.log('Adding customer.........')
    }) 

    it('Edit Customer', function()
    {
        cy.login('admin@yourstore.com', 'admin')

        //Script for editing a customer
        cy.log('Editing customer.........')
    }) 
})