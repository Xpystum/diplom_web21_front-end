import Header from "../../UI/Header/Header"
import style from './Catalog.module.sass';
import { Link } from "react-router-dom";
import { FilterIcon } from "../../components/Icons/FilterIcon";
import ListBrands from "../../UI/ListBrands/ListBrands";




export default function Catalog(){

    return (
    <div>
        <Header/>
        <main className={style.main}>
            <h2>Каталог автомобилей - технические характеристики автомобилей, цены, комплектации</h2>
            <section className={style.search}>
                <div className={style.search__brand}>
                    <ListBrands />
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