import ItemsMenu from './ItemsMenu/ItemsMenu';

export default function Header(props){
    let items = props.menuItems;
    console.log(items);


  return (
    <header>
      <nav className='main-manu'>
        <ul>
          <ItemsMenu items={items}/>
        </ul>
      </nav>
    </header>
  )
};
