import { Link } from 'react-router-dom';
import styles from './Location.module.sass';
import { URL_IMG } from "../../config";

export default function Location(props){

    let urlImg = URL_IMG
    return(
        <Link className={styles.location} to='/'><img src={urlImg+"header/location.svg"} alt="location" /> Нижегородская область</Link>
    )
}