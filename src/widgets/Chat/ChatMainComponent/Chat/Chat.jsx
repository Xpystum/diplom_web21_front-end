//config
import {KEY_PUSHER} from './../../../../config';
import {AUTH_ENDPOINT} from './../../../../config';
import {CLUSTER} from './../../../../config';
import { Class_chatAPI } from '../../../../API/Class_chatAPI';

//компонент
import {Messages} from '../Messages/Messages';
import AddMessageForm from '../AddMessageForm/AddMessageForm';


import style from './Chat.module.sass';
import React, { useEffect, useState, createContext, useRef  } from 'react';
import { request } from '../../../../Action/request';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../../../redux/sliceChat';
import MainUserChat from '../MainUserChat/MainUserChat';

//context
const contextChatGroup = createContext('');


const Chat = React.memo ( (prop) => {

  const styleSelect = prop.styleSelect ?? '';

  const [userProps, setUserProps] = useState(prop.targetChat.user);
  const [groupChatId, setGroupChatId] = useState(prop.targetChat.chatId);

  let allMessages = useSelector(state => state.sliceChat.value.chat.messages);
  const userFrom = useSelector(state => state.sliceUser.value.user.data);
  const dispatch = useDispatch(); 

  const nameChannel = 'private-chat.';

  //состояние сообщений
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);


  //pusher
  const [pusher, setPusher] = useState(null);
  const [statusPusherFirstMessage, setStatusPusher] = useState(true);
  const [firstMessage, setFirstMessage] = useState(null);
    //ref
    const pusherAPIref = useRef(null);

 

  async function requestMessages(){


    await request('post', 'chat/messages', (response)=>{


      if (response.status == 200 && response.data.data[0].length > 0) {

        setGroupChatId(response.data.chatgroup_id);
        dispatch(loadMessages(response.data.data[0]));
        setMessages(response.data.data[0]);

      }

      if(response.status == 202){
        setMessages({chatGroupDown: true});
      }

    }, {'user_from_id': userFrom.id, 'user_to_id': userProps.id}, (error) => {

      console.log('вернул ошибку request: ', error);

    })

  }


  function firstRequestAndMessage(){
    //логика для отправки первого сообщение уже после подписки на канал broadcats (если не будет, то при первом сообщении не будет обновление в чате)
    if(statusPusherFirstMessage && typeof firstMessage !== "undefined" && firstMessage !== null){

      request('POST', 'chat/send', (response)=>{
  
        if ( response.status >= 200 && response.status <= 204 && response.data.lenght != 0)  {
          //todo
        }

        }, {

          user_from_id: firstMessage.user_from_id, 
          user_to_id: firstMessage.user_to_id , 
          message: firstMessage.message, 
          chatgroup_id: firstMessage.chatgroup_id

        }, (error) => {
          //todo error
      })

      setStatusPusher(false);
      setFirstMessage(null);
    }

  }

  function apiPusher(groupChatId){

    pusherAPIref.current.subscribeChannel(nameChannel, groupChatId);
    pusherAPIref.current.subscribeEventChannel(nameChannel + groupChatId, 'message', 
        function (data) {

            if(data.length != 0){
              setMessage(data);
            }
        }
    );
    //вызов логики первого сообщение
    firstRequestAndMessage();

  }

  function connectApiPuser(){

    // if(pusherAPIref.current == null){
      //есть прорблема с созданием множество pusher (сделать проверку на существование пушера)
      const token = localStorage.getItem("my_token") ? localStorage.getItem("my_token") : '';
      pusherAPIref.current = new Class_chatAPI(KEY_PUSHER, AUTH_ENDPOINT, CLUSTER, token);
      // pusherAPIref.current.turnOnErrorConsole();
      setPusher(pusherAPIref.current.pusher);
    // }
   

  }


  const funcSetIdGroup = id => {
    setGroupChatId(id);
  }

  const setStatusMessageFirst = (status = null) => {
    //setStatusMessageFirst для стату первой отправки сообщение и создание группы
    if(status == null) {
      return statusPusherFirstMessage;
    }else{
      statusPusherFirstMessage(status);
    }
  }

  const infoFirstMessage = (user_from_id, user_to_id , message, chatgroup_id) => {

    setFirstMessage({
      user_from_id: user_from_id,
      user_to_id: user_to_id,
      message: message,
      chatgroup_id: chatgroup_id,
    });

  }


  useEffect(()=>{

    setUserProps(prop.targetChat.user);
    setGroupChatId(prop.targetChat.chatId);

    if(pusher != null){

      pusherAPIref.current.disconnectPusher();
      connectApiPuser();

    }

  }, [prop])

  //запуск запроса на получение сообщений + вебсокет
  useEffect(()=>{
    if(userProps.length != 0){
      requestMessages();
    }
  }, [userProps])

  useEffect(()=>{

    if(pusher == null){
      connectApiPuser();
    }


    return () => {

      if(pusherAPIref.current.pusher != null){
        //отключаемся отпушера при размотировании компонента
        pusherAPIref.current.disconnectPusher();
      }

    }

  }, [])
  

  useEffect(()=>{
    
    //&& groupChatId !== null - добавлять проверку что бы бесполезных подписей на каналов не было.

    if( typeof groupChatId !== "undefined" && pusher !== null ){
      apiPusher(groupChatId);
    }
   

  }, [groupChatId, pusher])

  //добавление сообщение в чат
  useEffect(()=>{ 

    if(message.length != 0 ){
      let copy = Object.assign([], messages);
      copy?.push(message);
      setMessages(copy);
    }

  }, [message]) 


  return (
    (userFrom.id != userProps.id)?
    <div className={(styleSelect == 'profileGeneral' )? style.wrappChatMyProfile : style.wrappChat}>
      {
        (userFrom.length != 0) ?
        <>
          <MainUserChat styleSelect={styleSelect} user={userProps}/>
          <Messages styleSelect={styleSelect} messages={messages} />
          <contextChatGroup.Provider value={{funcSetIdGroup , setStatusMessageFirst, infoFirstMessage}}>
            <AddMessageForm pusher={pusher} styleSelect={styleSelect} groupChatId={groupChatId} userFrom={userFrom} userTo={userProps}/>
          </contextChatGroup.Provider>
        </>
        :
        <div>Войдите в Аккаунт</div>
      }
    </div>
    :
    ''
  )
});

export {Chat , contextChatGroup};