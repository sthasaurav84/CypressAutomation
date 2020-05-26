/// <reference types="Cypress" />

describe('TestSuite', function()  
{

    it('Navigation Tests', function() 
    {
        cy.visit('https://demo.nopcommerce.com/') 
        cy.title().should('eq', 'nopCommerce demo store')

        cy.get('.ico-register').contains('Reg').click()
        cy.title().should('eq', 'nopCommerce demo store. Register') //register page

        cy.go('back')
        cy.title().should('eq', 'nopCommerce demo store') //Home

        cy.go('forward')
        cy.title().should('eq', 'nopCommerce demo store. Register') 

        cy.go(-1) //back
        cy.title().should('eq', 'nopCommerce demo store')

        cy.go(1) //forward
        cy.title().should('eq', 'nopCommerce demo store. Register') 

        cy.reload()
    })
    
  })