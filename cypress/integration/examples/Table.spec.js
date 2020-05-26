/// <reference types="Cypress" />

describe('TestSuite', function()  
{

    it('Table Test', function() 
    {
        cy.visit("https://testautomationpractice.blogspot.com")

        //1) Check Value presence anywhere present in a table
        cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')

        //2) check Value presence in specific rows and columns
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')
        
        //Verify the book name "Master in Java" whose author is Amod"
        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e,index,$list) => {

            const text=$e.text()
            if(text.includes("Amod"))
            {
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname)
                {
                    const bookName = bname.text()
                    expect(bookName).to.equal('Master In Java')
                })
            }
        })
    })
    
 })