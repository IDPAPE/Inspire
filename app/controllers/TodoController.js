import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class TodoController {
    constructor() {
        console.log('todo controller loaded');
        AppState.on('account', this.getTodos)
        AppState.on('todos', this.drawTodos)
    }

    async getTodos() {
        try {
            todoService.getTodos()
        } catch (error) {
            Pop.toast('could not get to-dos', 'error')
            console.error(error)
        }
    }

    async newTodo() {
        try {
            event.preventDefault()
            let formData = getFormData(event.target)
            console.log('formData:', formData)
            todoService.newTodo(formData)
        } catch (error) {
            Pop.toast('could not create to do', 'error')
            console.error(error)
        }
    }

    async deleteTodo(id) {
        try {
            const confirm = await Pop.confirm('Are you sure you want to delete the to-do?')
            if (confirm == false) {
                return
            }
            else {
                todoService.deleteTodo(id)
            }
        } catch (error) {
            Pop.toast('could not delete todo', 'error')
            console.error(error)
        }
    }

    drawTodos() {
        let todoList = ''
        AppState.todos.forEach(todo => todoList += todo.TodoListTemplate)
        setHTML('todo-list', todoList)
    }
}