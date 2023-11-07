import { useEffect, useRef, useState } from "react";
import Header from "../../UI/Header/Header"
import ListProductsPreviewCard from "../../components/ListProductsPreviewCard/ListProductsPreviewCard";
import { useParams } from "react-router";
import { request } from "../../Action/request";
    import { useSelector, useDispatch } from 'react-redux';

import { reloadProducts, loaderSwitchProducts } from "../../redux/dataState";
import RelevanceProductWidget from "../../widgets/RelevanceProductWidget/RelevanceProductWidget";


export default function ListProducts(props){
    let dispatch = useDispatch();
    let { alias } = useParams();

    useEffect(()=>{
      dispatch(loaderSwitchProducts(true));
      request('post', 'category-products', (response) => {
        if (response.status === 200) {
          dispatch(loaderSwitchProducts(false));
          dispatch(reloadProducts(response.data));
        }
      }, {alias: (alias != undefined)? alias: null});
    },[window.location.pathname]);

    let cars = useSelector(state => state.dataState.value.products.data);


    // let [cars, setCars] = useState([
    //     { id: 1, brand: "VAZ", model: "2110", price: 100000, old_price: 120000, info: {} },
    //     { id: 2, brand: "VAZ", model: "2115", price: 120000, old_price: null, info: {} },
    //     { id: 3, brand: "VAZ", model: "2114", price: 130000, old_price: null, info: {} }
    //   ]);
      //let [filterCars, setFilterCars] = useState(cars);

      let filterCars = cars;
      
    
      let [filterPrice, setFilterPrice] = useState({ maxPrice: "", minPrice: "" });

      let [filters, setFilters] = useState({mark: null});

      let [listFilterCars, setListFilterCars] = useState(cars);
    
    
      function onFilterCars(){
        let data = [];
        if(filters.mark){
          filterCars.forEach((car, index)=>{
            if(car.mark == filters.mark){
              data.push(car);
            }
          })
        }
        setListFilterCars(data);
      }

      function onModel(evt){
        setFilters({mark: evt.target.value});
      }


  return (
    <div>

      <Header/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Filter/> */}

        <form>
            <input type="text"  placeholder='Марка' value={(filters.mark)} onChange={(evt)=>{onModel(evt)}}/>
            {/* <input type="text" value={filterPrice.minPrice} placeholder='Мин цена' onChange={(evt) => { editPrice(evt, "minPrice") }} />
            <input type="text" value={filterPrice.maxPrice} placeholder='Макс цена' onChange={(evt) => { editPrice(evt, "maxPrice") }} /> */}
            <button type="button" onClick={onFilterCars}>Показать</button>
        </form>
        {/* {
            filterCars.map((car) =>
                <div key={car.id}>
                    <span>{car.brand} </span>
                    <span>{car.model} </span>
                    <span>{car.price} руб.</span>
                </div>
            )
        } */}


        <ListProductsPreviewCard cars={listFilterCars} />
        <RelevanceProductWidget />

    </div>
  )
};
