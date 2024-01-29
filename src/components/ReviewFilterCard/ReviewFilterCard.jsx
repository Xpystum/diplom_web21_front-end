import { Link } from "react-router-dom"
import style from './ReviewFilterCard.module.sass'
import { URL_IMG } from "../../config"


export default function ReviewFilterCard(props){
    let tab_review = props.tab_review    

    let preview = ''
    if(tab_review.review == null){
        preview = ''
    }
    if(tab_review.review != null){
        preview = tab_review.review.substr(0, 200)
    }

    let img = tab_review.main_img
    let urlImg = URL_IMG
    if(tab_review.main_img == null)(//todo создать универсальный action
        img = 'reviews/nofoto/wagon.png'
    )

    let imgAlt;
    if(tab_review.main_img != null){
        imgAlt = tab_review.main_img.substr(8);
    }
    else{
        imgAlt ='nofoto.png'
    }
    return(
        <Link to={`/category/reviews/${tab_review.id}`} className={style.Review_tab_link}>
            <div className={style.Review_tab_card_wrap}>
                <div  className={style.Review_tab_wrap}
                >
                    <div className={style.Review_tab_foto_wrap}>
                        <img 
                            className={style.Review_tab_foto}
                            src={urlImg + img} 
                            alt={imgAlt}
                            >
                        </img>
                        {
                            (tab_review.raiting > 0)?
                            <div className={style.Review_tab_rating}>
                                <span>{tab_review.raiting}</span>
                            </div>
                            :
                            <div></div>
                        }
                    </div>
                        <div className={style.Review_tab_description}>
                            <p>{tab_review.brand.name} {tab_review.model.name} {tab_review.year}</p>
                            <span>{preview}...</span>
                        </div>
                </div>
            </div>
        </Link>
    )
}