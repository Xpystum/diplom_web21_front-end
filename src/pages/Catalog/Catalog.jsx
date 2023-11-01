import Header from "../../UI/Header/Header"

import style from './Catalog.module.sass';
import { Link } from "react-router-dom";


export default function Catalog(){

    return (
    <div>
        <Header/>
        <div className="ButtonWrap">
            <Link to="/catalog/advanced-search/">
                <button className={style.AdvancedSearch}>
                
                
                

                    Расширенный поиск
                </button>
            </Link>
        </div>

         
    </div>
    )
  };