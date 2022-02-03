import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '' + props.id;

    return (
        <li className={s.item}>
            <NavLink to={path}> {props.name} </NavLink>
        </li>
    )
}

export default DialogsItem;