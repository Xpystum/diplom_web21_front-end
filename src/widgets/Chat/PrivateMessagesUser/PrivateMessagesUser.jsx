
import style from "./PrivateMessagesUser.module.sass";
import {Chat} from "../ChatMainComponent/Chat/Chat";
import EmptyMessage from "./EmptyMessage.jsx";
import {SelectChatUser} from "./../SelectChatUser/SelectChatUser.jsx";
import { createContext, useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { request } from "../../../Action/request.js";
import { object } from "prop-types";

const groupChatSelect = createContext('');


function PrivateMessagesUser(props){
    const [chatGroup, setChatGroup] = useState([]);
    // const memoizedData = useMemo(() => chatGroup, [chatGroup]);
    
    //выбранный Group Chat и user
    const [targetChat, setTargetChat] = useState(null);

    const userMain = useSelector(state => state.sliceUser.value.user.data);
    
    function firstRequest() {

        request('post', 'chat/allgroup', (response)=>{
            if (response.status == 200 && response.data.length > 0) {
    
                // console.log(response.data , 'response.data');
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

        // console.log(targetChat , 'target ПОМЕНЯЛСЯ СУКА')

    }, [targetChat])

    useEffect(()=>{

        firstRequest();

    }, [])

    useEffect(()=>{

        //todo

    }, [chatGroup] )


    //пропсы что нужно передать

  

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
                        true ?
                        <groupChatSelect.Provider value={{clickSelectGroupChat, }}>
                            <SelectChatUser chatGroup={chatGroup}/>
                        </groupChatSelect.Provider>
                        :
                        <EmptyMessage />
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