import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d, i) => <DialogsItem key={i} id={d.id} name={d.name}/>);
    let messagesElements = props.state.messages.map((m, i) => <Message key={i} text={m.text}/>);

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