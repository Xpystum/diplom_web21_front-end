import { Link } from "react-router-dom";
import ReviewOwnerCard from "./ReviewOwnerCard"
import style from './ReviewOwnerCard.module.sass';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { request } from "../../Action/request";
import { reloadReviews } from "../../redux/dataState";

export default function ReviewsOwnersWidget(props){

    let dispatch = useDispatch();
    let reviews = useSelector(state => state.dataState.value.reviews.data)

    useEffect(()=>{
          request('post', 'all-info-reviews', (response) => {
          if (response.status === 200) {
            dispatch(reloadReviews(response.data));            
          }
        }, []);

      },[]);    
      
    let lastReviewsOwners = reviews.slice( - 4)

    return (
      <div className={style.Reviews_wrap}>
        <div className={style.Reviews_owners_widget_wrap}>        
            <Link to='category/reviews'>
                <h2 >Отзывы владельцев авто</h2>
            </Link>
            <div className={style.Reviews_owners_wrap}>              
            {
              lastReviewsOwners.map((lastReviewsOwners)=>                
                <ReviewOwnerCard 
                  key={lastReviewsOwners.id} 
                  lastReviewsOwners={lastReviewsOwners} 
                />                
              )
            }
            </div>
        </div>      
      </div>
    )
  };
  