import style from './Header.module.sass';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';
import Location from '../Location/Location';
import LoginRegisterWidget from '../../widgets/LoginRegisterWidget/LoginRegisterWidget';
import PostAdd from '../PostAdd/PostAdd';
import UserPanelWidget from '../../widgets/UserPanelWidget/UserPanelWidget';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header(props) {
  
  const dispath = useDispatch();
  const [authToken, setAuthToken] = useState('');
  let mainMenu = 'mainMenu';
  useEffect(() => {
    const token = localStorage.getItem("my_token");
    setAuthToken(token);
  }, []);

  return (

    <header className={style.header}>
      
      <div className={style.header__wrap}>
        <div className={style.header__info}>
          <Logo/>
          <Location />
          <Menu mainMenu={mainMenu}/>  
        </div>
        
        
        <div className={style.header__reg}>
          <PostAdd />

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
