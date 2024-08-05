import React from 'react';
import { useSelector } from 'react-redux';

function TodoList() {
    const todos = useSelector((state) => state.todos);

    return (
        <div className='mt-5'>
            <ul className='list-unstyled'>
                {todos.map((todo) => (
                    <li className='list-element p-2 mt-3' key={todo.id}>{todo.text}</li>
                ))}
            </ul>
            <span className='text-info'>Total Todos: {todos.length}</span>
        </div>
    );
};

export default TodoList;