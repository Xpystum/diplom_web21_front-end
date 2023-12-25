import { useDispatch, useSelector } from "react-redux";
import Header from "../../UI/Header/Header";
import { useEffect } from "react";
import { request } from "../../Action/request";
import { loadSelectReview, loaderSwitchReviews, reloadReviews, reloadSelectReview } from "../../redux/dataState";
import { useParams, useSearchParams } from "react-router-dom";


export default function ReviewCard(props) {
    let links = useParams();
    let reviews = useSelector(state => state.dataState.value.reviews.data);
    let select_review = useSelector(state => state.dataState.value.select_review);

    let dispatch = useDispatch();

    let responseSelectReview = (response)=>{
        if(response.status == 200){
            dispatch(reloadSelectReview(response.data))
            dispatch(loadSelectReview(true))
        }
            
    }

    useEffect(()=>{

        if(reviews.length == 0){
           request("post", 'review', responseSelectReview, {"id": links.id})
        } 
        else{
            reviews.forEach(review => {
                if(review.id == links.id){
                    dispatch(reloadSelectReview(review))
                    return 0;
                }
            });
        }
    }, [])
        console.log(reviews)
        console.log(select_review)
    return (
        <div>
            <Header/>


        </div>
    )
};