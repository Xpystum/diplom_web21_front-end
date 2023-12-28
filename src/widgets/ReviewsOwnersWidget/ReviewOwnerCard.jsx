import { Link } from 'react-router-dom';
import style from './ReviewOwnerCard.module.sass';
import { URL_IMG } from '../../config';



export default function ReviewOwnerCard(props){
    const lastReviewsOwners = props.lastReviewsOwners;

    let urlImg = URL_IMG

    let reviewDateMounth = lastReviewsOwners.created_at.substr(5, [2])
    switch (reviewDateMounth) {
        case "01": reviewDateMounth = 'января'; break;
        case "02": reviewDateMounth = 'февраля'; break;
        case "03": reviewDateMounth = 'марта'; break;
        case "04": reviewDateMounth = 'апреля'; break;
        case "05": reviewDateMounth = 'мая'; break;
        case "06": reviewDateMounth = 'июня'; break;
        case "07": reviewDateMounth = 'июля'; break;
        case "08": reviewDateMounth = 'августа'; break;
        case "09": reviewDateMounth = 'сентября'; break;
        case "10": reviewDateMounth = 'октября'; break;
        case "11": reviewDateMounth = 'ноября'; break;
        case "12": reviewDateMounth = 'декабря'; break;
      }
    let reviewDateDay = lastReviewsOwners.created_at.substr(8, [2])
    let imgAlt = lastReviewsOwners.main_img.substr(8)

    return(
    <div>
        <Link className={style.Review_link} to={`/category/reviews/${lastReviewsOwners.id}`}> 
            <div  className={style.Review_wrap}>
                <img 
                    className={style.Review_foto} 
                    src={urlImg + lastReviewsOwners.main_img} 
                    alt={imgAlt}></img>
                <div className={style.Review_deskription}>
                    <div>
                        <span>{lastReviewsOwners.brand.name} {lastReviewsOwners.model.name} {lastReviewsOwners.year}</span>
                    </div>
                    <div>
                        <p>{reviewDateDay} {reviewDateMounth}</p>
                    </div>
                </div>
            </div>            
        </Link>
    </div>
)}