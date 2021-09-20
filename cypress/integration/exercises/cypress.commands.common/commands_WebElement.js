/// <reference types="cypress" />

describe('WebElement', () => {
    it('TC01 Verify isDisplayed', () => {
        cy.visit("https://automationfc.github.io/basic-form/index.html")
        cy.get('input#mail').then($status => {
            if ($status.is(':visible')) {
                cy.get('input#mail').type('email@gmail.com')
            }
        })
        cy.get('#under_18').then($status => {
            if ($status.is(':visible')) {
                cy.get('#under_18').check()
            }
        })
        cy.get('#edu').then($status => {
            if ($status.is(':visible')) {
                cy.get('#edu').type('education')
            }
        })

        cy.get('div.figcaption h5').should('not.be.visible')
    });

    it('TC02 Verify isEnabled/isDisabled', () => {
        cy.visit("https://automationfc.github.io/basic-form/index.html")
        cy.get('input#mail').then($status => {
            if ($status.is(':visible')) {
                console.log('Email is displayed')
            }
        })
        cy.get('#under_18').then($status => {
            if ($status.is(':visible')) {
                console.log('Checkbox Under 18 is displayed')
            }
        })
        cy.get('#edu').then($status => {
            if ($status.is(':visible')) {
                console.log('Education is displayed')
            }
        })
        cy.get('#job1').then($status => {
            if ($status.is(':visible')) {
                console.log('Job Role 1 is displayed')
            }
        })
        cy.get('#job2').then($status => {
            if ($status.is(':visible')) {
                console.log('Job Role 2 is displayed')
            }
        })
        cy.get('#development').then($status => {
            if ($status.is(':visible')) {
                console.log('Interset Development is displayed')
            }
        })
        cy.get('#slider-1').then($status => {
            if ($status.is(':visible')) {
                console.log('Slide 1 is displayed')
            }
        })

        //verify isDisabled
        cy.get('#password').then($status => {
            if ($status.not(':visible')) {
                console.log('Password is disabled')
            }
        })
        cy.get('#radio-disabled').then($status => {
            if ($status.not(':visible')) {
                console.log('Age (Radio button is disabled) is disabled')
            }
        })
        cy.get('#password').then($status => {
            if ($status.not(':visible')) {
                console.log('Biography is disabled')
            }
        })
        cy.get('#bio').then($status => {
            if ($status.not(':visible')) {
                console.log('Job Role 3 is disabled')
            }
        })
        cy.get('#check-disbaled').then($status => {
            if ($status.not(':visible')) {
                console.log('Interest (Checkbox is disabled) is disabled')
            }
        })
        cy.get('#slider-2').then($status => {
            if ($status.not(':visible')) {
                console.log('Slide 2 is disabled')
            }
        })
    });

    it('TC04 Register function at MailChimp', () => {
        cy.visit("https://login.mailchimp.com/signup/")
        //enter Email
        cy.get('input#email').then($status => {
            if ($status.is(':visible')) {
                cy.get('input#email').wait(3500).type('emailtesting@gmail.com')
            }
        })
        //enter Username
        cy.get('input[name="username"]').then($status => {
            if ($status.is(':visible')) {
                cy.get('input[name="username"]').type('testingCypress')
            }

            //enter Pass with One Number
            cy.get('input#new_password').then($status => {
                if ($status.is(':visible')) {
                    cy.get('input#new_password').type('1')
                    cy.get('#create-account').should('be.disabled')
                    cy.get('input#new_password').type('q')
                    cy.get('#create-account').should('be.disabled')
                    cy.get('input#new_password').type('@')
                    cy.get('#create-account').should('be.disabled')
                    cy.get('input#new_password').type('P')
                    cy.get('#create-account').should('be.disabled')
                    cy.get('input#new_password').type('1235')
                    cy.get('#create-account').should('be.visible')
                }
            })
            //check newsletter
            cy.get('input[name="marketing_newsletter"]').check().should('be.checked')

        });
    });

});