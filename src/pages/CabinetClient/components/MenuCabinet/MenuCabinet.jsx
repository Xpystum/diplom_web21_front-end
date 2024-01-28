import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import style from "./MenuCabinet.module.sass";

export default function MenuCabinet(props){

    return(
        <nav className={style.nav}>
            <ul>
                <li><Link to="/my" className="active"><FontAwesomeIcon icon="fa-solid fa-circle-user" className={style.icon}/> <span>Личный кабинет</span></Link></li>
                <li><Link to="/my/ads"><FontAwesomeIcon icon="fa-solid fa-car-side"  className={style.icon}/> <span>Объявления</span></Link></li>
                <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-comment"  className={style.icon}/> <span>Сообщения</span></Link></li>
                <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-star"  className={style.icon}/> <span>Избранное</span></Link></li>
                <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-bell"  className={style.icon}/> <span>Подписки</span></Link></li>
                <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-chart-simple"  className={style.icon}/> <span>Статистика</span></Link></li>
                <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-gauge-simple-high"  className={style.icon}/> <span>Отчеты по VIN</span></Link></li>
            </ul>
        </nav>
    );
}