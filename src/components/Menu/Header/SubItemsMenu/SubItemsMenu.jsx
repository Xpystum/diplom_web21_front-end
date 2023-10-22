import { Link } from 'react-router-dom';
import './SubItemsMenu.sass';
import { URL_IMG } from '../../../../config';

export default function SubItemsMenu(props){
    let items = props.items;
    let url_images = URL_IMG
  return (
    items.map((item)=>
    (item.parrent_item_id != null)?
      <li className='main-sub-menu__item' key={item.id}>
        {/* {console.log(images)} */}
        <Link className='main-sub-menu__link' to='#' >{item.item_name} {(item.image != null)?<img className='main-sub-menu__img' src={url_images + item.image} alt="flag" />:""}</Link>
      </li>
      :
      ""
    )
    
  )
};
