import s from "../Dialogs.module.css";
import {useRef} from "react";

const DialogsPost = (props) => {
    let postsElement = useRef();

    let addPost = () => {
        let text = postsElement.current.value;
        console.log(text);
    }

    return (
        <div className={s.post}>
            <div className={s.textarea_wrap}>
                <textarea ref={postsElement} className={s.textarea}></textarea>
            </div>
            <div className={s.btn_wrap}>
                <button onClick={addPost} className={s.btn + ' btn'}>Add post</button>
            </div>
        </div>
    )
}

export default DialogsPost;