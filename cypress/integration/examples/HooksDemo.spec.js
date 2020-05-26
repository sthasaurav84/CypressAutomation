/// <reference types="Cypress" />

describe('TestSuite', function()  
{
    before(() => {
        // runs ONLY once before all tests in the block
        cy.log('******* This is SETUP BLOCK ********')
      })
    
      after(() => {
        // runs only once after all tests in the block
        cy.log('******* This is TEAR DOWN block ********')
      })
    
      beforeEach(() => {
        // runs before each test in the block
        cy.log('******* This is LOGIN BLOCK ********')
      })
    
      afterEach(() => {
        // runs after each test in the block
        cy.log('******* This is LOGOUT BLOCK ********')
      })
   

    it('Searching', function() 
    {
        cy.log('******* This is Searching Test ********')
    })

    it('Advanced Searching', function() 
    {
        cy.log('******* This is Advanced Searching Test ********')
    })

    it('Listing products', function() 
    {
        cy.log('******* This is Listing Products Tests ********')
    })
    
    
})