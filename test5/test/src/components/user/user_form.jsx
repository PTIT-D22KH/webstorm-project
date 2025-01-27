import {Input, Modal, notification} from "antd";
import {Button} from "antd";
import {useState} from "react";
import {createUserAPI} from "../../services/api.service.js";
const UserForm = (props) => {
    const {loadUser} = props;
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
            await loadUser();
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
        <div
            className={"user-form"}
            style={
            {
                margin: "20px 0"
            }
            }
        >
            <div
                style={
                {
                    display: "flex",
                    gap: "15px",
                    flexDirection: "column"
                }
                }
            >

                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h3>Table Users</h3>
                    <Button
                        // onClick={() => handleClickButton()}
                        onClick={() => setIsModalOpen(true)}
                        type="primary">
                        Create user
                    </Button>
                </div>
                <Modal
                    title={"Create User"}
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
            </div>

        </div>
    )
}
export default UserForm;