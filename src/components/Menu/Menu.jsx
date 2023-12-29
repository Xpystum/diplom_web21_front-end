import MenuItem from "../MenuItem/MenuItem";


export default function Menu(props){

    let menuItems = props.menuItems;

    

  return (

    <div>
        <ul>
            {
                (menuItems.length > 0)?
                    
                    menuItems.map((item)=>
                        <MenuItem key={item.id} item={item}/>
                    )
                    
                :
                    ""
            }
        </ul>
    </div>
  )
};
