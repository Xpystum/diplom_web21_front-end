
import style from "./PrivateMessagesUser.module.sass";



export default function EmptyMessage(props){
    
    return (
        <div className={style.emptyMessage}>
            <div className={style.wraapIcon}>
                <div className={style.icon}></div>
            </div>
            <h2>Нет Сообщений</h2>
            <p className={style.text}>
                Общайтесь с продавцами и покупателями,
                уточняйте интересующую информацию о
                товарах и услугах.
            </p>
        </div>
    )
};