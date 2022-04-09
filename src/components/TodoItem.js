import React from 'react'

const TodoItem = ({ todos, setTodos, setEditTodo, setInput }) => {

    const deleteTodoHandler = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const editTodoHandler = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setInput(findTodo.title)
        setEditTodo(findTodo)
    }

    const completedTodoHandler = (todo) => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                todo.title = ""
                console.log("yep")
            }
            return item;
        }))
    }

    return (
        <div>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        onChange={(event) => event.preventDefault()}
                    />
                    <button onClick={() => editTodoHandler(todo)}>edit</button>
                    <button onClick={() => deleteTodoHandler(todo)}>delete</button>
                    <button onClick={() => completedTodoHandler(todo)}>end</button>
                </li>
            ))}
        </div>
    )
}

export default TodoItem