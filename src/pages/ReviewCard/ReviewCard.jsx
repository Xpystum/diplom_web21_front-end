import { useDispatch, useSelector } from "react-redux";
import Header from "../../UI/Header/Header";
import { useEffect } from "react";
import { request } from "../../Action/request";
import { loadSelectReview, loaderSwitchReview, reloadReview, reloadSelectReview } from "../../redux/dataState";
import { useParams, useSearchParams } from "react-router-dom";


export default function ReviewCard() {
    let links = useParams();
    let reviews = useSelector(state => state.dataState.value.reviews.data);
    let select_review = useSelector(state => state.dataState.value.select_review);

    let dispatch = useDispatch();

useEffect(()=>{
    request('post', 'reviews', (response) => {
        if (response.status === 200) {
        dispatch(loaderSwitchReview(false));
        dispatch(reloadReview(response.data));

        }
    }, {});

},[]);
        console.log(reviews)
        console.log(select_review)
    return (
        <div>
            <Header/>

        </div>
    )
};