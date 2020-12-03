import React, {useState, useEffect} from 'react';
import TodoTitle from "./TodoTitle";
import tasks from "../tasks";
import TodoListItem from "./TodoListItem";
import shortId from 'shortid'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodos] = useState('')
    useEffect(() => {
        setTodos(tasks)
    }, [])

    const addTodo = () => {
        const addedTodo = {
            id: shortId.generate(),
            title: newTodo,
            done: false
        }
        setTodos([...todos, addedTodo])
        setNewTodos('')
    }
    const deleteTodo = (deletedId) => {
        const besidesTodo = todos.filter((el) => el.id !== deletedId)
        setTodos(besidesTodo)

    }
    const updateTodo = (update, id) => {
        const updatedTodos = todos.map(el => el.id === id ? {...el, title: update} : el)
        setTodos(updatedTodos)
    }
    const doneTodo = (id) => {
        const doneTodos = todos.map(el => el.id === id ? {...el, done: !el.done} : el)
        setTodos(doneTodos)
    }

    return (
        <div>
            <TodoTitle todos={todos}/>
            <ul className="list-group mt-5">
                {
                    todos.map(todo => (
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            updateTodo={updateTodo}
                            doneTodos={doneTodo}
                        />
                    ))
                }
            </ul>
            <input type="text"
                   value={newTodo}
                   className="form-control mt-5"
                   onChange={e => setNewTodos(e.target.value)}/>
            <button className="btn btn-secondary w-100 mt-2"
                    onClick={addTodo}
                    disabled={newTodo.length < 3}
            >ADD TASK
            </button>
        </div>
    );
};

export default TodoList;