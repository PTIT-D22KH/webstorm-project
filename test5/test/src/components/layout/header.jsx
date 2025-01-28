import {Link, NavLink} from "react-router-dom";
import { Menu } from 'antd';
import {AuditOutlined, HomeOutlined, SettingOutlined, UsergroupAddOutlined} from '@ant-design/icons';
import {useContext, useState} from "react";
import {AuthContext} from "../context/auth.context.jsx";

const Header = () => {
    const {user} = useContext(AuthContext);
    console.log("Check data: ", user);
    const items = [
        {
            label: <Link to={"/"}>Home</Link> ,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>User</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />,
        },
        {
            label: <Link to={"/books"}>Product</Link>,
            key: 'SubMenu',
            icon: <AuditOutlined />,
        },
        {
            label: "Setting",
            key: "setting",
            icon: <SettingOutlined/>,
            children: [
                {
                    label: <Link to={"/login"}>Login</Link>,
                    key: "login",
                },
                {
                    label: <Link to={"/logout"}>Logout</Link>,
                    key: "logout",
                }
            ]
        }
    ];
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
            />
        </>

    )
}
export default Header;