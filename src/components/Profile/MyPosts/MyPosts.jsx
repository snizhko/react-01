import s from "./MyPosts.module.css";
import PostItem from "./PostItem/PostItem"

const MyPosts = (props) => {
    return (
        <div className={s.posts}>
            <h3 className={s.title}>My posts</h3>
            <div className={s.post}>
                <div className={s.textarea_wrap}>
                <textarea className={s.textarea}></textarea>
                </div>
                <div className={s.btn_wrap}>
                    <button className={s.btn}>Add post</button>
                </div>
            </div>
            <div className={s.list}>
                <PostItem likes="54" message="Hi!"/>
                <PostItem likes="32" message="It's my first post!"/>
            </div>
        </div>
    );
};

export default MyPosts;
