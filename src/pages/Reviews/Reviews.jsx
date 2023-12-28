
import Header from "../../UI/Header/Header"
import ReviewsBrandsList from "../../components/ReviewsBrandsList/ReviewsBrandsList"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loaderSwitchReviews, reloadReviews, reloadSelectReview, } from "../../redux/dataState";
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
            dispatch(loaderSwitchReviews(false));
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
              <div>
                <ReviewsBrandsList/>
                <ReviewCarousel/>
                <ReviewTabs/>
              </div>
            }
        </div>
    )
} 