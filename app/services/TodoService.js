import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodoService {


    uncompleteCount() {
        let uncompleteCount = 0
        AppState.todos.forEach(todo => {
            if (todo.completed == false) {
                uncompleteCount++
            }
        });
        AppState.uncompleteCount = uncompleteCount
    }

    async getTodos() {
        const response = await api.get('api/todos')
        const importedTodos = response.data.map(todo => new Todo(todo))
        AppState.todos = importedTodos
        console.log('AppState todos:', AppState.todos)
    }

    async newTodo(formData) {
        AppState.newTodo = new Todo(formData)
        console.log(AppState.newTodo)
        const response = await api.post('api/todos', AppState.newTodo)
        AppState.todos.push(AppState.newTodo)
        console.log('new todo response', response)
        this.getTodos()
    }

    async deleteTodo(id) {
        const indexRemoved = AppState.todos.findIndex(todo => todo.id == id)
        console.log(indexRemoved)
        const response = await api.delete(`api/todos/${id}`)
        AppState.todos.splice(indexRemoved, 1)
        console.log('delete response', response.data)
    }

    async toggleComplete(id) {
        // debugger
        const todoToToggle = AppState.todos.find(todo => todo.id == id)
        todoToToggle.completed = !todoToToggle.completed
        console.log('did it set as complete?', todoToToggle)
        const response = await api.put(`api/todos/${id}`, todoToToggle)
        console.log('put response:', response.data)
        AppState.emit('todos')
    }
}

export const todoService = new TodoService()