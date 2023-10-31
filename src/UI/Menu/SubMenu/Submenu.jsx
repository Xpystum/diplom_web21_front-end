import { URL_IMG } from '../../../config';
import styles from './Submenu.module.sass';
import { NavLink } from 'react-router-dom';

export default function Submenu(props){
    let itemGlob = props.item
    let menuItems = props.menuItems
    let urlImg = URL_IMG
    return(
        menuItems.map((item)=>
        (itemGlob.id == item.parrent_item_id)?
            <li className={styles.submenu__item} key={item.id}>
                <NavLink className={styles.submenu__link} to={item.link}>{item.item_name}{(item.img != null)?<img src={urlImg + item.img}/>:""}</NavLink>
            </li>
            :
            ""
        )
    )
}