import { Link } from "react-router-dom";
import style from "./Main.module.sass";
import moment from 'moment/moment';

export default function Main(props){
    let user = props.user;
    let time = props.time;

    return (
        <div className={style.wrap}>
            <div className={style.top}>
                <div className={style.top__wrap}>
                    <div className={style.user_wrap}>
                        <div className={style.avatar}>
                            <span className={style.avatar__name}>{user.name[0]}</span>
                        </div>
                        <p>{(user.name)? user.name: "Гость"}</p>    
                    </div>
                    <div>
                        123
                    </div>
                </div>
            </div>
            
            <p>Почта: {user.email}</p>
            <p>Статус: {user.status}</p>
            <p>Регистрация: {moment(time, "YYYYMMDD").format('LL')}</p>
            <Link 
                user={user}            
                to='/category/reviews/add-review'
            >Добавить отзыв</Link>
        </div>
    )
};