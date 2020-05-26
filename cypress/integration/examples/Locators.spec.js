///<reference types="cypress"/>

describe('Locating elements', function()
{
    it('Verify type of locators', function()
    {
        cy.visit('https://demo.nopcommerce.com/') //opens the url

        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") //search box

        cy.get("[type='submit']").click()   //click on search button
         
        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

            cy.get("#product_enteredQuantity_4").clear().type('2') //Quantity
            cy.wait(3000)
         
            cy.get("#add-to-cart-button-4").click()  //add to cart button after providing quantity

            cy.wait(5000)        
        
            cy.get("#topcartlink > a > span.cart-label").click() //shopping cart link  
            cy.wait(3000)

            cy.get(".product-unit-price").contains('$1,800.00') // validating point ")

    })
})