import React from "react";


export default function MenuItem(props){
    let item = props.item;
  // console.log(item.id);
  // console.log(item.id +" == "+item.parrent_item_id);
  return (
    (item.parrent_item_id === null)?
    <li>
        {item.item_name}
    </li>
    :
    <li>{item.item_name} 
      sub
    </li>
  )
};
