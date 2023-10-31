import { useSelector } from 'react-redux';
import styles from './Menu.module.sass';

import ItemsMenu from './ItemsMenu/ItemsMenu';
import { useEffect } from 'react';

import icon from './angel.svg'
import SubMenu from './SubMenu/SubMenu1';


export default function Menu(props){

  let variation = 'defaultMenu';
  let menuItems = [];
  if(props.nameMenu !== "undefined"){
    variation = props.mainMenu
  }

  menuItems = useSelector(state => state.dataState.value[variation]);
  let parrent = []

  for(let item of menuItems){
    
    if(item.parrent_item_id != null){
      parrent.push(item.parrent_item_id)
      
    }
  }
  let parrentFilter = parrent.filter(function(item, pos) {
    return parrent.indexOf(item) == pos;
  })

  return (
      <nav className={styles[variation]}>
        <ul className={styles.menu_ul}>
          {
            menuItems.map((item)=>
              (item.parrent_item_id == null && !parrentFilter.includes(item.id))?
              <ItemsMenu variation={variation} key={item.id} item={item} />
              :
              (item.parrent_item_id == null)?

              <li className={styles.submenu} key={item.id}>
                <span>{item.item_name} <img src={icon} alt="" /></span>
                  <ul className={styles.submenu__ul}>
                    <SubMenu variation={variation} key={item.id} item={item} menuItems={menuItems}/>
                  </ul>
              </li>
              :""
              
            )
          }
        </ul>
      </nav>
  )
};
