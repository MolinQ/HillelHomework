export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const SET_TODOS = 'SET_TODOS';
export const FETCH_TODOS = 'FETCH_TODOS';

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const editTodo = (id, newText) => ({ type: EDIT_TODO, payload: { id, newText } });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
export const setTodos = (todos) => ({ type: SET_TODOS, payload: todos });
export const fetchTodos = () => ({ type: FETCH_TODOS });