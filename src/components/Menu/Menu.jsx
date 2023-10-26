
import { useSelector } from 'react-redux';
import ItemsMenu from './ItemsMenu/ItemsMenu';
import styles from './Menu.module.sass';
import { useEffect } from 'react';


export default function Menu(props){

  let variation = 'defaultMenu';
  let menuItems = [];

  // if(props.nameMenu !== "undefined"){
  //   variation = props.nameMenu
  // }else{
  //   variation = props[0];
  // }

  variation = props.mainMenu
  console.log(variation);
  menuItems = useSelector(state => state.dataState.value.variation);

  

  return (
    <div className={variation}>
      <nav className={styles.menu_nav}>
        <ul className={styles.menu_ul}>
          
          {
            menuItems.map((item)=>
              
              <ItemsMenu key={item.id} item={item}/>
            )
          }

        </ul>
      </nav>
    </div>
   

  )
};
