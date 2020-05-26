/// <reference types="Cypress" />

describe('Suite Name', function()  
{

    it('Testing the Checkboxes', function() 
     {
        cy.visit("http://demo.automationtesting.in/Register.html")

        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket') //check the checkbox
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey') 

        cy.get('#checkbox1').uncheck().should('not.be.checked')  //uncheck the checkbox
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        
        cy.get('input[type=checkbox]').check(['Cricket','Hockey','Movies'])
    })

    it('Testing the Drop down', function()
    {
        cy.get('#Skills').select('Android').should('have.value','Android')
    })

    it('Testing Multiple options dropdown', function()
    {
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()
    })

    it('Selecting countries searchable dropdown', function()
    {
        cy.get('[role="combobox"]').click({force: true}) //forceful click on next element even it is covering another element 
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}')
    })
    
  })