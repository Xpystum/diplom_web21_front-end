
import style from "./PrivateMessagesUser.module.sass";
import Chat from "../ChatMainComponent/Chat/Chat";



export default function PrivateMessagesUser(props){
    


    return (
        <div className={style.wrappBlock}>
            <div className={style.wrappBlockInner}>
                <section className={style.leftBlock_messages}>
                    <nav className={style.selectStack}>
                        <div className={style.selectSwitch}>
                            <span>Сообщения</span>
                        </div>
                    </nav>  
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
                </section>
                <section className={style.RightBlock_chat}>
                    <div className={style.wrappChatEmpty}>
                        <span>Выберите диалог из списка слева</span>
                    </div>
                    {/* <Chat /> */}
                </section>
            </div>
        </div>
    )
};