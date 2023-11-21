import { Link } from 'react-router-dom';
import styles from './Location.module.sass';
import icon from './location.svg'

export default function Location(props){

    return(
        <div className={styles.__wrap}>
            <Link className={styles.__text} to='/'><img src={icon} alt="location" /> Нижегородская область</Link>
        </div>
    )
}