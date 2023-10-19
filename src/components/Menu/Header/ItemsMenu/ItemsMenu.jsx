import { Router, Routes, Route, NavLink, Link } from 'react-router-dom';

export default function ItemsMenu(props){
    let items = props.items;
  return (
    <li>
        {/* {
          items.map((item, index)=>
          <Link>{item.name}</Link>
          )
        } */}
    </li>
  )
};
