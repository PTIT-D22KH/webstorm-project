import './header.css'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
            {/*<li><a href="#about">About</a></li>*/}
        </ul>
    )
}
export default Header;