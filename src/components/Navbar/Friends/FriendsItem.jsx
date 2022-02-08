import s from './Friends.module.css';

const FriendsItem = (props) => {
    return (
        <div className={s.item}>
            <div className={s.pic}>
                <img src={props.img} alt="avatar"/>
            </div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default FriendsItem;