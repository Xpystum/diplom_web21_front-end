import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function MenuCabinet(props){

    return(
        <nav>
            <ul>
                <li><Link to="/my" className="active"><FontAwesomeIcon icon="fa-solid fa-circle-user" /> <span>Личный кабинет</span></Link></li>
                <li><Link to="/my/ads"><FontAwesomeIcon icon="fa-solid fa-car-side" /> <span>Объявления</span></Link></li>
                <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-comment" /> <span>Сообщения</span></Link></li>
                <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-star" /> <span>Избранное</span></Link></li>
                <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-bell" /> <span>Подписки</span></Link></li>
                <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-chart-simple" /> <span>Статистика</span></Link></li>
                <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-gauge-simple-high" /> <span>Отчеты по VIN</span></Link></li>
            </ul>
        </nav>
    );
}