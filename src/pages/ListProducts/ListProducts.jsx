import { useEffect, useState } from "react";
import Header from "../../UI/Header/Header"
import ListProductsPreviewCard from "../../components/ListProductsPreviewCard/ListProductsPreviewCard";
import { useParams } from "react-router";
import { request } from "../../Action/request";
import { useSelector, useDispatch } from 'react-redux';
import { Filter } from '../../components/Filter/Filter';
import style from "./ListProducts.module.sass";

import { reloadProducts, loaderSwitchProducts, reloadBrands, loaderSwitchBrands } from "../../redux/dataState";


export default function ListProducts(props){
    let dispatch = useDispatch();
    let { alias } = useParams();
    let cars = useSelector(state => state.dataState.value.products.data);
    
    useEffect(()=>{
      dispatch(loaderSwitchProducts(true));
      request('post', 'all-info-products', (response) => {
        if (response.status === 200) {
          dispatch(loaderSwitchProducts(false));
          dispatch(reloadProducts(response.data));
        }
      }, {alias: (alias != undefined)? alias: null});
      

    },[window.location.pathname]);
    
      
    
    

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

      function modelFileter(cars){
        let data = [];
        
        filters.model = filters.model.toLowerCase().trim();

        cars.forEach((car, index)=>{
          if(car.model.name.toLowerCase().indexOf(filters.model) != -1){

            data.push(car);
          }
        })

        return data;
        
      }

      function brandFilter(cars){
        let data = [];
        
        filters.brand = filters.brand.toLowerCase().trim();

        cars.forEach((car, index)=>{
          if(car.brand.name.toLowerCase().indexOf(filters.brand) != -1){

            data.push(car);
          }
        })

        return data;
      }

      function truePhotoFilter(cars){
        let data = [];
        
        
        cars.forEach((car, index)=>{
          if(car.main_img != null){
            data.push(car);
          }
        })
        

        return data;
      }
    
    
      function onFilterCars(){
        let data = cars;

        if(nullFilters() == false){

          if(filters.brand != '')
            data = brandFilter(data)

          if(filters.model != '') 
            data = modelFileter(data);

          if(filters.truePhoto)
            data = truePhotoFilter(data)

            

          setListFilterCars(data);

        }


      }

      useEffect(()=>{
        onFilterCars();
      }, [filters])

      function onFilterCheck(evt){
        let copy = Object.assign({}, filters);
        let idFilter = evt.target.id;
        switch (idFilter) {
          case "brand": 
              copy.brand = evt.target.value
              setFilters(copy);
              break;
          case "model": 
              copy.model = evt.target.value
              setFilters(copy);
              break;
          case "true_photo": 
              copy.truePhoto = !copy.truePhoto;        
              setFilters(copy);
              break;
        }
      }

  return (
    <div>

      <Header/>
        <form>
           <input 
              id="brand"
              autoFocus={true}
              type="text"  
              placeholder='Марка' 
              value={(filters.brand)} 
              onChange={(evt)=>{onFilterCheck(evt)}} 
            />
            <input 
              id="model"
              autoFocus={true}
              type="text"  
              placeholder='Модель'
              value={(filters.model)} 
              onChange={(evt)=>{onFilterCheck(evt)}} 
            />
            <input 
              id="true_photo"
              type="checkbox"              
              onChange={(evt)=>{onFilterCheck(evt)}} 
              checked={filters.truePhoto}
            />
            <label htmlFor="true_photo">С фото</label>

            <button type="button" onClick={onFilterCars}>Показать</button>
        </form>
        <h1 className={style.title}>Дром Авто - Продажа автомобилей</h1>
        <Filter />

        <ListProductsPreviewCard cars={(nullFilters())? cars :listFilterCars} />

    </div>
  )
};
