
import { useSelector } from 'react-redux';
import ItemsMenu from './ItemsMenu/ItemsMenu';
import styles from './Menu.module.sass';


export default function Menu(props){


  let menuItems = useSelector(state => state.dataState.value.mainMenu);


  return (
    <nav className={styles.menu}>
      <ul className={styles.menu_ul}>
        
        {
          menuItems.map((item)=>
            
            <ItemsMenu key={item.id} item={item}/>
          )
        }

      </ul>
    </nav>

  )
};
