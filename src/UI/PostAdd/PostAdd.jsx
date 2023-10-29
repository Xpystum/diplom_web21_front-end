import { Link } from "react-router-dom";
import style from './PostAdd.module.sass';
import { URL_IMG } from "../../config";

export default function PostAdd(props){
    let urlImg = URL_IMG
    return(
        <div className={style.postadd}>
            <Link className={style.postadd__link}><img src={urlImg+"header/pluse.svg"} alt="pluse" /> Подать объявление</Link>
        </div>
        
    )
}