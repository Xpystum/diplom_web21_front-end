import logo from './logo.svg';
import './App.css';
import Filter from './components/Filter/Filter';
import { useEffect, useRef, useState } from 'react';
import './logo.css';
import axios from 'axios'
import { request } from './request';
import Menu from './components/Menu/Menu';
import Loader from './components/Loader/Loader';
import { Routes, Route, Router, Link } from 'react-router-dom';
import { func } from 'prop-types';



function App() {

  let [loading, setLoading] = useState(true);

  let [menuItems, setMenuItems] = useState([]);

  useEffect(()=>{
    request('get', 'items-menu', (response)=>{

      setLoading(false);
      
      if(response.status == 200 && response.data.length > 0){
        setMenuItems(response.data);
      }
      
    });
  }, []);
  
  
  
  
  let [cars, setCars] = useState([
    {id: 1, brand: "VAZ", model: "2110", price: 100000, old_price: 120000, info: {}},
    {id: 2, brand: "VAZ", model: "2115", price: 120000, old_price: null, info: {}},
    {id: 3, brand: "VAZ", model: "2114", price: 130000, old_price: null, info: {}}
  ]);
  let [filterCars, setFilterCars] = useState(cars);

  let [filterPrice, setFilterPrice] = useState({maxPrice: "", minPrice: ""});


  let model = useRef();

  function onFilterCars(evt){
    evt.preventDefault();

    if(model.current.value.length != 0){
      setFilterCars(cars.filter((car) => car.model == model.current.value));
    }
    else{
      setFilterCars(cars);
    }

  }

  function editPrice(evt, property){
    filterPrice[property] = evt.target.value;
    setFilterPrice(Object.assign({}, filterPrice));

    // механизм фильтрации
  }


  return (
    
        <div className="App">
                   
          {
            (loading)?
              <Loader/>
            :
              <div><Routes>
            <Route
              path='/'
              element={
              <div className='menu_wrap'>
                <div className='logo_wrap'>
                  <Link>
                    <img src={logo} className="app_logo" alt="logo"></img>
                  </Link>                  
                  <Link className="location"to='/'>Нижний Новгород</Link>
                </div>  
                  <Menu menuItems = {menuItems}/>
                
              </div>}
            >              
            </Route>
          </Routes> 
                <div className='menu_wrap'>
                </div>
                  <Filter/> 
                  <form>
                      <input type="text" ref={model} placeholder='Модель'/>
                      <input type="text" value={filterPrice.minPrice} placeholder='Мин цена' onChange={(evt)=>{editPrice(evt, "minPrice")}}/>
                      <input type="text" value={filterPrice.maxPrice} placeholder='Макс цена'onChange={(evt)=>{editPrice(evt, "maxPrice")}}/>
                      <button onClick={onFilterCars}>Показать</button>
                  </form>
                  {
                    filterCars.map((car)=>
                      <div key={car.id}>
                        <span>{car.brand} </span>
                        <span>{car.model} </span>
                        <span>{car.price} руб.</span>
                      </div>
                    )
                  }
              </div>
          }
          
            
        </div>
      
  );
}

export default App;
