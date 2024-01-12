import './App.css';
import './ResetStyle.css';

import { request } from './Action/request';

// Компоненты

import PreloaderStartPage from './components/PreloaderStartPage/PreloaderStartPage';

import { useSelector, useDispatch } from 'react-redux';
import { reloadMenu, loaderSwitch, addFavorite, addReview } from './redux/dataState';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import ListProducts from './pages/ListProducts/ListProducts';
import AdvancedSearch from './pages/AdvancedSearch/AdvancedSearch';
import Catalog from './pages/Catalog/Catalog';
import Card from './pages/Card/Card';
import Curtain from './components/Curtain/Curtain';
import Sign from './pages/Sign/Sign';
import CabinetClient from './pages/CabinetClient/CabinetClient';
import requestToken from "./Action/requestToken";


// стили
import 'bootstrap/dist/css/bootstrap.min.css';
import Cars from './pages/CabinetClient/Cars';


// значки
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import Reviews from './pages/Reviews/Reviews';
import ReviewCard from './pages/ReviewCard/ReviewCard';
import AddReview from './pages/AddReview/AddReview';

library.add(fas)




function App() {


    let loading = useSelector(state => state.dataState.value.app.loader);
    let dispatch = useDispatch();

    useEffect(()=>{

        request('post', 'items-menu', (response) => {
                dispatch(loaderSwitch(false));

                if (response.status == 200 && response.data.length > 0) {
                    dispatch(reloadMenu(response.data))
                }
        }, { name_menu: 'main_menu' });

        request('post', 'favorites-user', (response) => {
            //localStorage.setItem('favorites', JSON.stringify([{"product_id":5,"user_id":3},{"product_id":2,"user_id":3}]));
            
            let favoritesLocalstorage = []
            if(localStorage.getItem('favorites')){
                favoritesLocalstorage = JSON.parse(localStorage.getItem('favorites'))
            }

            // backend
            let favoritesBackend = response.data;

            //localStorage.setItem('favorites', JSON.stringify(response.data));
            // if (response.status == 200 && response.data.length > 0) {
            //     dispatch(reloadMenu(response.data))
            // }

            let favorites = favoritesLocalstorage.concat(favoritesBackend);

            let data = [];
            for(let favorite of favorites){
                data.push(JSON.stringify(favorite));
            }
            
            const favoritesSet = new Set();
            data.forEach((el)=>{
                favoritesSet.add(el);
            })
            
            favorites = [];

            for(let favorite of favoritesSet){
                favorites.push(JSON.parse(favorite));
            }

            dispatch(addFavorite(favorites));
    

        }, { token: localStorage.getItem('my_token') });

        
        requestToken(dispatch);
        request('post', 'add-review', 
        (response) => {
            let addReviewsLocalstorage = []
            if(localStorage.getItem('add_review')){
                addReviewsLocalstorage = JSON.parse(localStorage.getItem('add_review'))
            }
            let addReviewBackend = response.data

            let addReviews = addReviewsLocalstorage.concat(addReviewBackend)
            let data = []
            for(let addReview of addReviews){
                data.push(JSON.stringify(addReview))
            }
            const addReviewsSet = new Set()
            data.forEach((el)=>{
                addReviewsSet.add(el);
            })
            addReviews = []
            for(let addReview of addReviewsSet){
                addReviews.push(JSON.parse(addReview));
            }
            dispatch(addReview(addReview))

        }, [  ])

    },[])

    



    


    return (
        <div className="App">
            {
                (loading) ?
                    <PreloaderStartPage />
                    :   
                    <div>
                        <Curtain />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/category/:alias" element={<ListProducts />} />
                            <Route path="/category" element={<Catalog />} />
                            <Route path="/catalog/advanced-search/" element={<AdvancedSearch />} />
                            <Route path="/category/:alias/card/:id" element={<Card />} />
                            <Route path="/sign" element={<Sign/>}/>

                            <Route path="/my" element={<CabinetClient/>}/>
                            <Route path="/my/ads" element={<Cars/>}/>
                            <Route path="/category/reviews" element={<Reviews/>}/>
                            <Route path="/category/reviews/add-review" element={<AddReview/>}/>
                            <Route path="/category/reviews/:id" element={<ReviewCard/>}/>
                        </Routes>
                    </div>
            }

        </div>
    );
}

export default App;
