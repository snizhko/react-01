import s from "./MyPosts.module.css";
import PostItem from "./PostItem/PostItem"

const MyPosts = (props) => {

    let posts = [
        {id: 1, likesCount: 0, message: 'Hi!'},
        {id: 2, likesCount: 54, message: 'It\'s my first post!'},
        {id: 3, likesCount: 32, message: 'It\'s my first post 1!'},
        {id: 4, likesCount: 11, message: 'It\'s my first post 2!'},
        {id: 5, likesCount: 16, message: 'It\'s my first post 3!'},
        {id: 6, likesCount: 9, message: 'It\'s my first post 4!'},
    ];

    let postsElement = posts.map((p, i) => <PostItem key={i} id={p.id} likes={p.likesCount} message={p.message}/>);

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
                { postsElement }
            </div>
        </div>
    );
};

export default MyPosts;
