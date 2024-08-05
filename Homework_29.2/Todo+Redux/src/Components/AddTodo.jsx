import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../core/Slices/todosSlice.js';

function AddTodo()  {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='d-flex container-lg'>
            <input
                className='form-control'
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
            />
            <button className='btn btn-primary' type="submit">Add</button>
        </form>
    );
};

export default AddTodo;