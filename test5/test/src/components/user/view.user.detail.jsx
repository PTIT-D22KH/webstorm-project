import {useState} from "react";
import {Button, Drawer, notification, Radio, Space} from "antd";
import {handleUploadFile, updateUserAvatarAPI} from "../../services/api.service";

const ViewUserDetail = (props) => {
    const {dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen, loadUser}  = props;
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length == 0) {
            setSelectedFile(null);
            return;
        }
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }

    }
    const handleUpdateUserAvatar = async() => {
        const resUpload = await handleUploadFile(selectedFile, "avatar");
        // console.log(resUpload);
        const newAvatar = resUpload.data;
        // console.log(newAvatar);
        const resUpdateAvatar = await updateUserAvatarAPI(dataDetail.id, dataDetail.fullName, dataDetail.phoneNumber, newAvatar);
        // console.log(resUpdateAvatar);
        if (resUpdateAvatar.status === 200) {
            setIsDetailOpen(false);
            setSelectedFile(null);
            setPreview(null);
            await loadUser();
            notification.success({
                message: "Update User Avatar",
                description: "Update user avatar successfully!"
            })
        } else {
            notification.error({
                message: "Error update avatar",
                description: JSON.stringify(resUpdateAvatar.message)
            })
        }
    }
    return (
        <>
            <Drawer
                width = {"40vw"}
                title="User Detail"

                onClose={() => {
                    setDataDetail(null);
                    setIsDetailOpen(false);
                }}
                open={isDetailOpen}
            >
                {
                    dataDetail ? <>
                            <p>Id: {dataDetail.id} </p>
                            <br/>
                            <p>Full Name: {dataDetail.fullName} </p>
                            <br/>
                            <p>Email: {dataDetail.email} </p>
                            <br/>
                            <p>Phone Number: {dataDetail.phoneNumber} </p>
                            <br/>
                            <p>Avatar: </p>
                            <div style={{
                                marginTop: "10px",
                                height: "100px", width: "150px",
                                border: "1px solid #ccc"
                            }}>
                                <img height={100} width={150}
                                     src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}
                                />
                            </div>
                            <div>
                                <label htmlFor={"btnUpload"} style={{
                                    display: "block",
                                    width: "fit-content",
                                    marginTop: "15px",
                                    padding: "5px 10px",
                                    background: "orange",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}>
                                    Upload Avatar
                                </label>
                                <input type={"file"}
                                       hidden={true}
                                       id={"btnUpload"}
                                       onChange={(event) => handleOnChangeFile(event)}

                                />
                            </div>
                            {preview &&
                                <>
                                    <div style={{
                                        marginTop: "10px",
                                        marginBottom: "15px",
                                        height: "100px", width: "150px",

                                    }}>
                                        <img height={100} width={150}
                                             src={preview}
                                        />
                                    </div>
                                    <Button type={"primary"}
                                            onClick={() => handleUpdateUserAvatar()}
                                    >Save
                                    </Button>
                                </>

                            }

                        </>
                        :
                        <>
                            <p>No data</p>
                        </>
                }
            </Drawer>
        </>
    );
}
export default ViewUserDetail;