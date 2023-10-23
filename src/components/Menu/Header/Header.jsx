import { Link } from "react-router-dom";
import './Header.sass';
import ItemsMenu from './ItemsMenu/ItemsMenu';
import LogoAndLocation from './Logo/Logo';

export default function Header(props){
    let items = props.menuItems;
    let firstItems = items.filter((item)=>{
      return (item.parrent_item_id == null);
    });
  return (
    <header>
      <div className='header-wrapp'>
        <nav className='header-wrapp__main-menu'>
          {LogoAndLocation()}
            <ul className='header-wrapp__main-menu__ul'>
            {
              items.map((item)=>
                <ItemsMenu key={item.id} item={item} items ={items}/>
              )
            }  
            </ul> 
        </nav>
      </div>
    </header>
  )
};
