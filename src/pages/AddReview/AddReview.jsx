import Header from "../../UI/Header/Header"
import style from './AddReview.module.sass'
import './AddReview.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loaderSwitchProducts, reloadBrands, loaderSwitchReviews, reloadReviews, reloadSelectReview, reloadModels, reloadUser, loaderUser, reloadBodyType, reloadFuel, reloadTransmission, reloadDriveUnit } from "../../redux/dataState"
import { request } from "../../Action/request"
import requestDataInToken from "../../Action/requestDataInToken"
import { Link, useNavigate } from "react-router-dom"
import AddReviewCard from "../../components/AddReviewCard/AddReviewCard"


export default function AddReview(props){
    let dispatch = useDispatch()
    let select_reviews = useSelector(state => state.dataState.value.reviews)//удолить
    let select_review = useSelector(state => state.dataState.value.select_review.data)//удолить

    
    
    
    useEffect(()=>{
        request('post', 'all-info-reviews', (response) => {
        if (response.status === 200) {
          dispatch(loaderSwitchReviews(false));
          dispatch(reloadSelectReview(response.data));

          dispatch(reloadReviews(response.data));

        }
      }, [{}]);

    },[]);

 
    

    let brands = useSelector(state => state.dataState.value.brands.data)
    let models = useSelector(state => state.dataState.value.models.data)
    let body_type = useSelector(state => state.dataState.value.body_type.data)
    let user = useSelector(state => state.dataState.value.user.data)
    let fuel = useSelector(state => state.dataState.value.fuel.data)
    let transmission = useSelector(state => state.dataState.value.transmission.data)
    let drive_unit = useSelector(state => state.dataState.value.drive_unit.data)

    let [id, setId] = useState(localStorage.getItem("uid"))
    let navigate = useNavigate();

    useEffect(()=>{
        dispatch(loaderSwitchProducts(true))
        request('post', 'brands', (response) => {
        if (response.status === 200) {
            dispatch(reloadBrands(response.data))
        }
      }, )
        request('post', 'models', (response) => {
        if (response.status === 200) {
            dispatch(reloadModels(response.data))
        }
      }, )

      if (user.length === 0 || localStorage.getItem("uid") != user.id) {
        dispatch(loaderUser(true))
        request('post', 'user', (response) => {
          if (response.status === 200) {
            dispatch(reloadUser(response.data))
          }
        }, {'id': id});
      }
      request('post', 'body-type', (response) => {
        if (response.status === 200) {
            dispatch(reloadBodyType(response.data))
        }
      }, )
      request('post', 'fuel', (response) => {
        if (response.status === 200) {
            dispatch(reloadFuel(response.data))
        }
      }, )
      request('post', 'transmission', (response) => {
        if (response.status === 200) {
            dispatch(reloadTransmission(response.data))
        }
      }, )
      request('post', 'drive-unit', (response) => {
        if (response.status === 200) {
            dispatch(reloadDriveUnit(response.data))
        }
      }, )
    }, [])

    
    return(
        <div>
            <Header />

            <AddReviewCard
                user={user}
                brands={brands}
                models={models}
                body_type={body_type}
                fuel={fuel}
                transmission={transmission}
                drive_unit={drive_unit}
            ></AddReviewCard>
        </div>
    )
}