import {Input, notification} from "antd";
import {Button} from "antd";
import {useState} from "react";
import {createUserAPI} from "../../services/api.service.js";
const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const handleClickButton = async() => {
        const res = await createUserAPI(fullName, email, password, phoneNumber);
        if (res.status === 201) {
            notification.success({
                message: "Create user",
                description: "Create user successfully"
            })
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
                <div>
                    <span>Full Name</span>
                    <Input 
                    value={fullName}
                    onChange={(event) => {setFullName(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                    value = {email}
                    onChange={(event) => {setEmail(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                    value = {password}
                    onChange={(event) => {setPassword(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                    value = {phoneNumber}
                    onChange={(event) => {setPhoneNumber(event.target.value)}}
                    />
                </div>
                <div>
                    <Button 
                    onClick={() => handleClickButton()}
                    type="primary">
                    Create user
                    </Button>
                </div>
            </div>

        </div>
    )
}
export default UserForm;