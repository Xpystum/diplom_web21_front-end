import ItemsMenu from './ItemsMenu/ItemsMenu';
import './Header.sass';

export default function Header(props){
    let items = props.menuItems;
    let newItems = items.filter((item)=>{
      return (item.id <= 7);
    });
    
  return (
    <header>
      <div className='header-wrapp'>
        <nav className='header-wrapp__main-menu'>
        
          <ul className='header-wrapp__main-menu__ul'>
            {
              newItems.map((item)=>
                <ItemsMenu key={item.id} item={item}/>
              )
            }
          </ul>
        </nav>
      </div>
    </header>
  )
};
