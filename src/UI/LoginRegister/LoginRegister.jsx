import { Link } from "react-router-dom";
import styles from './LoginRegister.module.sass';

export default function LoginRegister(){
    return(
        <div className={styles.register_wrap}>
            <Link to={'/sign'} className={styles.register}>Вход и регистация</Link>
        </div>
    )
}