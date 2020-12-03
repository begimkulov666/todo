import React from 'react'
import TodoList from "./components/todoList";

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <TodoList/>
                </div>
            </div>
        </div>
    )
}

export default App