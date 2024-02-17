import { Link } from "react-router-dom";
import style from './UserPanelWidget.module.sass';
import { useDispatch, useSelector } from "react-redux";


import { removeToken } from "../../redux/dataState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";


import { removeUser  } from "../../redux/sliceUser";
import Avatar from 'react-avatar';
import { URL_IMG } from "../../config";


export default function UserPanelWidget(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.sliceUser.value.user.data);
    const userAvatar = user?.pathAvatar?.path?.resource;
    // console.log(user , 'user');

    function onLogout(){
        dispatch(removeToken());
        dispatch(removeUser());
        navigate("/sign");
    }   

    return(
        
        <div className={style.register_wrap}>
            
            <div className={style.wrappProfile}>
                <div className={style.wrapp_avatar}>
                    <div className={style.avatar}>
                    <Link className={style.profileBlock_itemBlock_link} to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" onClick={()=>{}}>
                        {
                            (user.length != 0)? 
                            <Avatar name={user.name} className={style.profileBlock_itemBlock_link} src={URL_IMG + userAvatar} size='35' round = {true}/> 
                            :
                            <FontAwesomeIcon className={style.avatar__icon} icon="fa-solid fa-user-tie" /> 
                        }
                    </Link> 
                    </div >
                </div>
            </div>

            <div className={style.profileBlock}>
                <div className={style.profileBlock_item}>
                    <Link className={style.profileBlock_itemBlock_link} to="/my" onClick={()=>{}}>
                        <div className={style.profileBlock_itemBlock}>
                            <span>{ user.email }</span>
                        </div>
                    </Link>
                </div>
                {(user.status != 'ban')?
                <>
                    <div className={style.profileBlock_item}>
                        <Link className={style.profileBlock_itemBlock_link} to="/my/ads" onClick={()=>{}}>
                            <div className={style.profileBlock_itemBlock}>
                                <FontAwesomeIcon className={style.profileBlock_itemBlock_Icon} icon="fa-solid fa-car-side" />
                                <span>Объявление</span>
                            </div>
                        </Link>
                    </div>
                    <div className={style.profileBlock_item}>
                        <Link className={style.profileBlock_itemBlock_link} to="#" onClick={()=>{}}>
                            <div className={style.profileBlock_itemBlock} >
                                <FontAwesomeIcon className={style.profileBlock_itemBlock_Icon} icon="fa-solid fa-chart-simple" />
                                <span>Статистика</span>
                            </div>
                        </Link>
                        
                    </div>
                    <div className={style.profileBlock_item}>
                        <Link className={style.profileBlock_itemBlock_link}  to="#" onClick={()=>{}}>
                            <div className={style.profileBlock_itemBlock} >
                                <FontAwesomeIcon  className={style.profileBlock_itemBlock_Icon} icon="fa-solid fa-truck-moving" />
                                <span>Отчеты по VIN</span>
                            </div>
                        </Link>
                    </div>
                </>
                :
                ""
                }

                <div className={style.profileBlock_item}>
                    <Link className={style.profileBlock_itemBlock_link} to="#" onClick={()=>{}}>
                        <div className={style.profileBlock_itemBlock}>
                            <FontAwesomeIcon className={style.profileBlock_itemBlock_Icon} icon="fa-solid fa-gear" />
                            <span>Настройки</span>
                        </div>
                    </Link>
                </div>

                <div className={style.profileBlock_item} onClick={()=>{ onLogout() }}>
                    <Link className={style.profileBlock_itemBlock_link} to="#">
                        <div className={style.profileBlock_itemBlock} >
                            <FontAwesomeIcon className={style.profileBlock_itemBlock_Icon} icon="fa-solid fa-right-from-bracket" />
                            <span>Выход</span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className={style.wrappInfoIcon}>
                <div>
                    <Link className={style.LinkInfoIcon} to="/private/messages" onClick={()=>{}}>
                        <FontAwesomeIcon className={style.InfoIcon} icon="fa-solid fa-comment" />
                    </Link>
                </div>

                <div>   
                    <Link className={style.LinkInfoIcon} to="#" onClick={()=>{}}>
                        <FontAwesomeIcon className={style.InfoIcon} icon="fa-solid fa-star" />
                    </Link>
                    
                </div>

                <div>
                    <Link className={style.LinkInfoIcon} to="#" onClick={()=>{}}>
                        <FontAwesomeIcon className={style.InfoIcon} icon="fa-solid fa-bell" />
                    </Link>
                </div>
            </div>

        </div>
    )
}