import { Link, useNavigate } from "react-router-dom";
import styles from './UserPanelWidget.module.sass';
import { useDispatch } from "react-redux";
import { removeToken } from "../../redux/dataState";

export default function UserPanelWidget(){
    let dispatch = useDispatch()
    let navigate = useNavigate();
    function onLogout(){
        dispatch(removeToken(null));
        navigate('/sign');
    }

    return(
        <div className={styles.register_wrap}>
            <Link onClick={()=>{onLogout()}}>Выход</Link>
        </div>
    )
}