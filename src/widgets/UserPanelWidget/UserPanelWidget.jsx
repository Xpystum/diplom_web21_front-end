import { Link } from "react-router-dom";
import styles from './UserPanelWidget.module.sass';
import { useDispatch } from "react-redux";
import { removeToken } from "../../redux/dataState";

export default function UserPanelWidget(){
    let dispatch = useDispatch()
    
    function onLogout(){
        dispatch(removeToken(null));
    }

    return(
        <div className={styles.register_wrap}>
            <Link to ="/sign" onClick={()=>{onLogout()}}>Выход</Link>
        </div>
    )
}