import MenuItem from "../MenuItem/MenuItem";
import { useSelector } from 'react-redux';


export default function Menu(props){


    let menuItems = useSelector(state => state.dataState.value.mainMenu);

  console.log(menuItems) ;

  return (

    <div>
        <ul>
            {
              menuItems.map((item)=>
                <li key={item.id}><a href={item.link}>{item.item_name}</a></li>
              )
            }
        </ul>
    </div>
  )
};
