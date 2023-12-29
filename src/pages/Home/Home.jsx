import Header from "../../UI/Header/Header";
import CaruselWidget from "../../widgets/CaruselWidget/CaruselWidget";
import ReviewsOwnersWidget from "../../widgets/ReviewsOwnersWidget/ReviewsOwnersWidget";
import style from './Home.module.sass'
import { Link } from "react-router-dom";


export default function Home(props) {
    // requestToken();
    return (
        <div className={style.wrap}>

            <Header />
            <div className={style.container}>
                <Link to="/category/auto" className={style.link}><h1 className={style.title}>Продажа авто в России</h1></Link>
                <div className={style.location}>
                    <a href="#" title="~ЗАГЛУШКА~">Нижегородская область</a>
                    <a href="#" title="~ЗАГЛУШКА~">Нижний Новгород</a>
                    <a href="#" title="~ЗАГЛУШКА~">Другой город...</a>
                    <span>~ЗАГЛУШКА~</span>
                </div>
            </div>

            <CaruselWidget />

            <ReviewsOwnersWidget />

        </div>
    )
};
