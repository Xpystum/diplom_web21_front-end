//компоненть
import Messages from '../Messages/Messages';
import AddMessageForm from '../AddMessageForm/AddMessageForm';



import style from './Chat.module.sass';
import Pusher from 'pusher-js';
import { useEffect, useState, createContext  } from 'react';
import { request } from '../../../../Action/request';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../../../redux/sliceChat';
import MainUserChat from '../MainUserChat/MainUserChat';

//context
const contextChatGroup = createContext('');


function Chat({userProps}){

  let allMessages = useSelector(state => state.sliceChat.value.chat.messages);
  const userFrom = useSelector(state => state.sliceUser.value.user.data);
  const dispatch = useDispatch(); 
  

  //состояние сообщений
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);

  const [groupChatId, setGroupChatId] = useState(null);

  //pusher
  const [pusher, setPusher] = useState(null);
  const [statusPusher, setStatusPusher] = useState(false);

  //принудительный рирендер
  const [, forceUpdate] = useState();
  const rerender = () => forceUpdate({});

  async function requestMessages(){
    await request('post', 'chat/messages', (response)=>{
      if (response.status == 200 && response.data.data[0].length > 0) {

        setGroupChatId(response.data.chatgroup_id);
        dispatch(loadMessages(response.data.data[0]));
        setMessages(response.data.data[0]);

      }

      if(response.status == 202){
        console.log( ' __status 202');
        setMessages({chatGroupDown: true});
      }

    }, {'user_from_id': userFrom.id, 'user_to_id': userProps.id}, (error) => {

      console.log('вернул ошибку request: ', error);

    })
  }

  function apiPusher(groupChatId){

    // const pusher = new Pusher('78ea49788a2c81fd0c1a', 
    // {
    //   authEndpoint: 'http://127.0.0.1:8000/api/custom/broadcasting/auth',
    //   cluster: 'eu',
    //   // authEndpoint: 'http://127.0.0.1:8000/broadcasting/auth',
    //   auth: {
    //       headers: {
    //         "Authorization": `Bearer ${(localStorage.getItem("my_token"))? localStorage.getItem("my_token") : ''}`,
    //         // "Authorization": `Bearer ${localStorage.getItem("my_token")}`,
    //         "Access-Control-Allow-Origin": "*"
    //       }
    //   },
    // });
    
    const channel = pusher.subscribe('private-chat.' + groupChatId);
    channel.bind('message', function(data) {
      console.log(data , 'вызвался broadcasting');
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
      setStatusPusher(true);
    });

    pusher.connection.bind("error", function (error) {
      console.error("Ошибка соединение", error);
    });

    pusher.connection.bind("state_change", function (states) {
      console.error("Состояние соединенеи: ", states);
    });

    console.log(pusher.connection.state, ':____состояние соединение');
    
    
  }

  const funcSetIdGroup = id => {
    setGroupChatId(id);
  }

  //запуск запроса на получение сообщений + вебсокет
  useEffect(()=>{
    if(userProps.length != 0){
      requestMessages();
    }
  }, [userProps])

  useEffect(()=>{

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

    return () => {
      pusher.disconnect();
    }
  }, [])


  useEffect(()=>{
    console.log(groupChatId , 'groupChatId')
    if(typeof groupChatId !== "undefined" && pusher !== null){

      apiPusher(groupChatId);
    }

  }, [groupChatId])

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
        (userFrom.length != 0) ?
        <>
          <MainUserChat userProps={userProps}/>
          <Messages messages={messages} />
          <contextChatGroup.Provider value={funcSetIdGroup}>
            <AddMessageForm groupChatId={groupChatId} userFrom={userFrom} userTo={userProps}/>
          </contextChatGroup.Provider>
        </>
        :
        <div>Войдите в Аккаунт</div>
      }
    </div>
  )
};

export {Chat , contextChatGroup};