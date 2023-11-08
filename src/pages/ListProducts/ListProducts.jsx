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
      
    
      let [filterPrice, setFilterPrice] = useState({ maxPrice: "", minPrice: "" });

        let selectFilter = {}//объявление объекта
        const keys = []
        const values = []
        let [filters, setFilters] = useState(
        // {mark: '', truePhoto: false}
        {selectFilter}
        );
      

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
              
              if(car.img_src != "null"){
                data.push(car);
                fillingSelectFilter()
                keys.push('1'+1)
                values.push(1)
              }
            })
          }


          if(filters.mark){
            filters.mark = filters.mark.toLowerCase().trim();

            cars.forEach((car, index)=>{
              if(car.mark.toLowerCase().indexOf(filters.mark) != -1){


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


//создать одну функцию выводящюю в оъект набор фильтров сохранить переменую  в объект
        
        
      function onModel(evt){
        let copy = Object.assign({}, filters);
        copy.mark = evt.target.value
        setFilters(copy);
        console.log(copy.mark)
                

      }

      function onPhoto(evt){
        let copy = Object.assign({}, filters);
        copy.truePhoto = !copy.truePhoto;        
        console.log(copy.truePhoto)
        setFilters(copy);
        values.push(copy.truePhoto)
      }

        // keys.push('1')
        // values.push(1)  
      
      function fillingSelectFilter(){for (let i = 0; i <= keys.length - 1; i++) {//преобразование двух массивов в объект
        
        let key = keys[i];
        let value = values[i];
        
        selectFilter[key] = value;
      }
      console.log(selectFilter);}

      console.log(fillingSelectFilter())





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
              value={(filters.mark)} 
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
