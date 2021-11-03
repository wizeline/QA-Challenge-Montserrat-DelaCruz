import HomePage from '../../page-object/pages/HomePage'
import Login from '../../page-object/pages/Login'
import InboxPage from '../../page-object/pages/InboxPage'

require('dotenv').config({ path: '/Users/montserrat.delacruz/Documents/Workspace/QA-Challenge-Montserrat-DelaCruz/.env'})

fixture `Add Tasks Tests`
    .page `https://todoist.com/`


// eslint-disable-next-line no-unused-vars
    .beforeEach(async t => {
        await HomePage.navigateToLoginPage()
        await Login.login(process.env.USERNAME, process.env.PASSWORD)
        InboxPage.titlesArray = []
    })

test('Add a new task from the Inbox page', async t => {
    const tasksNumber = 1
    const taskTitle = 'Technical4 Task'
    const taskDesc = 'One Task Description'
    await InboxPage.closeTimezoneAlert()
    await InboxPage.addTask(tasksNumber, taskTitle, taskDesc)
    await t.expect(await InboxPage.getTask(InboxPage.titlesArray[0])).contains(InboxPage.titlesArray[0])
})

test('Add a multiple tasks from the Inbox page', async t => {
    let tasksNumber = 2
    let taskTitle = 'Movie4 Review No.'
    let taskDesc = 'New Task Description'
    await InboxPage.closeTimezoneAlert()
    await InboxPage.addMultipleTasks(tasksNumber, taskTitle, taskDesc)

    for (let i = 0; i < tasksNumber; i++) {
        await t.expect(await InboxPage.getTask(InboxPage.titlesArray[i])).contains(InboxPage.titlesArray[i])
    }
})
