import style from './Header.module.sass';
import Logo from '../Logo/Logo';
import Location from '../../widgets/LocationWidget/LocationWidget';
import LoginRegisterWidget from '../../widgets/LoginRegisterWidget/LoginRegisterWidget';
import PostAdd from '../PostAdd/PostAdd';
import UserPanelWidget from '../../widgets/UserPanelWidget/UserPanelWidget';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import MenuWidget from '../../widgets/MenuWidget/MenuWidget';
import LocationWidget from '../../widgets/LocationWidget/LocationWidget';

export default function Header(props) {
  
  const dispath = useDispatch();
  const [authToken, setAuthToken] = useState('');
  let mainMenu = 'mainMenu';
  useEffect(() => {
    const token = localStorage.getItem("my_token");
    setAuthToken(token);
  }, []);
  let user = useSelector(state => state.dataState.value.user.data);
  return (

    <header className={style.header}>
      
      <div className={style.header__wrap}>
        <div className={style.header__info}>
          <div className={style.header__logo}>
            <Logo icon = "#DB001B" icon2 = "#000" text = "#fff"/>
          </div>
          <LocationWidget />
          <MenuWidget mainMenu={mainMenu}/>  
        </div>
        
        
        <div className={style.header__reg}>
          <PostAdd  user={user}/>

          {
            (!authToken)?
            <LoginRegisterWidget />
            :
            <UserPanelWidget user={props.user}/>
              
          }  

        </div>
        
        
      </div>
    </header>

  )
};
