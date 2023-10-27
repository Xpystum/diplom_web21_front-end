
import { useSelector } from 'react-redux';
import ItemsMenu from './ItemsMenu/ItemsMenu';
import styles from './Menu.module.sass';
import { useEffect } from 'react';
import SubMenu from './SubMenu/Submenu';


export default function Menu(props){

  let variation = 'defaultMenu';
  let menuItems = [];

  if(props.nameMenu !== "undefined"){
    variation = props.mainMenu
  }

  menuItems = useSelector(state => state.dataState.value[variation]);
  let subItems = (item_id, parrent_id = null)=>{
    for(let item of menuItems){
      if(parrent_id == null){
        <ItemsMenu variation={variation} key={item.id} item={item}/>
      }
      if(parrent_id != null){
        if(parrent_id == item.id){
          // console.log(1)
          <ItemsMenu variation={variation} key={item.id} item={item}/>
        }
        
      }
      
    }
  }

  return (
      <nav className={styles[variation]}>
        <ul className={styles.menu_ul}>
          {
            menuItems.map((item)=>
              // subItems(item.id, item.parrent_item_id)
              
                (item.parrent_item_id == null)?
                  <ItemsMenu variation={variation} key={item.id} item={item}/>
                
                :
                (item.parrent_item_id != null)?
                  (item.parrent_item_id == item.id)?
                    // console.log(1)
                    <ItemsMenu variation={variation} key={item.id} item={item}/>
                    :
                    ""
                :
                ""

                
              
            )
          }
        </ul>
      </nav>
  )
};
