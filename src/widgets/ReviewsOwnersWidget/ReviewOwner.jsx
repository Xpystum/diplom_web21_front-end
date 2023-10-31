import { Link } from 'react-router-dom';
import style from './ReviewsOwners.module.sass';

export default function ReviewOwner(props){
    return(
    <div>
        <Link className={style.Review_link} to='#'> 
            <div  className={style.Review_wrap}>
                <img className={style.Review_foto} src='https://s.auto.drom.ru/i24286/r/photos/1441631/gen270_1660965.jpg' alt='get from DB'></img>{/*временная картинка */}
                <div className={style.Review_deskription}>
                    <div>
                        <span>OMODA C5 2023 M</span>{/*получить из BD, вставить иконку*/}
                        <span> 26</span>
                    </div>
                    <div>
                        <p>date of review</p>
                    </div>
                </div>
            </div>            
        </Link>
    </div>
)}