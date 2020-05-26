/// <reference types="Cypress" />

describe('TestSuite', function()  
{
    before(function(){
        cy.fixture('example').then(function(data){

            this.data = data
        })
    })

    it('FixturesDemoTest', function() 
    {
        cy.visit("https://admin-demo.nopcommerce.com/login")
        
        cy.get('input[name=Email]').clear().type(this.data.email) //email
        
        cy.get('input[name=Password]').clear().type(this.data.password) //password

        cy.get('input[type=submit]').click() //sign in
        
    })
    
  })