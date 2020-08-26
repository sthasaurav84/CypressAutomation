describe("Testing Child elements", () => {
    it('Amazon Search App', () => {

        cy.visit('https://www.amazon.com/')
        
        //Search parent element first then locate child element using within method
        cy.get('.nav-search-field ').within(() =>{

            cy.get('#twotabsearchtextbox').type('Apple Mac Book')
        });
       
    })

})