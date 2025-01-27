import {useState} from "react";
import {Input, Modal, notification} from "antd";
import {createUserAPI} from "../../services/api.service.js";

const UpdateUserModal = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmitBtn = async() => {
        const res = await createUserAPI(fullName, email, password, phoneNumber);
        if (res.status === 201) {
            notification.success({
                message: "Create user",
                description: "Create user successfully"
            })
            resetAndCloseModal();
            // await loadUser();
        } else {
            notification.error(
                {
                    message: "Error create user",
                    description: JSON.stringify(res.message)
                }
            )
        }

        console.log("Check res: ", res);
    }
    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setFullName(" ");
        setEmail("");
        setPassword("");
        setPhoneNumber("");
    }
    return (
        <>
            <Modal
                title={"Update User"}
                open={isModalOpen}
                onOk={() => handleSubmitBtn(false)}
                // onCancel={() => setIsModalOpen(false)}
                onCancel={resetAndCloseModal}
                maskClosable={false}
                okText={"CREATE"}
            >
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
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value)
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