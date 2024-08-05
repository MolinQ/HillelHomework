import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../core/Slices/todosSlice.js';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});