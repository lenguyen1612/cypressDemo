describe('TC01 Verify URL - getCurrentURL', () => {
    it('Step01 - Access to the page http://live.demoguru99.com', () => {        
        cy.visit("http://live.demoguru99.com")
        cy.viewport(1280, 720)
    })
    it('Step02 - Click MY ACCOUNT link at footer', () => {        
        cy.get('div.footer li.first a[title="My Account"]').click()
    })
    it('Step03 - Verify URL the LoginPage http://live.demoguru99.com/index.php/customer/account/login/', () => {
        cy.url().should('eq','http://live.demoguru99.com/index.php/customer/account/login/')
    })
    it('Step04 - Click CREATE AN ACCOUNT button', () => {
        cy.get('a[title="Create an Account"]').click()
    })
    it('Step05 - Verify URL the RegisterPage http://live.demoguru99.com/index.php/customer/account/create/', () => {
        cy.url().should('eq','http://live.demoguru99.com/index.php/customer/account/create/')
    })
})

describe('TC02 Verify Title - getTitle', () => {
    it('Step01 - Access to the page http://live.demoguru99.com', () => {        
        cy.visit("http://live.demoguru99.com")
        cy.viewport(1280, 720)
    })
    it('Step02 - Click MY ACCOUNT link at footer', () => {        
        cy.get('div.footer li.first a[title="My Account"]').click()
    })
    it('Step03 - Verify title the LoginPage Customer Login', () => {
        cy.title().should('eq','Customer Login')
    })
    it('Step04 - Click CREATE AN ACCOUNT button', () => {
        cy.get('a[title="Create an Account"]').click()
    })
    it('Step05 - Verify title the RegisterPage Create New Customer Account', () => {
        cy.title().should('eq','Create New Customer Account')
    })
})

describe('TC03 Navigate function (back/forward)', () => {
    it('Step01 - Access to the page http://live.demoguru99.com', () => {        
        cy.visit("http://live.demoguru99.com")
        cy.viewport(1280, 720)
    })
    it('Step02 - Click MY ACCOUNT link at footer', () => {        
        cy.get('div.footer li.first a[title="My Account"]').click()
    })
    it('Step03 - Click CREATE AN ACCOUNT button', () => {
        cy.get('a[title="Create an Account"]').click()
    })
    it('Step04 - Verify URL the RegisterPage http://live.demoguru99.com/index.php/customer/account/create/', () => {
        cy.url().should('eq','http://live.demoguru99.com/index.php/customer/account/create/')
    })
    it('Step05 - Back to LoginPage', () => {
        cy.go('back')
    })
    it('Step06 - Verify URL the LoginPage http://live.demoguru99.com/index.php/customer/account/login/', () => {
        cy.url().should('eq','http://live.demoguru99.com/index.php/customer/account/login/')
    })
    it('Step07 - Forward to RegisterPage', () => {
        cy.go('forward')
    })
    it('Step08 - Verify title the RegisterPage Create New Customer Account', () => {
        cy.title().should('eq','Create New Customer Account')
    })
})

describe.only('TC04 GetPage Source  Code - getPageSource (Test)', () => {
    it('Step01 - Access to the page http://live.demoguru99.com', () => {        
        cy.visit("http://live.demoguru99.com")
        cy.viewport(1280, 720)
    })
    it('Step02 - Click MY ACCOUNT link at footer', () => {        
        cy.get('div.footer li.first a[title="My Account"]').click()
    })
    it('Step03 -Verify LoginPage contains the "Login or Create an Account"', () => {
        cy.document().contains('Login or Create an Account')
    })

    it('Step04 - Click CREATE AN ACCOUNT button', () => {
        cy.get('a[title="Create an Account"]').click()
    })

    it('Step05 -Verify RegisterPage contains the "Create an Account"', () => {
        cy.document().contains('Create an Account')
    })
   
})