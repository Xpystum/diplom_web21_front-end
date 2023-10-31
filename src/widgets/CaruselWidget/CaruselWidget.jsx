import Carousel from "nuka-carousel"
import './CaruselWidget.sass'
import img from './272x205.png'
import angel from './icons/angel.svg'
import { useEffect, useState } from "react";
import PreloaderSmall from "../../components/PreloaderSmall/PreloaderSmall";

export default function CaruselWidget(props){
  let [cars, setCars] = useState([
    { id: 1, brand: "VAZ"},
    { id: 2, brand: "VAZ"},
    { id: 3, brand: "VAZ"},
    { id: 4, brand: "VAZ"},
    { id: 5, brand: "VAZ"},
    { id: 6, brand: "VAZ"},
    { id: 7, brand: "VAZ"},
    { id: 8, brand: "VAZ"},
    { id: 9, brand: "VAZ"},
    { id: 10, brand: "VAZ"},
    { id: 11, brand: "VAZ"},
    { id: 12, brand: "VAZ"},
  ]);
  let screen = window.outerWidth
  let loading = false
  return (
    <div>
      <Carousel 
        slidesToShow={
          
          (screen >= 3300)? "12":
          (screen >= 3030)? "11":
          (screen >= 2750)? "10":
          (screen >= 2480)? "9":
          (screen >= 2200)? "8":
          (screen >= 1920)? "7":
          (screen >= 1660)? "6":
          (screen >= 1383)?"5":
          (screen >= 1108)?"4":
          (screen >= 835)?"3":
          (screen >= 576)?"2":"1"}
        wrapAround="true"
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}  className="angel__Left angel">
            <img src={angel} alt="" />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} className="angel__Right angel">
            <img src={angel} alt="" />
          </button>
        )}
        >
        { cars.map((item)=>
            (!loading)?
            <div className="carusel__loading__item" key={item.id}>
              <PreloaderSmall />
            </div>
            :
            <div className="carusel__item" key={item.id}>
              <img src={img} alt="0" />
              <p>
                test {item.id}
              </p>
            </div>
        )}
          
            
          

        

      </Carousel>  
    </div>
    
  )
};
