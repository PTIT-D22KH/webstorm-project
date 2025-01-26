import {useEffect, useState} from 'react';
import { Space, Table, Tag } from 'antd';
import {fetchAllUserAPI} from "../../services/api.service.js";


const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([
        // {name: "Eric", age: 25, address: "HN"},
        // {name: "hoidanit", age: 25, address: "HCM"}
    ]);

    useEffect(() => {
        console.log("Run useEffect 111");
        loadUser();
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
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
    const loadUser = async() => {
        const res = await fetchAllUserAPI();
        setDataUsers(res.data);
        console.log(res);
    }

    console.log("Run render 000");
    return (
        <Table
            columns={columns}
            dataSource={dataUsers}
            rowKey={"id"}
        />
    )
}

export default UserTable;