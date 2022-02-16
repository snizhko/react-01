import s from "./MyPosts.module.css";
import PostItem from "./PostItem/PostItem"
import {useRef} from "react";

const MyPosts = (props) => {

    let postsElement = props.posts.map((p, i) => <PostItem key={i} id={p.id} likes={p.likesCount} message={p.message}/>);

    let newPostElement = useRef();

    let addPost = () => {
        let text = newPostElement.current.value;

        if (text === '') {
            return;
        };

        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.posts}>
            <h3 className={s.title}>My posts</h3>
            <div className={s.post}>
                <div className={s.textarea_wrap}>
                    <textarea className={s.textarea} ref={newPostElement}></textarea>
                </div>
                <div className={s.btn_wrap}>
                    <button onClick={addPost} className={s.btn + ' btn'}>Add post</button>
                </div>
            </div>
            <div className={s.list}>
                { postsElement }
            </div>
        </div>
    );
};

export default MyPosts;
