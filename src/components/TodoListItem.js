import React, {useState} from 'react';

let icon = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pen" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
    </svg>
)
let icon2 = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-square-fill" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
    </svg>)
const TodoListItem = ({todo, deleteTodo, updateTodo, doneTodos}) => {
    const [editable, setEditable] = useState(false)
    const [updated, setUpdated] = useState(todo.title)
    const handleSave = () => {
        updateTodo(updated, todo.id)
        setEditable(false)
    }
    const isDoneStyle = {
        textDecoration: 'line-through'
    }
    return (
        <div>
            <li key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
            >
                {editable ? <input type="text" value={updated} onChange={e => setUpdated(e.target.value)}/> :
                    <h4 style={todo.done ? isDoneStyle : null} onClick={() => doneTodos(todo.id)}>{todo.title}</h4>
                }
                <div>
                    <button className="btn btn-warning"
                            onClick={() => editable ? handleSave(todo.id) : setEditable(true)}
                    >
                        {editable ? icon2 : icon}


                    </button>
                    <button className="btn btn-danger ml-2"
                            onClick={() => deleteTodo(todo.id)}>

                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-square-fill"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>

                    </button>
                </div>
            </li>
        </div>
    );
};

export default TodoListItem;