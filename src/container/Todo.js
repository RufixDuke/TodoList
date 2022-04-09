import React, { useState } from 'react'
import { v4 as id } from 'uuid';
import TodoItem from '../components/TodoItem';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [editTodo, setEditTodo] = useState(null);

    const addInputHandler = (e) => {
        setInput(e.target.value)
        console.log('run')
    }

    const updateTodo = (title, id) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id } : todo
        )
        setTodos(newTodo);
        setEditTodo("");
    }

    const showInputHandler = (event) => {
        event.preventDefault()
        if (!editTodo) {
            setTodos([...todos, { id: id(), title: input }])
            setInput('')
            console.log("yes")
        } else {
            updateTodo(input, editTodo.id)
            console.log("noooo")
        }
    }


    return (
        <div>
            <div>
                <form onSubmit={showInputHandler}>
                    <input
                        type="text"
                        value={input}
                        placeholder='Enter the todo'
                        onChange={addInputHandler}
                        required
                    />
                    <button
                        type='submit'
                    // onClick={addInputHandler}
                    >
                        Add
                    </button>
                </form>

                <div>
                    <TodoItem
                        todos={todos}
                        setTodos={setTodos}
                        setEditTodo={setEditTodo}
                        setInput={setInput}
                    />
                </div>

            </div>
        </div>
    )
}

export default Todo