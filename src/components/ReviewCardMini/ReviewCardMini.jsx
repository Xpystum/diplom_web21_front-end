
import { Link } from 'react-router-dom';
import style from './ReviewCardMini.module.sass';
import { URL_IMG } from '../../config';

export default function ReviewCardMini(props){
    let carouselReviews = props.carouselReviews

    let img = carouselReviews.main_img
    let urlImg = URL_IMG
    if(carouselReviews.main_img == null)(
        img = 'reviews/nofoto/wagon.png'
    )

    let imgAlt;
    if(carouselReviews.main_img != null){
        imgAlt = carouselReviews.main_img.substr(8);
    }
    else{
        imgAlt ='nofoto.png'
    }

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
                        src={urlImg + img} 
                        alt={imgAlt}
                        >
                    </img>
                    {(carouselReviews.raiting > 0)?
                    <div className={style.Review_rating}>
                        <span>{carouselReviews.raiting}</span>
                    </div>
                    :
                    <div></div>
                    }
                </div>
                    <div className={style.Review_carousel_description}>
                        <p>{carouselReviews.brand.name} {carouselReviews.model.name} {carouselReviews.year}</p>
                    </div>
            </div>            
        </Link>
        </div>
    )
}