import { useDispatch, useSelector } from "react-redux";
import Header from "../../UI/Header/Header";
import { useEffect } from "react";
import { request } from "../../Action/request";
import { loadSelectReview, loaderSwitchReviews, reloadReviews, reloadSelectReview } from "../../redux/dataState";
import { useParams, useSearchParams } from "react-router-dom";
import PreloaderSmall from "../../components/PreloaderSmall/PreloaderSmall";
import style from "./ReviewCard.module.sass"
import "./ReviewCard.css"
import { URL_IMG } from "../../config";
import Slider from "../../components/Slider/Slider";

export default function ReviewCard(props) {
    
    let reviews = useSelector(state => state.dataState.value.reviews.data);
    let select_review = useSelector(state => state.dataState.value.select_review.data);

    let links = useParams();
    let dispatch = useDispatch();
    // let select_review = []
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


    function Rate(evt){
        let idRate = evt.target.id
        console.log(idRate)
    }


        console.log(select_review)
        console.log(reviews)
        function imgListProduct(){

            if(select_review){
                let listImg = 
                [{
                    original: URL_IMG + select_review.main_img,
                    thumbnail: URL_IMG + select_review.main_img,
                }];

                select_review.review_img_collection.forEach((img)=>{
                    listImg.push(
                        {
                            original: URL_IMG + img.resource,
                            thumbnail: URL_IMG + img.resource,
                        }
                    );
                }) 
                return listImg;
            }
            return [];
           
    
        }
    return (
        <div>
            <Header/>
            {(select_review.length == 0)?
                    <PreloaderSmall/>
                :
                <div className={style.ReviewCard}>
                    <div className={style.Headline}>
                        <h1>                            
                            <span className={style.Brand}>{select_review.brand.name}</span>
                            <span className={style.Model}>{select_review.model.name},</span> 
                            <span className={style.YearMaking}>{select_review.year} год</span>
                            <span>- отзыв владельца</span>
                        </h1>
                    </div>
                    <div className="Review_raiting_wrap">
                        <div className="Review_holder_info">
                            
                        </div>
                        <div className="Raiting_wrap">
                            <form className="Rate_wrap">
                                <span>Оцените отзыв:</span>
                                <input type="button" id="1" value='1' className="Rate_num" onClick={(evt)=>{Rate(evt)}}></input>
                                <input type="button" id="2" value='2' className="Rate_num" onClick={(evt)=>{Rate(evt)}}></input>
                                <input type="button" id="3" value='3' className="Rate_num" onClick={(evt)=>{Rate(evt)}}></input>
                                <input type="button" id="4" value='4' className="Rate_num" onClick={(evt)=>{Rate(evt)}}></input>
                                <input type="button" id="5" value='5' className="Rate_num" onClick={(evt)=>{Rate(evt)}}></input>
                            </form>
                            <div className="Raiting">
                                <span></span>
                                <span>{select_review.raiting}</span>
                            </div>
                        </div>
                    </div>
                    <div className="Rating-description_wrap">
                        <div className="Column_left">
                                <div className='PhotoGallery'>
                                    {
             
                                        (imgListProduct().length > 0)?
                                            <Slider imgList={imgListProduct()}/>
                                        :
                                            <img src="asdsd"/>
                                    }
                                    
                                </div>
                        </div>
                        <div className='Сolumn_right'>
                            <div className='CharacteristicsProduct'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Год выпуска</th>
                                            <td>
                                                <span>{select_review.year}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Тип кузова</th>
                                            <td>
                                                <span>{select_review.body_type.name}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                        <th>Двигатель</th>
                                            <td>
                                                <span>{select_review.fuel.name}, {select_review.engine_capacity} л, {select_review.power}л.с.</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Коробка передач</th>
                                            <td>
                                                <span>{select_review.transmission.name}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Привод</th>
                                            <td>
                                                <span>{select_review.drive_unit.name}</span>
                                            </td>
                                        </tr>                                                
                                        <tr>
                                            <th>Пробег</th>
                                            <td>
                                                <span className={style.Green}>{select_review.mileage}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Руль</th>
                                            <td>
                                                <span>{select_review.steering_wheel}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="Review_text">
                            <span>{select_review.review}</span>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
};