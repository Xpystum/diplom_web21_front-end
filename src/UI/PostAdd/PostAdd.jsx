import { Link } from "react-router-dom";
import style from './PostAdd.module.sass';
import icon from './plus.svg'
export default function PostAdd(props){
    let user = props.user;
    return(
        <div className={style.postadd}>
            <Link className={(!user || user.status == 'ban')? style.postadd__disabled : style.postadd__link} to={(!user || user.status == 'ban')? '..' : '/my/ads/new'} title={(!user || user.status == 'ban')? 'Вы не можете подать объявления' : 'Подать объявления'}>
                <img src={icon} alt="pluse" />
                <p className={style.lg}>Продать</p>
                <p className={style.xxl}>Подать объявление</p>
            </Link>
        </div>
        
    )
}