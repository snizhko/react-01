import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={s.profile_info}>
            <div className={s.background}>
                <img
                    className={s.img}
                    src="https://images.unsplash.com/photo-1542686174-e2da165f1062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80"
                    alt="fuji"
                />
            </div>
            <div className={s.block}>
                <div className={s.pic}>
                    <img
                        className={s.img}
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
        </div>
    )
}

export default ProfileInfo;