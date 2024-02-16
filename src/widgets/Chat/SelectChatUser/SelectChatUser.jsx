
import style from "./SelectChatUser.module.sass";
import MainUserChat from "./../ChatMainComponent/MainUserChat/MainUserChat";
import React, { useContext, useEffect, useState } from "react";
import { groupChatSelect } from './../PrivateMessagesUser/PrivateMessagesUser'; 
import Pusher from 'pusher-js';
import { useSelector } from "react-redux";


const SelectChatUser = React.memo( ({chatGroup}) => {

    //авторизированный пользователь
    const userMain = useSelector(state => state.sliceUser.value.user.data);

    //context
        const {clickSelectGroupChat} = useContext(groupChatSelect);

    ///pusher
        //state Pusher
        const [pusher, setPusher] = useState(null);

    //название канала
    const nameChannel = 'private-chatGroup.';

    const [chatGroupProps, setChatGroupProps] = useState(chatGroup)
    const [isSelected, setIsSelected] = useState(null);

    function connectApiPuser(){
    
        const pusher = new Pusher('78ea49788a2c81fd0c1a', 
        {
          authEndpoint: 'http://127.0.0.1:8000/api/custom/broadcasting/auth',
          cluster: 'eu',
          auth: {
              headers: {
                "Authorization": `Bearer ${(localStorage.getItem("my_token"))? localStorage.getItem("my_token") : ''}`,
                // "Authorization": `Bearer ${localStorage.getItem("my_token")}`,
                "Access-Control-Allow-Origin": "*"
              }
          },
        });
        setPusher(pusher);
        console.log('создание пушера');
    }

    function apiPusher(groupChatId){

        if(pusher.connection.state == 'connected'){
        }
        const channel = pusher.subscribe(nameChannel + userMain.id);
        channel.bind('allGroup', function(data) {
            console.log(data , 'вебсокет вернул изменённые данные');
        });
        console.log(channel, 'ПОДКЛЮЧЕНИЕ К КАНАЛУ - НАЗВАНИЕ КАНАЛА');
        
        pusher.connection.bind("connecting", function () {
          console.log('соединение');
        });
    
        pusher.connection.bind("unavailable", function () {
          console.log('соединение не установлено');
        });
    
        pusher.connection.bind("connected", function () {
          console.log('соединение установлено');
        });
    
        pusher.connection.bind("error", function (error) {
          console.error("Ошибка соединение", error);
        });
    
        pusher.connection.bind("state_change", function (states) {
          console.error("Состояние соединение: ", states);
        });
    
        console.log(pusher.connection.state, ':____состояние соединение');
        
    }

    useEffect(()=>{

        if(chatGroup.lenght != 0){
            setChatGroupProps(chatGroup);
        }
        
    }, [chatGroup])

    useEffect(()=>{

        connectApiPuser();
        
    }, [])

    useEffect(()=>{


        if(typeof chatGroupProps !== "undefined" && pusher !== null ){
            
            apiPusher(chatGroupProps);

        }
    
    }, [chatGroupProps, pusher])

   

    function handleItemClick(key, item){
        setIsSelected(key);
        clickSelectGroupChat(item);
    }
    
    return (
        <ul className={style.wrappBlock}>
            {
                chatGroupProps.map((item, key)=>{
                    return (
                        <li 
                            className={(isSelected === key)? style.selectedItem : '' + ' ' + style.liItim} 
                            key={key}
                            onClick={() => handleItemClick(key, item)}

                        >
                            <MainUserChat  styleSelect={'selectUser'} user={item.user}/>
                        </li>
                    )
                })
            }
        </ul>
    )
});

export {SelectChatUser};