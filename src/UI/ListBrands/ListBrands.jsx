import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./ListBrands.sass"
import { request } from "../../Action/request";
import { useDispatch, useSelector } from "react-redux";
import { loaderSwitchBrands, reloadBrands } from "../../redux/dataState";
import { useEffect, useState } from "react";
import BrandColumn from "../../widgets/BrandColumn/BrandColumn";
import { useParams } from "react-router-dom";
import PreloaderSmall from "../../components/PreloaderSmall/PreloaderSmall";


export default function ListBrands(props){

    let dispatch = useDispatch();
    let { alias } = useParams();
    useEffect(()=>{
      dispatch(loaderSwitchBrands(true));
      request('post', 'brands', (response) => {
        if (response.status === 200) {
          dispatch(loaderSwitchBrands(false));
          dispatch(reloadBrands(response.data));
        }
      }, {alias: (alias != undefined)? alias: null});
    },[window.location.pathname]);

    let brands = useSelector(state => state.dataState.value.brands);
    return(
        <div>
            <Tabs className="container"> 
                <TabList className="tabs__menu"> 
                    <Tab className="tabs__menu__item">Легковые авто</Tab> 
                    <Tab className="tabs__menu__item">Грузовики</Tab> 
                </TabList>
                <TabPanel className="tabs__content">
                        <BrandColumn brands={brands} itemColumn={42} noPopular={null}/>
                </TabPanel> 
                <TabPanel className="tabs__content"> 
                    В разработке
                    <BrandColumn brands={brands} itemColumn={1}/>
                </TabPanel > 
            </Tabs>
        </div>
    );
}