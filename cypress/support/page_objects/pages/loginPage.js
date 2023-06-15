export class LoginPage{

    constructor(){
        this.emailLoginField = '[data-test="input-username"]'
        this.passwordLoginField = '[data-test="input-password"]'
        this.signInLoginButton = '[data-test="control-submit"]'
    }

    fillEmailLogin(email){
        cy.get(this.emailLoginField).clear().type(email).wait(2000)
    }

    fillPasswordLogin(password){
        cy.get(this.passwordLoginField).clear().type(password).wait(2000)
    }

    clickSignInLogin(){
        cy.get(this.signInLoginButton).click().wait(2000)
    }
}

export const onLoginPage = new LoginPage()