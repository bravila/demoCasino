export class RegistrationPage{
    constructor(){
        this.emailField = '[placeholder="Email"]'
        this.agreementBox = '.input__wrapper > label'
        this.passwordField = '[data-test="input-password"]'
        this.passwordConfirmationField = '[data-test="input-password_confirmation"]'
        this.noBonusRadioButton = ':nth-child(2) > .special-radio__label'
        this.createAccountButton = '[data-test="control-submit"]'
        this.registrationDescriptionNotification = '.notification__description'
        this.errorMessageForRegisteredUser = '[data-test="error-email"]'
    }

    fillEmail(email){
        cy.get(this.emailField).clear().type(email)
    }

    checkAgreement(){
        cy.get(this.agreementBox).click()
    }

    fillPasswordAndConfirmationFields(password){
        cy.get(this.passwordField).clear().type(password)
        cy.get(this.passwordConfirmationField).clear().type(password)
    }

    checkNoBonus(){
        cy.get(this.noBonusRadioButton).click()
    }

    clickCreateAccountButton(){
        cy.get(this.createAccountButton).click()
    }

    successRegistrationNotification(successMessageRegistration){
        cy.get(this.registrationDescriptionNotification).should('contain', successMessageRegistration)
    }

    errorMessageForRegisteredUserNotification(errorAlreadyRegistered){
        cy.get(this.errorMessageForRegisteredUser).should('contain', errorAlreadyRegistered)
    }
}

export const onRegistrationPage = new RegistrationPage()