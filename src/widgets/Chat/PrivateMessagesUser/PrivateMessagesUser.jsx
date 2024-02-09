
import style from "./PrivateMessagesUser.module.sass";
import Chat from "../ChatMainComponent/Chat/Chat";



export default function PrivateMessagesUser(props){
    


    return (
        <div className={style.wrappBlock}>
            <div className={style.wrappBlockInner}>
                <div className={style.leftBlock_messages}>
                    {/* <Chat /> */}
                </div>
                <div className={style.RightBlock_chat}>

                </div>
            </div>
        </div>
    )
};