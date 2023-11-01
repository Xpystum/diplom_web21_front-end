import './App.css';
import './ResetStyle.css';
import { useEffect, useRef, useState } from 'react';

import axios from 'axios'
import { request } from './Action/request';

// Компоненты
import Loader from './UI/Loader/Loader';

import PreloaderStartPage from './components/PreloaderStartPage/PreloaderStartPage';
import PreloaderSmall from './components/PreloaderSmall/PreloaderSmall';

import ListProductsPreviewCard from './components/ListProductsPreviewCard/ListProductsPreviewCard';
import Header from './UI/Header/Header';
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { reloadMenu, loaderSwitch, reloadProducts } from './redux/dataState';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import ListProducts from './pages/ListProducts/ListProducts';
import AdvancedSearch from './pages/AdvancedSearch/AdvancedSearch';
import Catalog from './pages/Catalog/Catalog';




function App() {


  let loading = useSelector(state => state.dataState.value.app.loader);

  let dispatch = useDispatch();

  request('post', 'items-menu', (response) => {
    dispatch(loaderSwitch(false));
    
    if (response.status == 200 && response.data.length > 0) {
      dispatch(reloadMenu(response.data))
    }

  },{name_menu: 'main_menu'});


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
                  {/* <Route path="/category" element={<ListProducts/>}/>комент от Дениса: возможно не нужно???? */}
                  <Route path="/catalog/advanced-search/" element={<AdvancedSearch/>}/>
                  <Route path="/category" element={<Catalog/>}/>{/**в меню прописан URL "/category" исправить на /catalog */}
                </Routes> 
              </div>
          }
          

         

      </div>
  );
}

export default App;
