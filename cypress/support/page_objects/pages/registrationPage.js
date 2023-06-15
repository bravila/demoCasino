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
        cy.get(this.emailField).clear().type(email).wait(2000)
    }

    checkAgreement(){
        cy.get(this.agreementBox).click().wait(2000)
    }

    fillPasswordAndConfirmationFields(password){
        cy.get(this.passwordField).clear().type(password).wait(2000)
        cy.get(this.passwordConfirmationField).clear().type(password)
        .wait(2000)
    }

    checkNoBonus(){
        cy.get(this.noBonusRadioButton).click().wait(5000)
    }

    clickCreateAccountButton(){
        cy.get(this.createAccountButton).click()
        .wait(2000)
    }

    successRegistrationNotification(successMessageRegistration){
        cy.get(this.registrationDescriptionNotification).should('contain', successMessageRegistration).wait(2000)
    }

    errorMessageForRegisteredUserNotification(errorAlreadyRegistered){
        cy.get(this.errorMessageForRegisteredUser).should('contain', errorAlreadyRegistered).wait(2000)
    }
}

export const onRegistrationPage = new RegistrationPage()
