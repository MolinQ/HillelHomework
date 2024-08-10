import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, clearCompleted } from '../core/actions/todoActions.js';
import TodoItem from '../Components/TodoItems.jsx';
import TodoInput from '../Components/Input.jsx';
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
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
            <button className='btn btn-primary' onClick={handleClearCompleted}>Clear Completed</button>
        </div>
    );
}
export default TodoList;