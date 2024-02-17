
import style from "./SelectChatUser.module.sass";
import MainUserChat from "./../ChatMainComponent/MainUserChat/MainUserChat";
import React, { useContext, useEffect, useRef, useState } from "react";
import { groupChatSelect } from './../PrivateMessagesUser/PrivateMessagesUser'; 
import Pusher from 'pusher-js';
import { useSelector } from "react-redux";
import EmptyMessage from "../PrivateMessagesUser/EmptyMessage";

//Puhser API
import { Class_chatAPI } from "../../../API/Class_chatAPI.js";

//config
import {KEY_PUSHER} from './../../../config';
import {AUTH_ENDPOINT} from './../../../config';
import {CLUSTER} from './../../../config';


const SelectChatUser = React.memo( ({chatGroup}) => {

    //авторизированный пользователь
    const userMain = useSelector(state => state.sliceUser.value.user.data);

    //context
        const {clickSelectGroupChat} = useContext(groupChatSelect);

    ///pusher
        //state Pusher
        const [pusher, setPusher] = useState(null);
        const pusherAPIref = useRef(null);

    //название канала
    const nameChannel = 'private-chatGroup.';

    const [chatGroupProps, setChatGroupProps] = useState(chatGroup)
    const [isSelected, setIsSelected] = useState(null);

    function connectApiPuser(){

        const token = localStorage.getItem("my_token") ? localStorage.getItem("my_token") : '';
        pusherAPIref.current = new Class_chatAPI(KEY_PUSHER, AUTH_ENDPOINT, CLUSTER, token);
        // pusherAPIref.current.turnOnErrorConsole();
        setPusher(pusherAPIref.current.pusher);
    
    }

    function apiPusher(groupChatId){
        pusherAPIref.current.subscribeChannel(nameChannel, userMain.id);
        pusherAPIref.current.subscribeEventChannel(nameChannel + userMain.id, 'allGroup', 
            function (data) {

                //если обрыв?
                if(data.length != 0){
                    setChatGroupProps(data);
                }
            }
        );
    }

    function handleItemClick(key, item){
        setIsSelected(key);
        clickSelectGroupChat(item);
    }
    

    useEffect(()=>{

        if(chatGroup.lenght != 0){
            setChatGroupProps(chatGroup);
        }
        
    }, [chatGroup])

    useEffect(()=>{

        connectApiPuser();
        return () => {
            pusherAPIref.current.disconnectPusher();
        }
        
    }, [])

    useEffect(()=>{

        if( pusher !== null ){
            apiPusher(chatGroupProps);
        }
    
    }, [pusher])


    return (

        (chatGroupProps.length != 0) ?
        <ul className={style.wrappBlock}>
            {
                chatGroupProps.map((item, key)=>{
                    return (
                        <li 
                            className={(isSelected === key)? style.selectedItem : '' + ' ' + style.liItim} 
                            key={key}
                            onClick={() => handleItemClick(key, item)}

                        >
                            <MainUserChat styleSelect={'selectUser'} user={item.user}/>
                        </li>
                    )
                })
            }
        </ul>
        :
        <EmptyMessage />
    )
});

export {SelectChatUser};