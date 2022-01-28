import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '' + props.id;

    return (
        <li className={s.item}>
            <NavLink to={path}> {props.name} </NavLink>
        </li>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Natasha'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Yura'},
        {id: 4, name: 'Lesia'},
        {id: 5, name: 'Dima'},
        {id: 6, name: 'Dasha'}
    ];

    let messages = [
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'I\'m fine, and you?'},
        {id: 4, text: 'Me too'},
        {id: 5, text: 'Yo!'},
        {id: 6, text: 'Yo Yo Yo!'},
    ];

    let dialogsElements = dialogs.map((d, i) => <DialogsItem key={i} id={d.id} name={d.name}/>);
    let messagesElements = messages.map((m, i) => <Message key={i} text={m.text}/>);

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_list}>
                { dialogsElements }
            </ul>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;