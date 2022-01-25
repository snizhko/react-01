import s from "./PostItem.module.css";

const PostItem = (props) => {
  return (
    <div className={s.item}>
      <div className={s.pic}>
        <img
          className={s.img}
          src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
          alt="avatar"
        />
      </div>
      <div className={s.message}>{props.message}</div>
      <div className={s.like}>Likes: {props.likes}</div>
    </div>
  );
};

export default PostItem;
