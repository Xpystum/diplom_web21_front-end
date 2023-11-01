import Header from "../../UI/Header/Header"
import { Styles } from "@fortawesome/fontawesome-svg-core"
import style from './Catalog.module.sass';
import { Link } from "react-router-dom";


export default function Catalog(){

    return (
    <div>
        <Header/>
        <Link to="/catalog/advanced-search/">
            <button className={style.AdvancedSearch}></button>
        </Link>
    </div>
    )
  };