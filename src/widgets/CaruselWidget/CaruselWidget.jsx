import Carousel from "nuka-carousel"
import './CaruselWidget.sass'
import img from './272x205.png'
import { useState } from "react";
import { URL_IMG } from "../../config";

export default function CaruselWidget(props){
  let [cars, setCars] = useState([
    { id: 1, brand: "VAZ"},{ id: 1, brand: "VAZ"},{ id: 1, brand: "VAZ"},{ id: 1, brand: "VAZ"},{ id: 1, brand: "VAZ"},{ id: 1, brand: "VAZ"},
    { id: 2, brand: "VAZ"},
    { id: 3, brand: "VAZ"},
    { id: 1, brand: "VAZ"},
    { id: 2, brand: "VAZ"},
    { id: 3, brand: "VAZ"},
  ]);
    
  return (
    <Carousel 
      slidesToShow="7" 
      wrapAround="true"
      renderCenterLeftControls={({ previousSlide }) => (
        <button onClick={previousSlide}  className="angel__Left angel">
          <img src={URL_IMG + "carusel/angel.svg"} alt="" />
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button onClick={nextSlide} className="angel__Right angel">
          <img src={URL_IMG + "carusel/angel.svg"} alt="" />
        </button>
      )}
      >
       { cars.map((item)=>
          <div class="carusel__item">
            <img src={img} alt="0" />
            
          </div>
       )}
        
          
        

       

    </Carousel>
  )
};
