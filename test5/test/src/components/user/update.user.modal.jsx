import {useEffect, useState} from "react";
import {Input, Modal, notification} from "antd";
import {createUserAPI, updateUserAPI} from "../../services/api.service.js";

const UpdateUserModal = (props) => {
    const [fullName, setFullName] = useState("");
    const [id, setId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const {isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate
        , loadUser
        } = props;
    useEffect(() => {
        if (dataUpdate) {
            setFullName(dataUpdate.fullName);
            setId(dataUpdate.id);
            setPhoneNumber(dataUpdate.phoneNumber);
        }
    }, [dataUpdate]);
    const handleSubmitBtn = async() => {
        const res = await updateUserAPI(id, fullName, phoneNumber);
        if (res.status === 200) {
            notification.success({
                message: "Update user",
                description: "Update user successfully"
            })
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error(
                {
                    message: "Error create user",
                    description: JSON.stringify(res.message)
                }
            )
        }
    }
    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setFullName(" ");
        setId("");
        setPhoneNumber("");
        setDataUpdate(null);
    }

    return (
        <>
            <Modal
                title={"Update User"}
                open={isModalUpdateOpen}
                onOk={() => handleSubmitBtn(false)}
                // onCancel={() => setIsModalOpen(false)}
                onCancel={resetAndCloseModal}
                maskClosable={false}
                okText={"UPDATE"}
            >
                <div>
                    <span>Id</span>
                    <Input
                        value={id}
                        disabled={true}
                    />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => {
                            setFullName(event.target.value)
                        }}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phoneNumber}
                        onChange={(event) => {
                            setPhoneNumber(event.target.value)
                        }}
                    />
                </div>
            </Modal>
        </>
    )
}
export default UpdateUserModal;