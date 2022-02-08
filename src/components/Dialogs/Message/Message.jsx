import s from "./../Dialogs.module.css"

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.pic}>
                <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt="avatar"/>
            </div>
            <div className={s.text}>{props.text}</div>
        </div>
    )
}

export default Message;