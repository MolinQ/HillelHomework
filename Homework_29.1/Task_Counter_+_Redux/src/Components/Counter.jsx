import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../core/slices/counterSlice.js';
const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div style={{border:'1px solid black', width:'150px', textAlign:'center', padding:'20px'}}>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};
export default Counter;