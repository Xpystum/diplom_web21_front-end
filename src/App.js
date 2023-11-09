import './App.css';
import './ResetStyle.css';

import { request } from './Action/request';

// Компоненты

import PreloaderStartPage from './components/PreloaderStartPage/PreloaderStartPage';

import { useSelector, useDispatch } from 'react-redux';
import { reloadMenu, loaderSwitch } from './redux/dataState';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import ListProducts from './pages/ListProducts/ListProducts';
import AdvancedSearch from './pages/AdvancedSearch/AdvancedSearch';
import Catalog from './pages/Catalog/Catalog';
import Card from './pages/Card/Card';
import Curtain from './components/Curtain/Curtain';
import Sign from './pages/Sign/Sign';
import CabinetClient from './pages/CabinetClient/CabinetClient';





function App() {


    let loading = useSelector(state => state.dataState.value.app.loader);

    let dispatch = useDispatch();

    request('post', 'items-menu', (response) => {
        dispatch(loaderSwitch(false));

        if (response.status == 200 && response.data.length > 0) {
            dispatch(reloadMenu(response.data))
        }

    }, { name_menu: 'main_menu' });


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
                            <Route path="/card" element={<Card />} />
                            <Route path="/sign" element={<Sign/>}/>
                            <Route path="/my" element={<CabinetClient/>}/>
                        </Routes>
                    </div>
            }

        </div>
    );
}

export default App;
