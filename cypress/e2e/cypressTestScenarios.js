const { onHeaderBar } = require("../support/page_objects/Utils/headerBar");
const { onRegistrationPage } = require("../support/page_objects/pages/registrationPage");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  // Please when running execution write en unregistered email, you can use mailinator so you are able to use many emails
  const email = 'bruno6@mailinator.com'
  const password = 'Control123$'
  const successMessageRegistration = ' Registration successfully finished! '

describe('Feature Registration', () =>{
    
    beforeEach('open application', () => {
        cy.visit('', {failOnStatusCode: false})
        cy.get('.mfp-close').click()
    })

    it('Validate I am able to register a user', () =>{
        onHeaderBar.clickSignUpButton()
        onRegistrationPage.fillEmail(email)
        onRegistrationPage.checkAgreement()
        onRegistrationPage.fillPasswordAndConfirmationFields(password)
        onRegistrationPage.checkNoBonus()
        onRegistrationPage.clickCreateAccountButton()
        onRegistrationPage.successRegistrationNotification(successMessageRegistration)
    })

    it('Validate error message for an user already registered', () => {
        onHeaderBar.clickSignUpButton()
        onRegistrationPage.fillEmail(email)
        onRegistrationPage.checkAgreement()
        onRegistrationPage.fillPasswordAndConfirmationFields(password)
        onRegistrationPage.checkNoBonus()
        onRegistrationPage.clickCreateAccountButton()
        onRegistrationPage.errorMessageForRegisteredUserNotification('This email has been used for registration already. Please contact customer support.')
    })

    
}
)