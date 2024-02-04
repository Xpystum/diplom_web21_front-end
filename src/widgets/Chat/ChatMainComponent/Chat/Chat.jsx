import Messages from '../Messages/Messages';
import AddMessageForm from '../AddMessageForm/AddMessageForm';
import style from './Chat.module.sass';
import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';
import { request } from '../../../../Action/request';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../../../redux/sliceChat';
import MainUserChat from '../MainUserChat/MainUserChat';


export default function Chat({userProps}){

  let allMessages = useSelector(state => state.sliceChat.value.chat.messages);
  const user = useSelector(state => state.sliceUser.value.user.data);
  const dispatch = useDispatch(); 
  
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);


  async function requestMessage(){
    await request('GET', 'chat', (response)=>{
      if (response.status == 200 && response.data.length > 0) {
        dispatch(loadMessages(response.data));
        setMessages(response.data);
      }
    }, {})
  }

  function apiPusher(allMessages){

    Pusher.logToConsole = false;
    const pusher = new Pusher('78ea49788a2c81fd0c1a', {
      cluster: 'eu'
    });
    const channel = pusher.subscribe('chat');
    channel.bind('message', function(data) {

      //если у вебсокета случился обрыв?
      if(data.length != 0){
          setMessage(data);
      }
      
    });

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

    console.log(pusher.connection.state, ':____состояние соединение');
  }

  //запуск запроса на получение сообщений + вебсокет
  useEffect(()=>{
    requestMessage();
    apiPusher(allMessages);
  }, [])

  //добавление сообщение в чат
  useEffect(()=>{ 

    if(message.length != 0 ){
      let copy = Object.assign([], messages);
      copy?.push(message);
      setMessages(copy);
    }

  }, [message])

 

  return (
    <div className={style.wrappChat}>
      
      {
        (user.length != 0) ?
        <>
          <MainUserChat userProps={userProps}/>
          <Messages messages={messages} />
          <AddMessageForm userProps={user}/>
        </>
        :
        <div>Войдите в Аккаунт</div>
      }
      
      
    </div>
  )
};
  