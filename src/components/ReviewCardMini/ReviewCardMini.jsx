
import { Link } from 'react-router-dom';
import style from './ReviewCardMini.module.sass';
import { URL_IMG } from '../../config';

export default function ReviewCardMini(props){
    let carouselReviews = props.carouselReviews
    let urlImg = URL_IMG
    let imgAlt = carouselReviews.main_img.substr(8)

    return(
        <div>
            <Link 
                className={style.Review_Carousel_link} 
                to={`/category/reviews/${carouselReviews.id}`}
            > 
            <div  className={style.Review_wrap}
            >
                <div className={style.Review_foto_wrap}>
                    <img 
                        className={style.Review_foto}
                        src={urlImg + carouselReviews.main_img} 
                        alt={imgAlt}
                        >
                    </img>
                    <div className={style.Review_rating}>
                        <span>{carouselReviews.raiting}</span>
                    </div>
                </div>
                    <div className={style.Review_carousel_description}>
                        <p>{carouselReviews.brand.name} {carouselReviews.model.name} {carouselReviews.year}</p>
                    </div>
            </div>            
        </Link>
        </div>
    )
}