import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../core/actions/todoActions.js';
function TodoItem ({ todo })  {
    const dispatch = useDispatch();
    const handleToggle = () => dispatch(toggleTodo(todo.id));
    const handleDelete = () => dispatch(deleteTodo(todo.id));
    const handleEdit = () => {
        const newText = prompt('Edit post:', todo.text);
        if (newText) {
            dispatch(editTodo(todo.id, newText));
        }
    };
    return (
        <li className='container-md d-flex justify-content-between mt-4 border p-3'>
            <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
                style={{ marginRight: '10px' }}
            />
      <span onClick={handleToggle} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
            </div>
            <div className='d-flex gap-3'>
            <button className='btn btn-primary' onClick={handleEdit}>Edit</button>
            <button  className='btn btn-danger' onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
}

export default TodoItem;