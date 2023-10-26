import style from './Header.module.sass';
import Menu from '../../components/Menu/Menu';

export default function Header(props) {
  let mainMenu = 'mainMenu';
  return (

    <header className={style.header}>
      <div className={style.headerWrap}>
        <Menu mainMenu={mainMenu}/>
      </div>
    </header>

  )
};