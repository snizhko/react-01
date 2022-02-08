import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink className={navData => navData.isActive ? s.active : ''} to="/">Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={navData => navData.isActive ? s.active : ''} to="/dialogs">Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={navData => navData.isActive ? s.active : ''} to="/news">News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={navData => navData.isActive ? s.active : ''} to="/music">Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={navData => navData.isActive ? s.active : ''} to="/settings">Settings</NavLink>
                </li>
            </ul>
            <Friends state={props.state.friends}/>
        </nav>
    )
}

export default Navbar;