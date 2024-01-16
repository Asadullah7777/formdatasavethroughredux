import React, { useEffect, useState } from 'react';
import { Table, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleted } from '../redux/Reducer/FormSlice';
import EditForm from './EditForm';

const FormTable = () => {
    const users = useSelector((state) => state?.data.user);
    console.log("users: ", users)
    const [isEdit, setIsEdit] = useState(false);
    const [editUser, setEidtUser] = useState();


    const columns = [
        {
            title: "id",
            dataIndex: "id",
            // key:'1',
            sorter: (a, b) => a.id - b.id,
        },

        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <div
                        onClick={() => {
                            handleEdit(record);
                        }}
                    >Edit</div>

                    <div onClick={() => {
                        console.log('delete', record.id);
                        dispatch(deleted(record.id));
                    }}
                    >
                        Delete</div>
                </Space>
            ),
        },
    ];

    const handleEdit = (data) => {
        setEidtUser(data);
        setIsEdit(true);
    }

    const dispatch = useDispatch();
    useEffect(() => { }, [users]);


    return (
        <>
            <div>
                <Table columns={columns} dataSource={users} />
            </div>
            {
                isEdit && (
                    <EditForm
                        isEdit={isEdit}
                        editUser={editUser}
                        setIsEdit={setIsEdit}
                    />
                )
            }
        </>
    )
}

export default FormTable