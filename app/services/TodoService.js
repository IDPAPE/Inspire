import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodoService {

    async getTodos() {
        const response = await api.get('api/todos')
        const importedTodos = response.data.map(todo => new Todo(todo))
        AppState.todos = importedTodos
        console.log('AppState todos:', AppState.todos)
    }

    async newTodo(formData) {
        AppState.newTodo = new Todo(formData)
        console.log(AppState.newTodo)
        AppState.todos.push(AppState.newTodo)
        const response = await api.post('api/todos', AppState.newTodo)
        console.log('new todo response', response)
    }

    async deleteTodo(id) {
        const indexRemoved = AppState.todos.findIndex(todo => todo.id == id)
        console.log(indexRemoved)
        const response = await api.delete(`api/todos/${id}`)
        AppState.todos.splice(indexRemoved, 1)
        console.log('delete response', response.data)
    }
}

export const todoService = new TodoService()