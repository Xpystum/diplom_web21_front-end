import ItemsMenu from './ItemsMenu/ItemsMenu';

export default function Header(props){
    let items = props.menuItems;
    let newItems = items.filter((item)=>{
      return (item.id <= 6);
    });
    
  return (
    <header>
      <div className='header-wrapp'>
        <nav className='main-menu'>
          <ul className='main-menu__ul'>
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
