// import "./ReviewsBrandsList.css"
import Carousel from "nuka-carousel"
import Header from "../../UI/Header/Header"
import style from "./ReviewsBrandsList.module.sass"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { request } from "../../Action/request"
import { loaderSwitchBrands, loaderSwitchProducts, reloadBrands } from "../../redux/dataState"
import { useEffect, useState } from "react"
import { ChevronUp } from "../Icons/ChevronUp"
import { ChevronDown } from "../Icons/ChevronDown"
import PreloaderSmall from "../PreloaderSmall/PreloaderSmall"
//перевести на  SASS
// отображение непопулярных моделей

export default function ReviewsBrandsList(props){
    let dispatch = useDispatch()
    let { alias } = useParams()

    useEffect(()=>{
        dispatch(loaderSwitchProducts(true))
        request('post', 'brands', (response) => {
        if (response.status === 200) {
            dispatch(loaderSwitchBrands(false))
            dispatch(reloadBrands(response.data))
        }
      }, {alias: (alias != undefined)? alias: null})
    }, [])

    let brands = useSelector(state => state.dataState.value.brands)
    
    let popularBrandsList = []
    let brandsListAll = []
    let brand;

    for(let i = 0; i < brands.data.length; i++){
        brand = Object.assign(brands.data[i])
        brandsListAll.push(brand.name)
        if(brand.popular_passenger == true){
        popularBrandsList.push(brand.name)
        }
    }

    let [brandsList, setBrandsList] = useState({})

    function onFilterCheck(evt){
        let idFilter = evt.target.id;
        setBrandsList(popularBrandsList);
        if(brandsList.length == brands.data.length){
            popularBrandsList = []
            for(let i = 0; i < brands.data.length; i++){
                brand = Object.assign(brands.data[i])
                if(brand.popular_passenger == true){
                    popularBrandsList.push(brand.name)
                }
            }
            setBrandsList(popularBrandsList);
            
        }
        if(brandsList.length != brands.data.length){
            popularBrandsList = []
            for(let i = 0; i < brands.data.length; i++){
                brand = Object.assign(brands.data[i])
                popularBrandsList.push(brand.name)
            }
            setBrandsList(popularBrandsList);
            
        }
    }
      
    return(
        <div>
            {
                (popularBrandsList.length ==0)?
                    <PreloaderSmall/>
                :
                <div className={style.ReviewBrandWrap}>
                <h2>Отзывы об автомобилях</h2>
                {
                (brandsList.length != brands.data.length)?
                <div className={style.ReviewFilterBrand}>
                    {
                    popularBrandsList.map(popularBrandsList => 
                        <div>
                            <Link 
                                to={`/category/reviews/`} 
                                className={style.BrandLink}
                            >
                                {popularBrandsList}
                            </Link>
                        </div>)
                        }
                        <span 
                            className={style.BrandExpand} 
                            onClick={(evt)=>{onFilterCheck(evt)}}
                        >
                            Все модели <ChevronDown className={style.Chevron}/>
                        </span>
                </div>
                :
                <div className={style.ReviewFilterBrand}>
                {
                    brandsListAll.map(brandsListAll => 
                    <div>
                        <Link                                     
                            to={`/category/reviews/`} 
                            className={style.BrandLink}
                            onChange={(evt)=>{onFilterCheck(evt)}} 
                        >
                            {brandsListAll}
                        </Link>
                    </div>)
                        }
                        <span 
                            className={style.BrandExpand} 
                            onClick={(evt)=>{onFilterCheck(evt)}}
                        >
                            Свернуть < ChevronUp className={style.Chevron}/>
                        </span>
                    </div>
                }
            </div>
        }</div>
    )
} 