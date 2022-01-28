import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <a className={s.link} href="/">
        <img
          className={s.logo}
          src="https://cdn0.iconfinder.com/data/icons/white-cat-emoticon-filled/64/cute_cat_kitten_face_avatar-35-512.png"
          alt="logo"
        />
      </a>
    </header>
  );
};

export default Header;
