import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setSwapiData } from './slices/swapiSlices.js';

export const fetchSwapiData = createAsyncThunk(
    'swapi/fetchData',
    async (endpoint, { dispatch }) => {
            const response = await axios.get(`https://swapi.dev/api/${endpoint}`);
            dispatch(setSwapiData(response.data.results || response.data));
            return response.data;
    }
);