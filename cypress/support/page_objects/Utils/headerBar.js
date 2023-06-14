export class HeaderBar{

    constructor(){

        this.signUpButton = '[data-test="nav-reg-head"] > span'
        
    }

    clickSignUpButton(){
        cy.get(this.signUpButton).click()
    }

    
}

export const onHeaderBar = new HeaderBar()