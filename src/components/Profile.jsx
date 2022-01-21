import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.img_wrap}>
        <img
          className={s.img}
          src="https://assets.unenvironment.org/styles/article_billboard_image/s3/2021-05/alberta-2297204_1920.jpg"
          alt="nature"
        />
      </div>
      <div className={s.block}>
        <div className={s.pic}>
          <img
            className={s.pic_img}
            src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
            alt="avatar"
          />
        </div>
        <div className={s.info}>
          <p>My name</p>
          <p>My age</p>
          <p>My city</p>
          <p>My description</p>
        </div>
      </div>
      <div className={s.posts}>
        <div className={s.post}></div>
        <div className={s.list}>
          <div className={s.item}></div>
          <div className={s.item}></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
