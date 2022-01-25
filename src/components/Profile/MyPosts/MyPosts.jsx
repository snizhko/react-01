import s from "./MyPosts.module.css";
import PostItem from "./PostItem/PostItem"

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <div className={s.post}></div>
      <div className={s.list}>
        <PostItem />
      </div>
    </div>
  );
};

export default MyPosts;
