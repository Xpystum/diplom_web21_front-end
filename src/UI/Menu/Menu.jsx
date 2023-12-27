import { useSelector } from 'react-redux';
import styles from './Menu.module.sass';

import ItemsMenu from './ItemsMenu/ItemsMenu';

import icon from './angel.svg'


export default function Menu(props){

  let variation = 'defaultMenu';
  let menuItems = [];
  if(props.nameMenu !== "undefined"){
    variation = props.mainMenu
  }

  menuItems = useSelector(state => state.dataState.value.mainMenu);
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
              <ItemsMenu variationNav={'menu_link'} variationLi={variation} key={item.id} item={item} />
              :
              (item.parrent_item_id == null)?

              <li className={styles.submenu} key={item.id}>
              <span>{item.item_name} <img src={icon} alt=""/></span>
                <ul className={styles.submenu__ul}>
                  {
                    menuItems.map((item_inner)=>
                    (item.id == item_inner.parrent_item_id)?
                        <ItemsMenu variationLi={'submenu__item'} variationNav={'submenu__link'} item={item_inner} key={item_inner.id}/>
                        :
                        "" 
                    )
                  }
                </ul>
              </li>
             
              :
              ""
            )
          }
        </ul>
      </nav>
  )
};
