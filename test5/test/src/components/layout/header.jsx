import {Link, NavLink} from "react-router-dom";
import { Menu } from 'antd';
import {AuditOutlined, HomeOutlined, UsergroupAddOutlined} from '@ant-design/icons';
import {useState} from "react";

const Header = () => {
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