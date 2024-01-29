import { Link } from "react-router-dom";
import ReviewOwnerCard from "./ReviewOwnerCard"
import style from './ReviewOwnerCard.module.sass';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { request } from "../../Action/request";
import { loaderSwitch, reloadReviews } from "../../redux/dataState";
import { Container, Row } from "react-bootstrap";
import PreloaderSmall from "../../components/PreloaderSmall/PreloaderSmall";

export default function ReviewsOwnersWidget(props){

    let dispatch = useDispatch();
    let reviews = useSelector(state => state.dataState.value.reviews.data)
    console.log(reviews)
    useEffect(()=>{
          request('post', 'all-info-reviews', (response) => {
          if (response.status === 200) {
            dispatch(loaderSwitch(false))
            dispatch(reloadReviews(response.data));            
          }
        }, []);

      },[]);    
      
    let lastReviewsOwners = reviews.slice( - 4)

    return (
      <div className={style.Reviews_wrap}>
        {(!reviews 
        || reviews.length == 0 
        
        )?

        <PreloaderSmall/>
        :
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
        </div>}      
      </div>
    )
  };
  