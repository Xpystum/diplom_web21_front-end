import { Link } from "react-router-dom";
import Logo from "../../UI/Logo/Logo";
import styles from './CheckBeforePurchaseWidget.module.sass';

export default function  CheckBeforePurchaseWidget(props){

    return(
        <div className={styles.wrap}>
            <Link to='#'>
                <Logo icon = "#DB001B" icon2 = "#fff" text = "#000"/>
                <h3>Проверь авто перед покупкой</h3>
                <p>История продажи, пробеги, ДТП, ремонты, залоги и многое другое</p>
            </Link>
            <Link to='https://vin.drom.ru/example/1' className={styles.example} target="_blank">Пример отчета</Link>
            <input type="text" placeholder="VIN / № кузова / госномер"/>
            <button type="button">Проверить авто</button>
        </div>
        
    )
}