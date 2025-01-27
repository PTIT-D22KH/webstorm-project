import {useEffect, useState} from 'react';
import {notification, Popconfirm, Space, Table, Tag} from 'antd';
import {deleteUserAPI, fetchAllUserAPI} from "../../services/api.service.js";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal.jsx";
import ViewUserDetail from "./view.user.detail.jsx";


const UserTable = (props) => {
    const {dataUsers,
        loadUser,
        current,
        pageSize,
        total,
        setCurrent,
        setPageSize
    } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataDetail, setDataDetail] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const handleDeleteUser = async (id) => {
        const res = await deleteUserAPI(id);
        if (res.status === 204) {
            notification.success(
                {
                    message: "Delete user",
                    description: "Delete user successfully"
                }
            )
            await loadUser();
        } else {
            notification.error({
                message: "Error deleting user",
                description: JSON.stringify(res.message)
            })
        }
    }
    const columns = [
        {
            title: 'No',
            render: (_, record, index) => {
                return (
                    <>
                    {(index + 1) + (current - 1) * pageSize}
                    </>
                )
            }
        },
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
                        <Popconfirm
                            title="Delete user"
                            description="Are you sure to delete this user?"
                            onConfirm={() => handleDeleteUser(record.id)}
                            okText="Yes"
                            cancelText="No"
                            placement={"left"}
                        >
                            <DeleteOutlined

                                style={{cursor: "pointer", color: "red"}}
                            />
                        </Popconfirm>

                    </div>

                </>

            ),
        },
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        //if change current page
        if (pagination && pagination.current) {
            if (pagination.current !== current) {
                setCurrent(pagination.current);
            }
        }
        if (pageSize && pagination.pageSize) {
            if (pagination.pageSize !== pageSize) {
                setPageSize(pagination.pageSize);
            }
        }
        console.log("Check on change pagination: ", {pagination, filters, sorter, extra});
    }
    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"id"}
                pagination = {
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => {
                            return (
                                <>
                                    <div> {range[0]}-{range[1]} trên {total} rows</div>

                                </>
                            )
                        }
                    }
                }
                onChange={onChange}


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
                loadUser = {loadUser}
            />
        </>

    )
}

export default UserTable;