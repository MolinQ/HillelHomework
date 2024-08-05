import React from 'react';
import AddTodo from "./Components/AddTodo.jsx";
import {Provider} from "react-redux";
import TodoList from "./Components/TodoList.jsx";
import {store} from "./core/store.js";

function App() {
    return (
        <Provider store={store}>
            <div className='text-center'>
                <h1>Todo App</h1>
                <AddTodo />
            </div>
            <div className='container-lg'>
                <TodoList />
            </div>
        </Provider>
    );
}

export default App;