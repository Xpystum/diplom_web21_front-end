import MenuItem from "../MenuItem/MenuItem";
import { request } from '../../request';
import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { reloadMenu, loaderSwitch } from '../../redux/dataState';




export default function Menu(props){


    let dispatch = useDispatch();
    
    request('get', 'items-menu', (response) => {
        dispatch(loaderSwitch(false));
        
      if (response.status == 200 && response.data.length > 0) {
        //dispatch(reloadMenu(response.data))
      }


    });

    /*

    useEffect(() => {
        request('get', 'items-menu', (response) => {
            dispatch(loaderSwitch(false));
            
          if (response.status == 200 && response.data.length > 0) {
            //dispatch(reloadMenu(response.data))
          }
    
    
        });
      }, []);
*/
    let menuItems = useSelector(state => state.dataState.value);

    

  return (

    <div>
        <ul>
            
        </ul>
    </div>
  )
};
