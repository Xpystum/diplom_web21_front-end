import { Link } from "react-router-dom";
import style from './PostAdd.module.sass';
import icon from './plus.svg'
export default function PostAdd(props){
    return(
        <div className={style.postadd}>
            <Link className={style.postadd__link}><img src={icon} alt="pluse" />
                <p className={style.lg}>Продать</p>
                <p className={style.xxl}>Подать объявление</p>
            </Link>
        </div>
        
    )
}