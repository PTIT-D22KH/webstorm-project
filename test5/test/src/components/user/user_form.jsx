import {Input} from "antd";

const UserForm = () => {
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
                    <span>FullName</span>
                    <Input/>
                </div>
                <div>
                    <span>FullName</span>
                    <Input/>
                </div>
                <div>
                    <span>FullName</span>
                    <Input/>
                </div>
                <div>
                    <span>FullName</span>
                    <Input/>
                </div>
            </div>

        </div>
    )
}
export default UserForm;