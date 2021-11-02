import { Selector, t } from 'testcafe'


class Login{

    constructor(){
        this.email = Selector('#email')
        this.password = Selector('#password')
        this.loginBtn = Selector('.submit_btn')
        this.errorMsg = Selector('.error_msg span')

    }

    async login(email,password){
        if(password != ''){
            await t
                .typeText(this.email, email, {paste:true, replace:true})
                .typeText(this.password, password, {paste:true, replace:true})
                .click(this.loginBtn)
        }
        else{
            await t
                .typeText(this.email, email, {paste:true, replace:true})
                .click(this.loginBtn)
        }
        
    }

}

export default new Login()