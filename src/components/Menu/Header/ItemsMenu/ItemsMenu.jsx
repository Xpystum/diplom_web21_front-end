import { Link } from 'react-router-dom';
import './ItemsMenu.sass';
// import SubItemsMenu from './SubItemsMenu/SubItemsMenu';
export default function ItemsMenu(props){
    let item = props.item;
    let firstItems = props.firstItems;
  return (
            (item.parrent_item_id == null)?
              <li className='main-menu__item' key={item.id}>
                <Link className='main-menu__link' to='#' >{item.item_name} 1</Link>
              </li> 
              :
              <ul>
              {firstItems.map((first_item)=>
                  (first_item.id === item.parrent_item_id)?
                  <li className='main-sub-menu__item' key={item.id}>
                    <Link className='main-sub-menu__link' to='#' >{item.item_name} 2</Link>
                  </li>
                  // ""
                  :
                  ""
                )}  
              </ul>
              
                // :
                // <li className='main-menu__item' key={item.id}>
                //   <span className='main-menu__link' to='#' >{item.item_name} 2</span>
                //     <ul className='main-sub-menu__ul'>
                //       {firstItems.map((first_item)=>
                //         (item.parrent_item_id === first_item.id)?
                //         // console.log("раз вход")
                //         <li className='main-sub-menu__item' key={item.id}>
                //           1
                //         </li>  
                //         :
                //         "" 
                //       ) }
                //     </ul> 
                // </li>
  )
};
