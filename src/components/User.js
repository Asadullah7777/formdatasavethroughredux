import React from 'react';
import { Tabs } from 'antd';
import Form from './Form';
import FormTable from './FormTable';

const User = () => {

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '/formuser',
            label: `FormUser`,
            children: <Form />,
        },
        {
            key: '/formtable',
            label: `FormTable`,
            children: <FormTable />,
        },
    ];


    return (
        <div><Tabs defaultActiveKey="1" items={items} onChange={onChange} /></div>
    )
}

export default User