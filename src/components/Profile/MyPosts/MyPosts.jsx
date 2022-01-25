import s from "./MyPosts.module.css";
import PostItem from "./PostItem/PostItem"

const MyPosts = (props) => {
  return (
    <div className={s.posts}>
      <div className={s.post}></div>
      <div className={s.list}>
      <PostItem likes="54" message="Hi!"/>
      <PostItem likes="32" message="It's my first post!"/>
      </div>
    </div>
  );
};

export default MyPosts;
