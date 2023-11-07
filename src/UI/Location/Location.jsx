import { Link } from 'react-router-dom';
import styles from './Location.module.sass';
import icon from './location.svg'

export default function Location(props){

    return(
        <Link className={styles.location} to='/'><img src={icon} alt="location" /> Нижегородская область</Link>
    )
}