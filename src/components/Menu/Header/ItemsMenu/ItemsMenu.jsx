import { Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import './ItemsMenu.sass';

export default function ItemsMenu(props){
    let item = props.item;
  return (
    
    <li className='main-menu__item'>
      <Link className='main-menu__link' to='#' >{item.item_name}</Link>
    </li>
  )
};
