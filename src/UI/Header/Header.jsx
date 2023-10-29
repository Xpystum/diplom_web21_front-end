import style from './Header.module.sass';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';
import Location from '../Location/Location';
import LoginRegister from '../LoginRegister/LoginRegister';
import PostAdd from '../PostAdd/PostAdd';

export default function Header(props) {
  let mainMenu = 'mainMenu';
  return (

    <header className={style.header}>
      
      <div className={style.headerWrap}>
        <Logo/>
        <Location />
        <Menu mainMenu={mainMenu}/>
        <PostAdd />
        <LoginRegister />
      </div>
    </header>

  )
};