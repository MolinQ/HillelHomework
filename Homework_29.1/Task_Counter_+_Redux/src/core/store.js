import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../core/slices/counterSlice.js';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});