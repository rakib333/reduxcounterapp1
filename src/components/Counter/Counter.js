import React from 'react';
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../../redux/actions/CounterActions';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }
    
    return (
        <div className='container w-50 bg-light p-5 rounded'>
            <h3 className='text-light bg-primary rounded py-5 ps-5'>Count : {count}</h3>
            <button onClick={handleIncrement} className='btn btn-primary me-3'> Increment</button>
            <button onClick={handleDecrement} className='btn btn-success me-3'> Decrement</button>
            <button onClick={handleReset} className='btn btn-danger'> Reset</button>
        </div>
    );
};

export default Counter;