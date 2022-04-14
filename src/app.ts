interface Todo {
    description: string;
    done: boolean;
}

export class App {
    heading = "Todos";
    todos: Todo[] = [];
    todoDescription = '';

    addTodo() {
        if (this.todoDescription) {
            this.todos.push({
                description: this.todoDescription,
                done: false
            });
            this.todoDescription = '';
        }
    }

    removeTodo(todo: Todo) {
        let index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }
}