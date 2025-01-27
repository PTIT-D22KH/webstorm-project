import UserTable from "../components/user/user_table.jsx";
import UserForm from "../components/user/user_form.jsx";
import {useEffect, useState} from "react";
import {fetchAllUserAPI} from "../services/api.service.js";

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async() => {
        const res = await fetchAllUserAPI();
        setDataUsers(res.data);
    }
    return (
        <div>


            <div style={{padding: "20px"}}>
                <UserForm loadUser = {loadUser}/>
                <UserTable dataUsers={dataUsers}/>
            </div>
        </div>
    )
}
export default UserPage;