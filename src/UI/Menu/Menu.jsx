
import { useSelector } from 'react-redux';
import ItemsMenu from './ItemsMenu/ItemsMenu';
import styles from './Menu.module.sass';
import { useEffect } from 'react';


export default function Menu(props){

  let variation = 'defaultMenu';
  let menuItems = [];

  if(props.nameMenu !== "undefined"){
    variation = props.mainMenu
  }

  menuItems = useSelector(state => state.dataState.value[variation]);


  return (
      <nav className={styles[variation]}>
        <ul className={styles.menu_ul}>
          
          {
            menuItems.map((item)=>
              
              <ItemsMenu variation={variation} key={item.id} item={item}/>
            )
          }

        </ul>
      </nav>
  )
};
