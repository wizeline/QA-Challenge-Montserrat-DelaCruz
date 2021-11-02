import HomePage from '../../page-object/pages/Homepage'
import Login from '../../page-object/pages/Login'
import Navbar from '../../page-object/components/Navbar'
import InboxPage from '../../page-object/pages/InboxPage'
require('dotenv').config({ path: '/Users/montserrat.delacruz/Documents/Workspace/QA-Challenge-Montserrat-DelaCruz/.env'})

fixture `Todoit Test Suite - Login`
    .page`https://todoist.com/`


test('Verify the user is able to login', async t =>{
    await HomePage.navigateToLoginPage()
    await Login.login(process.env.USERNAME, process.env.PASSWORD)
    await InboxPage.closeTimezoneAlert()
    await t.expect(Navbar.topbar.exists).ok()
})


test('Verify the user is unable to login with an invalid Username', async t =>{
    HomePage.navigateToLoginPage()
    Login.login(process.env.INV_USERNAME,process.env.PASSWORD)
    await t
        .expect(Login.errorMsg.exists).ok()
        .expect(Login.errorMsg.innerText).contains('Invalid email address')
})

test('Verify the user is unable to login with an empty Password', async t =>{
    HomePage.navigateToLoginPage()
    Login.login(process.env.USERNAME,'')
    await t
        .expect(Login.errorMsg.exists).ok()
        .expect(Login.errorMsg.innerText).contains('Blank password')
    
})

test('Verify the user is unable to login with an invalid Password', async t =>{
    await HomePage.navigateToLoginPage()
    await Login.login(process.env.USERNAME,process.env.INV_PASSWORD)
    await t.expect(Login.errorMsg.exists).ok()
    
})


