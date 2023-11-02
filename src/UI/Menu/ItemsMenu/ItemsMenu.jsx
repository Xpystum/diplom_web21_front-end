import { NavLink, useParams } from 'react-router-dom';

import styles from './ItemsMenu.module.sass';


export default function ItemsMenu(props){

  let item = props.item;
  let variation = props.variation;
  variation += '_menu_item'

  return (
    <li className={styles[variation]}>
      <NavLink  style={({ isActive, isPending, isTransitioning }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          opacity: isActive ? "1" : "",
        }; }}
        
      className={styles.menu_link}  to={item.link} end>{item.item_name}</NavLink>
    </li>
  )
};

