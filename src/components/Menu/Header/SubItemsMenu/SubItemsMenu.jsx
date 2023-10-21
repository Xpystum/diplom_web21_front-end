import { Link } from 'react-router-dom';
import './SubItemsMenu.sass';

export default function ItemsMenu(props){
    let item = props.item;
  return (
    <li className='main-sub-menu__item'>
      <Link className='main-sub-menu__link' to='#' >{item.item_name}</Link>
    </li>
  )
};
