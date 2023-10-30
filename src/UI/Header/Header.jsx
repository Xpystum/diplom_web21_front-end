import style from './Header.module.sass';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';

export default function Header(props) {
  let mainMenu = 'mainMenu';
  return (

    <header className={style.header}>
      
      <div className={style.headerWrap}>
        <Logo/>
        <Menu mainMenu={mainMenu}/>
      </div>
    </header>

  )
};