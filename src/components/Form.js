import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Form.css';
import { save } from '../redux/Reducer/FormSlice';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    const dispatch = useDispatch();
    const datahandle = (e) => {
        e.preventDefault()
        const datas = {
            id: Math.random(),
            name,
            email,
            age,
            address
        };
        console.log(datas);
        // debugger
        dispatch(save(datas));
    };

    return (
        <div className='form'>
            <form >
                <label>Name:</label><br />
                <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                <label >Email</label><br />
                <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                <label >Age</label><br />
                <input type='number' value={age} onChange={(e) => { setAge(e.target.value) }} /><br />
                <label >Address</label><br />
                <input type='text' value={address} onChange={(e) => { setAddress(e.target.value) }} /><br />
                <button type='submit' onClick={datahandle}>Save</button>
            </form>
        </div>
    )
}

export default Form