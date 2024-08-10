import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../core/actions/todoActions.js';
function TodoInput()  {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const handleAddTodo = () => {
        if (text.trim()) {
            const newTodo = { id: Date.now(), text, completed: false };
            dispatch(addTodo(newTodo));
            setText('');
        }
    };
    return (
        <div className='input-group mb-3 mt-5'>
            <input
                className='form-control'
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text"
            />
            <button className='btn btn-success' onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}
export default TodoInput;