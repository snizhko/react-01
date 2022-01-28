import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <li className={s.item}>
            <NavLink className={navData => navData ? s.is_active : ''} to={props.id}>{props.name}</NavLink>
        </li>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_list}>
                <DialogsItem id="1" name="Natasha"/>
                <DialogsItem id="2" name="Sasha"/>
                <DialogsItem id="3" name="Yura"/>
                <DialogsItem id="4" name="Lesia"/>
                <DialogsItem id="5" name="Dima"/>
                <DialogsItem id="6" name="Dasha"/>
            </ul>
            <div className={s.messages}>
                <Message text="Hi!" />
                <Message text="How are you?" />
                <Message text="I'm fine, and you?" />
                <Message text="Me too" />
            </div>
        </div>
    )
}

export default Dialogs;