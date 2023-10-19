import React from "react";
import { Link } from "react-router-dom";


export default function MenuItem(props){
    let item = props.item;
  // console.log(item.id);
  // console.log(item.id +" == "+item.parrent_item_id);
  return (
    (item.parrent_item_id === null)?
    <li>
      <Link to ="/">{item.item_name}</Link>  
    </li>
    :
    <li>{item.item_name} 
      sub
    </li>
  )
};
