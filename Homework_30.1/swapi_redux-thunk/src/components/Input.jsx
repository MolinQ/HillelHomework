import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSwapiData } from '../core/swapiThunks.js';
function Input(){
    const [endpoint, setEndpoint] = useState('');
    const dispatch = useDispatch();
    const handleFetchData = (e) => {
        e.preventDefault()
        if (endpoint.trim()) {
            dispatch(fetchSwapiData(endpoint.trim()));
            setEndpoint('')
        } else {
            alert('Введіть коректно данні для запиту')
        }
        };
    return (
        <form className='container input-group mb-3'>
            <label className='label p-2' htmlFor="input">https://swapi.dev/api/</label>
            <input
                className='form-control'
                type="text"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
                placeholder="people/1/"
            />
            <button className="btn btn-outline-secondary" type='submit' onClick={handleFetchData}>Fetch Data</button>
        </form>
    )
}
export default Input;