import MenuItem from "../MenuItem/MenuItem";

export default function Menu(props){

    let menuItems = props.menuItems;
  return (
    <div>
        <ul>
            {
                (menuItems.length > 0)?
                    menuItems.map((item)=>{
                        if(item.parrent_item_id == null){
                           return <MenuItem key={item.id} item={item}/>
                        }
                        // console.log(item.parrent_item_id+" === "+item.id+" = "+item["id"])
                        if(item.parrent_item_id != null){
                            
                            for(let i = 0; menuItems.length > i; i++){
                                if(item.parrent_item_id == i){
                                   console.log(item.id); 
                                }    
                            }
                        }
                    } 
                )
                :
                ""
            }
        </ul>
    </div>
  )
};
