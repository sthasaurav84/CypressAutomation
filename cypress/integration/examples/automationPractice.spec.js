describe('automation practice ', () => {
    
    before(() => {
        cy.visit('http://automationpractice.com/')
        cy.login('sthashrestha619@gmail.com', 'vienna')

    })
    
    it('should login test', () => {
        cy.url().should('include', 'controller=my-account')
        cy.get('.myaccount-link-list a').should('have.length', 5)      
    });

    it('should navigate to home page', () => {
        cy.get('.icon-chevron-left').last().click().url().should('include', 'index.php')
    })

    it('should search for an item', () => {
        cy.search('Dress')
        cy.get('.lighter').should('contain.text', 'Dress')
    });
    
})