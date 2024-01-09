import { Link } from "react-router-dom"
import style from './ReviewFilterCard.module.sass'
import { URL_IMG } from "../../config"


export default function ReviewFilterCard(props){
    let tab_review = props.tab_review
    let tabReview = props.tabReview//заделка
    let preview = tab_review.review.substr(0, [200])
    let urlImg = URL_IMG
    let imgAlt = tab_review.main_img.substr(8)
    // console.log(tabReview)
    return(
        <Link to={`/category/reviews/${tab_review.id}`} className={style.Review_tab_link}>
            <div className={style.Review_tab_card_wrap}>
                <div  className={style.Review_tab_wrap}
                >
                    <div className={style.Review_tab_foto_wrap}>
                        <img 
                            className={style.Review_tab_foto}
                            src={urlImg + tab_review.main_img} 
                            alt={imgAlt}
                            >
                        </img>
                        <div className={style.Review_tab_rating}>
                            <span>{tab_review.raiting}</span>
                        </div>
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