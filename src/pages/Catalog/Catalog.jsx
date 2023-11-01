import Header from "../../UI/Header/Header"
import style from './Catalog.module.sass';
import { Link } from "react-router-dom";
import { FilterIcon } from "../../components/Icons/FilterIcon";




export default function Catalog(){

    return (
    <div>
        <Header/>
        <div className="ButtonWrap">
            <Link to="/catalog/advanced-search/">
                <button className={style.AdvancedSearch}>
                    <div className="FilterIcon">
                       <FilterIcon/>
                       <span>Расширенный поиск </span>
                    </div>
                </button>
            </Link>
        </div>

         
    </div>
    )
  };