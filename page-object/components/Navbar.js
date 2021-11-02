import { Selector } from 'testcafe'

class Navbar{

    constructor(){
        this.topbar = Selector('#top_bar_inner')
        this.addNewTaskLink = Selector('#quick_add_task_holder')
        this.taskTitle = Selector('[role=textbox]')
        this.taskDescription = Selector ('.task_editor__input_fields textarea')
        this.addBtn = Selector('.reactist_button--primary')
    }

}
export default new Navbar()