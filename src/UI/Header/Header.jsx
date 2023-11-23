import style from './Header.module.sass';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';
import Location from '../Location/Location';
import LoginRegisterWidget from '../../widgets/LoginRegisterWidget/LoginRegisterWidget';
import PostAdd from '../PostAdd/PostAdd';
import UserPanelWidget from '../../widgets/UserPanelWidget/UserPanelWidget';
import { useDispatch, useSelector } from 'react-redux';

export default function Header(props) {
  let mainMenu = 'mainMenu';

  let dispath = useDispatch();
  let auth = useSelector(state => state.dataState.value.app.auth);

  // requestToken(dispath);

  return (

    <header className={style.header}>
      
      <div className={style.headerWrap}>
        <Logo/>
        <Location />
        <Menu mainMenu={mainMenu}/>
        <PostAdd />

        {
          (!auth.token)?
            <LoginRegisterWidget />
          :
            <UserPanelWidget/>
        }
        
      </div>
    </header>

  )
};