
export default function MenuItem(props){
    let items = props.menuItems;
    
  return (
    items.map((item, index)=>{
      <li key={item.id}>
        <span>{item.item_name}</span>
      </li>
    })
  )
};
