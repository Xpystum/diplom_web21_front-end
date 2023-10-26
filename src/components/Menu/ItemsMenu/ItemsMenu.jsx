import { Link } from 'react-router-dom';

import styles from './ItemsMenu.module.sass';

export default function ItemsMenu(props){
    let item = props.item;
  return (
    <li className={styles.menu_item}>
      <Link className={styles.menu_link} to='#' >{item.item_name}</Link>
    </li>
  )
};

