

export class Todo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId
    }

    get TodoListTemplate() {
        return `
<div class="row text-center align-middle">
    <div class="col-1 align-middle">
        <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="">
    </div>
    <div class="col-9 align-middle">
        <p>${this.description}</p>
    </div>
    <div class="col-2">
        <button class="btn btn-danger" onclick="app.TodoController.deleteTodo('${this.id}')"><i class="mdi mdi-delete-circle"></i></button>
    </div>
</div>

`
    }
}