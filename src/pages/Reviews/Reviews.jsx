
import Header from "../../UI/Header/Header"
import ReviewsBrandsList from "../../components/ReviewsBrandsList/ReviewsBrandsList"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loaderSwitchReviews, reloadReviews, reloadSelectReview, reloadUserReview } from "../../redux/dataState";
import { request } from "../../Action/request";


export default function Reviews(props){

    let dispatch = useDispatch();
    let select_review = useSelector(state => state.dataState.value.select_review)
    let user_review = useSelector(state => state.dataState.value.user_review)

    useEffect(()=>{
          request('post', 'all-info-reviews', (response) => {
          if (response.status === 200) {
            dispatch(loaderSwitchReviews(false));
            dispatch(reloadSelectReview(response.data));
            
          }
        }, [{}]);

      },[]);
    
      
  
      console.log(select_review);
    return(
        <div className="ReviewWrap"/*{style.ReviewWrap}*/>
            <Header/>
            <ReviewsBrandsList/>
            
            
        </div>
    )
} 