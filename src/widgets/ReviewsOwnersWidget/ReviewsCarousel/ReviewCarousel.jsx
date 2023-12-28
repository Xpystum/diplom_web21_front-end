import Carousel from "nuka-carousel"
import style from './ReviewCarousel.module.sass'
import angel from '../../CaruselWidget/icons/angel.svg'
import ReviewCardMini from "../../../components/ReviewCardMini/ReviewCardMini";
import PreloaderSmall from "../../../components/PreloaderSmall/PreloaderSmall";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { request } from "../../../Action/request";
import { loaderSwitchReviews, reloadSelectReview } from "../../../redux/dataState";


export default function ReviewCarousel(props){

    // let dispatch = useDispatch();
    // useEffect(()=>{
    //     request('post', 'all-info-reviews', (response) => {
    //     if (response.status === 200) {
    //       dispatch(loaderSwitchReviews(false));
    //       dispatch(reloadSelectReview(response.data));
          
    //     }
    //   }, [{}]);

    // },[]);

    let select_review = useSelector(state => state.dataState.value.select_review.data)
    // console.log(select_review)
    let carouselReviews = select_review.slice(-6) //отфильтровать за поледнюю неделю
    let loading = carouselReviews.length
    let screen = window.outerWidth
    
  return (
    <div className={style.Carousel_main_Wrap}>
        <h2 className={style.Carousel_name}>Лучшие отзывы недели</h2>
        <div className={style.Carousel_Wrap}>
            <Carousel 
                slidesToShow={               
                    (screen >= 1375)?"5":
                    (screen >= 1100)?"4":
                    (screen >= 825)?"3":
                    (screen >= 550)?"2":"1"}

                wrapAround="true"
                renderCenterLeftControls={({ previousSlide }) => (
                <button onClick={previousSlide}  className="angel__Left angel">
                    <img src={angel} alt="" />
                </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                <button onClick={nextSlide} className="angel__Right angel">
                    <img src={angel} alt="" />
                </button>
                )}
                >
                {carouselReviews.map((carouselReviews)=>
                    (loading==0)?
                    <div className="carusel__loading__item" key={carouselReviews.id}>
                    <PreloaderSmall />
                    </div>
                    :
                    <ReviewCardMini
                    carouselReviews={carouselReviews}
                    key={carouselReviews.id}
                    />
                )}
            </Carousel>
        </div>  
    </div>
    
  )
};
