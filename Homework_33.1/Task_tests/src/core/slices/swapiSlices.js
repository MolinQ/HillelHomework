import { createSlice } from '@reduxjs/toolkit';
const swapiSlice = createSlice({
    name: 'swapi',
    initialState: {
        swapiData: [],
    },
    reducers: {
        setSwapiData: (state, action) => {
            state.swapiData = action.payload;
        },
        clearSwapiDate: (state) => {
            state.swapiData = [];
        },
    },
});
export const { setSwapiData,clearSwapiDate, clearTodos, addTodo } = swapiSlice.actions;
export default swapiSlice.reducer;