import { Link } from "react-router-dom";
import logo from './logo.svg';
import './Logo.sass';

export default function LogoAndLocation()/*будет удалена локация и вынесена отдельно в компонент*/
{
    return(
    <div className='logo-wrap'>
     <Link to='#'>
        <img src={logo} className="app-logo" alt="logo"></img> 
    </Link>                  
    <Link className="location" to='#'>Нижегородская область</Link>
</div> )
};