import { Link } from 'react-router-dom';
import { URL_IMG } from '../../../config';
import style from './BrandCard.module.sass';

export default function BrandCard(props){

    let brand = props.brand
    return(
        <Link to="#" className={style.item}>
            <div className={style.item__img}>
               {(brand.img_light != null)?<img src={URL_IMG + brand.img_light} alt="logo" />:""} 
            </div>
            <div className={(brand.popular_passenger)? style.item__bold : style.item__text}>
               {brand.name}
            </div>
        </Link>
    )
}