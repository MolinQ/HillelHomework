import React from 'react';
import TodoList from './components/TodoList';
import {Provider} from "react-redux";
import {store} from "./core/store.js";

function App() {
    return (
        <Provider store={store}>
            <div className='container-lg mt-4'>
            <TodoList />
            </div>
        </Provider>
    );
}

export default App;