import { Selector,t } from 'testcafe'

class Homepage{
    constructor(){
        this.loginLink=Selector('a').withText('Log in')
    }

    async navigateToLoginPage(){
        await t
            .click(this.loginLink)
    }
}
export default new Homepage()