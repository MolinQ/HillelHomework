import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, CLEAR_COMPLETED, SET_TODOS} from '../actions/todoActions.js';

const initialState = {
    todos: []
};
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };
        case DELETE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
                )
            };
        case CLEAR_COMPLETED:
            return { ...state, todos: state.todos.filter(todo => !todo.completed) };
        case SET_TODOS:
            return { ...state, todos: action.payload };
        default:
            return state;
    }
};