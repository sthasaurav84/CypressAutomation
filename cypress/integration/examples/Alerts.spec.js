/// <reference types="Cypress" />

describe('TestSuite', function()  
{

    it('Alerts', function() 
     {
         cy.visit("https://testautomationpractice.blogspot.com")
         cy.get("#HTML9 > div.widget-content > button").click()

         cy.on('window:confirm', (str) =>
      {
          expect(str).to.equal('Press a button!')  
      }) 

    /*
      cy.visit("https://mail.rediff.com/cgi-bin/login.cgi")

      cy.get('input[type=submit]').click()

      cy.on('window:alert', (str) =>
      {
          expect(str).to.equal('Please enter a valid user name')  
      }) 
    */


    })
    
  })