import {useEffect, useState} from 'react';
import { Space, Table, Tag } from 'antd';
import {fetchAllUserAPI} from "../../services/api.service.js";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal.jsx";
import ViewUserDetail from "./view.user.detail.jsx";


const UserTable = (props) => {
    const {dataUsers, loadUser} = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataDetail, setDataDetail] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            render: (_, record) => {
                return (
                    <>
                        <a
                            href={"#"}
                            onClick={() => {
                                setDataDetail(record);
                                setIsDetailOpen(true);
                            }}
                        >
                            {record.id}
                        </a>
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
                        <EditOutlined
                            onClick={() => {
                                setDataUpdate(record);
                                setIsModalUpdateOpen(true);
                            }}
                            style={{cursor: "pointer", color: "orange"}}
                        />
                        <DeleteOutlined style={{cursor: "pointer", color: "red"}}/>
                    </div>

                </>

            ),
        },
    ];
    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"id"}
            />
            <UpdateUserModal
            isModalUpdateOpen = {isModalUpdateOpen}
            setIsModalUpdateOpen = {setIsModalUpdateOpen}
            dataUpdate={dataUpdate}
            setDataUpdate ={setDataUpdate}
            loadUser = {loadUser}
            />

            <ViewUserDetail
                dataDetail = {dataDetail}
                setDataDetail={setDataDetail}
                isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}
            />
        </>

    )
}

export default UserTable;