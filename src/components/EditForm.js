import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Form.css';
import { update } from '../redux/Reducer/FormSlice';
import { Modal } from 'antd';

const EditForm = (props) => {
    const { editUser } = props;
    const [name, setName] = useState(editUser.name);
    const [email, setEmail] = useState(editUser.email);
    const [age, setAge] = useState(editUser.age);
    const [address, setAddress] = useState(editUser.address);
    const [open, setOpen] = useState(props.isEdit);

    const dispatch = useDispatch();

    const showModel = () => {
        props.setIsEdit(true);
        setOpen(false);
    };
    const handleOk = () => {
        props.setIsEdit(false);
        setOpen(false);
        const datas = {
            id: editUser.id,
            name,
            email,
            age,
            address
        };
        console.log(datas);
        // debugger
        dispatch(update(datas))
    };
    const handleCancel = () => {
        props.setIsEdit(false);
        setOpen(false);
    }

    return (
        <div className='form'>
            <Modal
                title='Edit User'
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <form >
                    <label>Name:</label><br />
                    <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                    <label >Email</label><br />
                    <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                    <label >Age</label><br />
                    <input type='number' value={age} onChange={(e) => { setAge(e.target.value) }} /><br />
                    <label >Address</label><br />
                    <input type='text' value={address} onChange={(e) => { setAddress(e.target.value) }} /><br />
                </form>
            </Modal>
        </div>
    )
}

export default EditForm