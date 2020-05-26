
describe('TestSuite', function()  
{

    it('Verify Title of the Page', function() 
     {
         cy.visit('http://demo.nopcommerce.com/')      
         cy.title().should('eq','nopCommerce demo store')
    })
    
  })