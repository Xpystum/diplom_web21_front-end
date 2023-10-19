import { Router, Routes, Route, NavLink, Link } from 'react-router-dom';

export default function ItemsMenu(props){
    let item = props.item;
  return (
    <li>
      <Link className='main-manu__item' to='#' >{item.item_name}</Link>
    </li>
  )
};
