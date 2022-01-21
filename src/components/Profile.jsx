const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-image_wrap">
        <img
          className="profile-image"
          src="https://assets.unenvironment.org/styles/article_billboard_image/s3/2021-05/alberta-2297204_1920.jpg"
          alt="nature"
        />
      </div>
      <div className="profile-block">
        <div className="profile-pic">
          <img
            className="profile-pic_img"
            src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
            alt="avatar"
          />
        </div>
        <div className="profile-info">
          <p>My name</p>
          <p>My age</p>
          <p>My city</p>
          <p>My description</p>
        </div>
      </div>
      <div className="my-posts">
        <div className="new-post"></div>
        <div className="posts">
          <div className="post"></div>
          <div className="post"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
