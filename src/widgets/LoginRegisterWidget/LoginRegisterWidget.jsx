import { Link } from "react-router-dom";
import styles from './LoginRegisterWidget.module.sass';

export default function LoginRegisterWidget(){
    return(
        <div className={styles.register_wrap}>
            <Link to={'/sign'} className={styles.register}>
               <p>Вход<span className="xxl"> и регистрация</span></p>
            </Link>
        </div>
    )
}