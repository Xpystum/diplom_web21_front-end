import { Link } from 'react-router-dom';

import styles from './ItemsMenu.module.sass';

export default function ItemsMenu(props){

    let item = props.item;
    let variation = props.variation;
    variation += '_menu_item'

  return (
    <li className={styles[variation]}>
      <Link className={styles.menu_link} to='#' >{item.item_name}</Link>
    </li>
  )
};

