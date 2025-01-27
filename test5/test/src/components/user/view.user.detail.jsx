import {useState} from "react";
import {Button, Drawer, Radio, Space} from "antd";

const ViewUserDetail = (props) => {
    const {dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen}  = props;
    // const [open, setOpen] = useState(false);
    // const [placement, setPlacement] = useState('left');
    // const showDrawer = () => {
    //     setOpen(true);
    // };
    // const onChange = (e) => {
    //     setPlacement(e.target.value);
    // };
    return (
        <>
            <Drawer
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