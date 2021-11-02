import { Selector, t } from 'testcafe';

class InboxPage{

    
    constructor() {
        this.taskSelector = Selector('.list_holder .items .task_list_item')
        this.taskAlert = Selector('.text_holder')
        this.pulsBtn = Selector('.plus_add_button')
        this.taskTitle = Selector('[role=textbox]')
        this.taskDescription = Selector('.task_editor__input_fields textarea')
        this.addTaskBtn = Selector('.reactist_button--primary')
        this.cancelTaskBtn = Selector('.reactist_button--secondary')
        this.taskEditor = Selector('form.task_editor')
        this.titlesArray = []
        this.timezone_Alert = Selector('#GB_window')
        this.timezone_closeBtn = Selector('.g_header .close')
        
    }

    async getTask(taskTitle){
        return (this.taskSelector.withText(taskTitle)).innerText
    }

    async fillTaskForm(title,desc){
        await t
            .typeText(this.taskTitle, title, {paste:true, replace:true })
            .typeText(this.taskDescription, desc, {paste:true, replace:true })
            .click(this.addTaskBtn)

    }
   
    async closeTimezoneAlert() {
        if (await this.timezone_Alert.visible) {
            await t.click(this.timezone_closeBtn)
        }
    }

    async addTask(number, title, desc) {
        if(number ===1){
            await t.click(this.pulsBtn);
            this.titlesArray.push(title);
            await this.fillTaskForm(title,desc);
        }
        else{
            await this.fillTaskForm(title,desc);
        }
       
    }
    

    async addMultipleTasks(number, baseTitle, desc) {
        await t.click(this.pulsBtn);
        for (var i = 0; i < number; i++){
            var title = baseTitle+(i+1)
            this.titlesArray.push(title)
            await this.addTask(number,title,desc)
        }
        
    }

    
}
export default new InboxPage()