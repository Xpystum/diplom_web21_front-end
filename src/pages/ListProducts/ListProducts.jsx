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
      // category-products
      request('post', 'all-items', (response) => {
        if (response.status === 200) {
          dispatch(loaderSwitchProducts(false));
          dispatch(reloadProducts(response.data));
        }
      }, {alias: (alias != undefined)? alias: null});


    },[window.location.pathname]);

    
    let cars = useSelector(state => state.dataState.value.products.data);
      let [filterPrice, setFilterPrice] = useState({ maxPrice: "", minPrice: "" });

      let [filters, setFilters] = useState({brand: '', model: '', truePhoto: false});

      let [listFilterCars, setListFilterCars] = useState(cars);


      function nullFilters(){
        for(let key in filters){
          if(filters[key]){
            return false;
          }
          if(typeof(filters[key]) != 'boolean' && filters[key].trim() != ''){
            return false;
          }
        }
        return true;
      }
    
    
      function onFilterCars(){
        let data = [];


        if(nullFilters() == false){

          if(filters.truePhoto){
            cars.forEach((car, index)=>{
              if(car.img_src != null){
                data.push(car);
              }
            })
          }
          if(filters.model){
            filters.model = filters.model.toLowerCase().trim();

            cars.forEach((car, index)=>{
              if(car.model.name.toLowerCase().indexOf(filters.model) != -1){

                data.push(car);
              }
            })
          }

          if(filters.brand){
            filters.brand = filters.brand.toLowerCase().trim();

            cars.forEach((car, index)=>{
              if(car.brand.name.toLowerCase().indexOf(filters.brand) != -1){

                data.push(car);
              }
            })
          }

          setListFilterCars(data);

        }


      }

      useEffect(()=>{
        onFilterCars();
      }, [filters])



      function onBrand(evt){
        let copy = Object.assign({}, filters);
        copy.brand = evt.target.value
        setFilters(copy);
      }
      function onModel(evt){
        let copy = Object.assign({}, filters);
        copy.model = evt.target.value
        setFilters(copy);
      }
      function onPhoto(evt){
        let copy = Object.assign({}, filters);
        copy.truePhoto = !copy.truePhoto;
        setFilters(copy);
      }

  return (
    <div>

      <Header/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Filter/> */}

        <form>
            <input 
              autoFocus={true}
              type="text"  
              placeholder='Марка' 
              value={(filters.brand)} 
              onChange={(evt)=>{onBrand(evt)}} 
            />
            <input 
              autoFocus={true}
              type="text"  
              placeholder='Модель'
              value={(filters.model)} 
              onChange={(evt)=>{onModel(evt)}} 
            />
            <input 
              type="checkbox"
              id="true_photo"
              onChange={(evt)=>{onPhoto(evt)}} 
              checked={filters.truePhoto}
            />
            <label htmlFor="true_photo">С фото</label>



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


        <ListProductsPreviewCard cars={(nullFilters())? cars :listFilterCars} />
        <RelevanceProductWidget />

    </div>
  )
};
