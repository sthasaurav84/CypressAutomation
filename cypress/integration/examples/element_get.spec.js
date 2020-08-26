describe("Testing Get elements", () => {
    it('element get testing', () => {

        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform').click()

        cy.url().should('include', '/platform') 
        // adding test for working on feature
        
    })

})