import Todos from './api/todos'

async function exec() {
    const todos = new Todos()

    const response = await todos.delete({id: 5})
    console.log(response)
}

exec()