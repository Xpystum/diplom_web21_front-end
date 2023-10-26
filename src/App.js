import './App.css';
import './ResetStyle.css';
import { useEffect, useRef, useState } from 'react';

import { request } from './request';

// Компоненты
import Loader from './UI/Loader/Loader';

import PreloaderStartPage from './components/PreloaderStartPage/PreloaderStartPage';
import PreloaderSmall from './components/PreloaderSmall/PreloaderSmall';

import ListProductsPreviewCard from './components/ListProductsPreviewCard/ListProductsPreviewCard';
import Header from './UI/Header/Header';

import { useSelector, useDispatch } from 'react-redux';
import { reloadMenu, loaderSwitch } from './redux/dataState';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import ListProducts from './pages/ListProducts/ListProducts';



function App() {


  let loading = useSelector(state => state.dataState.value.app.loader);

    let dispatch = useDispatch();


    //let [menuItems, setMenuItems] = useState([]);


  request('get', 'items-menu', (response) => {
    dispatch(loaderSwitch(false));
    
    if (response.status === 200 && response.data.length > 0) {
      dispatch(reloadMenu(response.data))
    }

  });


 

  


    return (
        <div className="App">

          


            {
              (loading) ?
                <PreloaderStartPage />
              :
                <div>
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/category/:alias" element={<ListProducts/>}/>
                    
                  </Routes> 
                </div>
            }
            

            {/* <PreloaderSmall /> */}

        </div>
    );
}

export default App;
