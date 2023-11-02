import Header from "../../UI/Header/Header";
import CaruselWidget from "../../widgets/CaruselWidget/CaruselWidget";
import ReviewsOwnersWidget from "../../widgets/ReviewsOwnersWidget/ReviewsOwnersWidget";

import RelevanceProductWidget from "../../widgets/RelevanceProductWidget/RelevanceProductWidget";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { request } from "../../Action/request";
import { loaderSwitchProducts, reloadProducts } from "../../redux/dataState";


export default function Home(props){
  let dispatch = useDispatch();
  let { alias } = useParams();
  let brands;
  useEffect(()=>{
    dispatch(loaderSwitchProducts(true));
    request('get', 'brands', (response) => {
      brands= response.data
      console.log(brands)
      if (response.status === 200) {
        // dispatch(loaderSwitchProducts(false));
        dispatch(reloadProducts(response.data));
      }
    }, {alias: (alias != undefined)? alias: null});
  },[window.location.pathname]);
  return (
    <div>

      <Header/>

      <CaruselWidget />
      <div className="brands">
        {/* {brands.data.map((item)=>
          <div className="brand__item">

          </div>
        )} */}
      </div>
      <ReviewsOwnersWidget/>

      <RelevanceProductWidget />
      
    </div>
  )
};
