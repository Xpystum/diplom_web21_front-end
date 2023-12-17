import Header from "../../UI/Header/Header";
import CaruselWidget from "../../widgets/CaruselWidget/CaruselWidget";
import ReviewsOwnersWidget from "../../widgets/ReviewsOwnersWidget/ReviewsOwnersWidget";
import style from './Home.module.sass'
import {Filter} from "../../components/Filter/Filter";
import { Link } from "react-router-dom";

export default function Home(props) {
    return (
        <div className={style.wrap}>

            

            <Header />
            
            <div className={style.container}>
                {/* <Link to="/category/auto" className={style.link}><h1 className={style.title}>Продажа авто в России</h1></Link> */}
                <Filter />
                <div className={style.location}>
                    Нижегородская область Нижний Новгород Другой город... ~ЗАГЛУШКА~
                </div>
            </div>
            
            

            <CaruselWidget />
            

            <ReviewsOwnersWidget />

        </div>
    )
};
