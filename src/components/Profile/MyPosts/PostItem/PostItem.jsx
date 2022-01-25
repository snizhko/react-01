import s from "./PostItem.module.css";

const PostItem = () => {
  return (
    <div className={s.item}>
      <div className={s.pic}>
        <img
          className={s.img}
          src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
          alt="avatar"
        />
      </div>
      <div className={s.text}>123123 123123 345345 546 456</div>
    </div>
  );
};

export default PostItem;
