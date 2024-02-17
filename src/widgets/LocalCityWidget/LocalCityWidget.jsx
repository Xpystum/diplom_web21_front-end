import { Link } from 'react-router-dom';
import style from './LocalCityWidget.module.sass';

export default function LocalCityWidget(props){

    return(
        <div className={style.container}>
            <Link to="/category/auto" className={style.link}><h1 className={style.title}>Продажа авто в России</h1></Link>
            <div className={style.location}>
                <a href="#" title="~ЗАГЛУШКА~">Нижегородская область</a>
                <a href="#" title="~ЗАГЛУШКА~">Нижний Новгород</a>
                <a href="#" title="~ЗАГЛУШКА~">Другой город...</a>
                <span>~ЗАГЛУШКА~</span>
            </div>
        </div>
    );
}