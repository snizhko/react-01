import s from './Friends.module.css';
import FriendsItem from "./FriendsItem";

const Friends = (props) => {
    let friendsElements = props.state.map((f, i) => <FriendsItem name={f.name} img={f.img} key={i}/>);

    return (
        <div className={s.friends}>
            <h3 className={s.title}>My friends</h3>
            <div className={s.list}>
                { friendsElements }
            </div>
        </div>
    )
}

export default Friends;