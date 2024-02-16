//компоненть
import Messages from '../Messages/Messages';
import AddMessageForm from '../AddMessageForm/AddMessageForm';



import style from './Chat.module.sass';
import Pusher from 'pusher-js';
import React, { useEffect, useState, createContext  } from 'react';
import { request } from '../../../../Action/request';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../../../redux/sliceChat';
import MainUserChat from '../MainUserChat/MainUserChat';
import name from '../../../../pages/Card/Card';

//context
const contextChatGroup = createContext('');

// targetChat = {
// name: name
// chatId: chatId
// }

const Chat = React.memo ( (prop) => {

  const [userProps, setUserProps] = useState(prop.targetChat.user);
  const [groupChatId, setGroupChatId] = useState(prop.targetChat.chatId);

  let activeSubscriptions = [];
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

  // fakeGroupId
  const [fakeGroupId, setFakeGroupId] = useState(null);

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

  async function requestMessages(){
    await request('post', 'chat/messages', (response)=>{

      console.log(response , 'response');

      if(response.data?.gtoupChannel){
        setFakeGroupId(response.data?.gtoupChannel);
        setMessages({chatGroupDown: true});
        
        console.log( response.data?.gtoupChannel , 'gtoupChannel, существует');
      }

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

  function apiPusher(groupChatId){

    if(pusher.connection.state == 'connected'){
    }
    console.log(fakeGroupId);
    const channel = pusher.subscribe(nameChannel + groupChatId );
    activeSubscriptions.push(channel);
    channel.bind('message', function(data) {

      //если у вебсокета случился обрыв?
      if(data.length != 0){
        setMessage(data);
      }
    
    });
    console.log(channel , 'название КАНАЛ ПРИ ПОДПИСКЕ')
    //вызов логики первого сообщение
    firstRequestAndMessage();
   
    
    pusher.connection.bind("connecting", function () {
      console.log('соединение');
    });

    pusher.connection.bind("unavailable", function () {
      console.log('соединение не установлено');
    });

    pusher.connection.bind("connected", function () {
      console.log('соединение установлено');
      setStatusPusher(true);
    });

    pusher.connection.bind("error", function (error) {
      // console.error("Ошибка соединение", error);
    });

    pusher.connection.bind("state_change", function (states) {
      // console.error("Состояние соединение: ", states);
    });

    console.log(pusher.connection.state, ':____состояние соединение');
    
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

  function connectApiPuser(){
    console.log('создалось подключение к пушеру');
    Pusher.logToConsole = false;  

    const pusher = new Pusher('78ea49788a2c81fd0c1a', 
    {
      authEndpoint: 'http://127.0.0.1:8000/api/custom/broadcasting/auth',
      cluster: 'eu',
      // authEndpoint: 'http://127.0.0.1:8000/broadcasting/auth',
      auth: {
          headers: {
            "Authorization": `Bearer ${(localStorage.getItem("my_token"))? localStorage.getItem("my_token") : ''}`,
            // "Authorization": `Bearer ${localStorage.getItem("my_token")}`,
            "Access-Control-Allow-Origin": "*"
          }
      },
    });

    setPusher(pusher);
  }

  useEffect(()=>{

    setUserProps(prop.targetChat.user);
    setGroupChatId(prop.targetChat.chatId);

    if(pusher != null){

      console.log( 'PUSHER NE NULL ОТРУБАЕМСЯ ОТ НЕГО')
      pusher.disconnect();
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

      console.log(pusher , 'pusher');
      if(pusher != null){
        pusher.disconnect();
      }

    }

  }, [])

  //изменил может сломаться

  useEffect(()=>{

    if(fakeGroupId !== null){
      apiPusher(fakeGroupId);
    }
    
    if( (typeof groupChatId !== "undefined" && groupChatId !== null)  && pusher !== null ){
      console.log('проверка пройдена');
      apiPusher(groupChatId);
    }
   

  }, [groupChatId, pusher, fakeGroupId ])

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
    <div className={style.wrappChat}>
      {
        (userFrom.length != 0) ?
        <>
          <MainUserChat user={userProps}/>
          <Messages messages={messages} />
          <contextChatGroup.Provider value={{funcSetIdGroup , setStatusMessageFirst, infoFirstMessage}}>
            <AddMessageForm groupChatId={groupChatId} userFrom={userFrom} userTo={userProps}/>
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