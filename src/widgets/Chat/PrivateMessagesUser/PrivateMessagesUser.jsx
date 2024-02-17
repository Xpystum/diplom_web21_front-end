
import style from "./PrivateMessagesUser.module.sass";
import {Chat} from "../ChatMainComponent/Chat/Chat";
import {SelectChatUser} from "./../SelectChatUser/SelectChatUser.jsx";
import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { request } from "../../../Action/request.js";

const groupChatSelect = createContext('');


function PrivateMessagesUser(props){
    const [chatGroup, setChatGroup] = useState([]);
    
    //выбранный Group Chat и user
    const [targetChat, setTargetChat] = useState(null);

    const userMain = useSelector(state => state.sliceUser.value.user.data);
    
    function firstRequest() {

        request('post', 'chat/allgroup', (response)=>{
            if (response.status == 200 && response.data.length > 0) {
    

                setChatGroup(response.data);
            }
      
      
          }, {user_id: userMain.id}, (error) => {
            
            console.log(error , 'error');
      
        })

    } 

    function clickSelectGroupChat(user){

        setTargetChat(user);
    }

    useEffect(()=>{


    }, [targetChat])

    useEffect(()=>{

        firstRequest();

    }, [])

    return (
        <div className={style.wrappBlock}>
            <div className={style.wrappBlockInner}>
                <section className={style.leftBlock_messages}>
                    <nav className={style.selectStack}>
                        <div className={style.selectSwitch}>
                            <span>Сообщения</span>
                        </div>
                    </nav>  
                    {
                        <groupChatSelect.Provider value={{clickSelectGroupChat, }}>
                            <SelectChatUser chatGroup={chatGroup}/>
                        </groupChatSelect.Provider>
                    }
                </section>
                <section className={style.RightBlock_chat}>
                    {
                        (targetChat != null)?
                            // <Chat user={targetChat.user}  chatId={targetChat.chatgroup_id}/>
                            <Chat styleSelect={'profileGeneral'} targetChat={targetChat}/>
                        : 
                        <div className={style.wrappChatEmpty}>
                            <span>Выберите диалог из списка слева</span>
                        </div>
                    }
                </section>
            </div>
        </div>
    )
};

export {PrivateMessagesUser, groupChatSelect};