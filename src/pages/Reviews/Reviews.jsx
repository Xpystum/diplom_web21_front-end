import style from "./Reviews.module.sass"
import Header from "../../UI/Header/Header"
import ReviewsBrandsList from "../../components/ReviewsBrandsList/ReviewsBrandsList"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loaderSwitchProducts, reloadReviews, reloadSelectReview, } from "../../redux/dataState";
import { request } from "../../Action/request";

import ReviewCarousel from "../../widgets/ReviewsOwnersWidget/ReviewsCarousel/ReviewCarousel";

import ReviewTabs from "../../components/ReviewTabs/ReviewTabs";
import PreloaderSmall from "../../components/PreloaderSmall/PreloaderSmall";


export default function Reviews(props){

    let dispatch = useDispatch();
    let select_reviews = useSelector(state => state.dataState.value.reviews.data)
    let select_review = useSelector(state => state.dataState.value.select_review.data)
    
    useEffect(()=>{
          request('post', 'all-info-reviews', (response) => {
          if (response.status === 200) {
            dispatch(loaderSwitchProducts(false));
            dispatch(reloadSelectReview(response.data));

            dispatch(reloadReviews(response.data));

          }
        }, [{}]);

      },[]);
    console.log(select_reviews)
    console.log(select_review)
    return(
        <div>
            <Header/>
            {
            (select_reviews.length == 0)?
              <PreloaderSmall/>
              :
              <div className={style.Reviews_components_wrap}>
                <ReviewsBrandsList/>
                <ReviewCarousel
                  select_review={select_review}
                  key={select_review.id}
                />
                <ReviewTabs
                select_review={select_review}
                key={select_review.id}
                />
              </div>
            }
        </div>
    )
} 