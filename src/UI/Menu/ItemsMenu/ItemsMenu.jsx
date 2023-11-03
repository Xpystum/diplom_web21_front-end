import { NavLink, useParams } from 'react-router-dom';
import { URL_IMG } from '../../../config';
import styles from './ItemsMenu.module.sass';


export default function ItemsMenu(props){

  let item = props.item;
  let variationLi = props.variationLi;
  let variationNav = props.variationNav;
  let urlImg = URL_IMG;


  return (
    <li className={styles[variationLi]}>
      <NavLink  style={({ isActive, isPending, isTransitioning }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          opacity: isActive ? "1" : "",
        }; }}
        
      className={styles[variationNav]}  to={item.link} end>{item.item_name}{(item.img != null)?<img src={urlImg + item.img}/>:""}</NavLink>
    </li>
  )
};

