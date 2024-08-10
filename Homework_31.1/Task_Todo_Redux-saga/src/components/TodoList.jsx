import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, clearCompleted } from '../core/actions/todoActions.js';
import TodoItem from './/TodoItems.jsx';
import TodoInput from './/Input.jsx';
function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);
    const handleClearCompleted = () => {
        dispatch(clearCompleted());
    };
    return (
        <div>
            <h2>Todo List</h2>
            <TodoInput />
            <button className='btn btn-primary' onClick={handleClearCompleted}>Clear completed task</button>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}
export default TodoList;