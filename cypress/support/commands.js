// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


//Customized command
Cypress.Commands.add("login", (email, password) => { 
    
    cy.visit('https://admin-demo.nopcommerce.com/login')        
    cy.get('input[name=Email]').clear().type(email)           
    cy.get('input[name=Password]').clear().type(password)         
    cy.get('input[type=submit]').click()  

 })

 Cypress.Commands.add('login', (email, password) => {
     cy.get('.login').click()
     cy.get('#email').type(email)
     cy.get('#passwd').type(password)
     cy.get('#SubmitLogin').click()
     
 })

 Cypress.Commands.add('search', (product) => {
    cy.get('#search_query_top').type(product)
    cy.get("button[name='submit_search']").click()
 })