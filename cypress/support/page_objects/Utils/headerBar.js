export class HeaderBar{

    constructor(){

        this.signUpButton = '[data-test="nav-reg-head"] > span'
        this.signInButton = '.login'
        this.signInWrapperButton = '[data-test="nav-login-head"]'
        this.userAvatar = '[src="/front/img/user/avatar-default.svg"]'
        
    }

    clickSignUpButton(){
        cy.get(this.signUpButton).click()
        .wait(2000)
    }

    clickSignInButton(){
        cy.get(this.signInButton).click()
        .wait(2000)
    }

    clickSignInWrapperButton(){
        cy.get(this.signInWrapperButton).click()
        .wait(2000)
    }

    validateUserAvatar(){
        cy.get(this.userAvatar).should('not.be.visible')
        .wait(2000)
    }
}

export const onHeaderBar = new HeaderBar()