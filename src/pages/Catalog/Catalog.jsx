import Header from "../../UI/Header/Header"
import style from './Catalog.module.sass';
import { Link } from "react-router-dom";
import { FilterIcon } from "../../components/Icons/FilterIcon";
import ListBrands from "../../UI/ListBrands/ListBrands";
import { request } from "../../Action/request";
import { useDispatch, useSelector } from "react-redux";
import { loaderSwitchBrands, reloadBrands } from "../../redux/dataState";




export default function Catalog(){
    let dispatch = useDispatch();
    // let brands = useSelector(state => state.dataState.value.brands);
    // if(brands.loader){
    //     request('post', 'brands', (response) => {
    //         if (response.status === 200) {
    //         dispatch(loaderSwitchBrands(false));
    //         dispatch(reloadBrands(response.data));
    //         }
    //     }, {}); 
    // }

    return (
    <div>
        <Header/>
        <main className={style.main}>
            <h2>Каталог автомобилей - технические характеристики автомобилей, цены, комплектации</h2>
            <section className={style.search}>
                <div className={style.search__brand}>
                    {/* <ListBrands brands={brands}/> */}
                </div>
                <div className={style.search__button}>
                    <Link to="/catalog/advanced-search/">
                        <button className={style.AdvancedSearch}>
                            <div className="FilterIcon">
                            <FilterIcon/>
                            <span>Расширенный поиск </span>
                            </div>
                        </button>
                    </Link>
                </div>      
            </section> 
        </main>
        
    </div>
    )
  };