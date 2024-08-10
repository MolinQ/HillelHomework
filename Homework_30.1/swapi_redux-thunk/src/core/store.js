import { configureStore } from '@reduxjs/toolkit';
import swapiReducer from '../core/slices/swapiSlices.js';
const store = configureStore({
    reducer: {
        swapi: swapiReducer,
    },
});
export default store;