import './App.css';
import './ResetStyle.css';
import { request } from './Action/request';

// Компоненты

import PreloaderStartPage from './components/PreloaderStartPage/PreloaderStartPage';

import { useSelector, useDispatch } from 'react-redux';
import { reloadMenu, loaderSwitch, addFavorite, addReview, reloadReviews, loaderUser, reloadUser } from './redux/dataState';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import ListProducts from './pages/ListProducts/ListProducts';
import AdvancedSearch from './pages/AdvancedSearch/AdvancedSearch';
import Catalog from './pages/Catalog/Catalog';
import Card from './pages/Card/Card';
import Curtain from './components/Curtain/Curtain';
import Sign from './pages/Sign/Sign';
import requestToken from "./Action/requestToken";
import Ads from './pages/CabinetClient/pages/Ads/Ads';

// стили
import 'bootstrap/dist/css/bootstrap.min.css';


// значки
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import Reviews from './pages/Reviews/Reviews';
import ReviewCard from './pages/ReviewCard/ReviewCard';

import CabinetClient from './pages/CabinetClient/pages/CabinetClient';
import AddReview from './pages/AddReview/AddReview';
import CreateAnAd from './pages/CabinetClient/pages/CreateAnAd/CreateAnAd';

import PrivateMessages from './pages/PrivateMessages/PrivateMessages';


library.add(fas)




function App(props) {

    let loading = useSelector(state => state.dataState.value.app.loader);
    let dispatch = useDispatch();
    let reviews = useSelector(state => state.dataState.value.reviews.data)

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
        
        //Дениса закоментил
        // request('post', 'all-info-reviews', (response) => {
        //     if (response.status === 200) {
        //       dispatch(reloadReviews(response.data));            
        //     }
        //   }, []);

        if(localStorage.getItem("my_token")){
            request('post', 'user', (response) => {

                if (response.status === 200) {
                    dispatch(loaderUser(false));
                    dispatch(reloadUser(response.data));
                }
            }, {'my_token': localStorage.getItem("my_token")});    
        }
        
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
                            <Route path="/my/ads" element={<Ads />}/>
                            <Route path="/my/ads/new" element={<CreateAnAd />}/>
                            <Route path="/category/reviews" element={<Reviews reviews={props.reviews}/>}/>
                            <Route path="/category/reviews/add-review" element={<AddReview reviews={props.reviews}/>}/>
                            <Route path="/category/reviews/:id" element={<ReviewCard reviews={props.reviews}/>}/>

                            <Route path="/private/messages" element={<PrivateMessages/>}/>

                        </Routes>
                    </div>
            }

        </div>
    );
}

export default App;
