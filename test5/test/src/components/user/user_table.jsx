import {useEffect, useState} from 'react';
import { Space, Table, Tag } from 'antd';
import {fetchAllUserAPI} from "../../services/api.service.js";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal.jsx";


const UserTable = (props) => {
    const {dataUsers} = props;

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            render: (_, record) => {
                return (
                    <>
                        <a href={"#"}>{record.id0}</a>
                    </>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <>
                    <div style={{display: "flex", gap: "20px"}}>
                        <EditOutlined style={{cursor: "pointer", color: "orange"}}/>
                        <DeleteOutlined style={{cursor: "pointer", color: "red"}}/>
                    </div>

                </>

            ),
        },
    ];
    // const data = [
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];


    console.log("Run render 000");
    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"id"}
            />
            <UpdateUserModal/>
        </>

    )
}

export default UserTable;