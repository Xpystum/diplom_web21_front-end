//компоненть
import Messages from '../Messages/Messages';
import AddMessageForm from '../AddMessageForm/AddMessageForm';
import { Spin } from 'antd';


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
  const userFrom = useSelector(state => state.sliceUser.value.user.data);
  const dispatch = useDispatch(); 
  

  //состояние сообщений
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);

  const [groupChatId, setGroupChatId] = useState()

  //user
  // const [userFrom, setUserForm] = useState([]);
  // const [userTo, setuserTo] = useState('');
  // const [chatGroup_id, setChatGroup_id] = useState('');

  // useEffect(()=>{
  //     setUserForm(props.userForm);
  //     console.log(props.userForm , 'props.userForm');
  // }, [props.userForm])

  // useEffect(()=>{
  //     setuserTo(props.userTo);
  //     console.log(props.userTo , 'props.userTo');
  // }, [props.userTo])

  // useEffect(()=>{
  //     setChatGroup_id(props.groupChatId);
  //     console.log(props.groupChatId , 'groupChatId');
  // }, [props.groupChatId])

  // useEffect(()=>{
  //   setUserForm(userFromRedux);
  // } , [userFromRedux] )


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



    })
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
    if(userProps.length != 0){
      requestMessages();
    }
  }, [userProps])

  useEffect(()=>{
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
        (userFrom.length != 0) ?
        <>
          <MainUserChat userProps={userProps}/>
          <Messages messages={messages} />
          <AddMessageForm groupChatId={groupChatId} userFrom={userFrom} userTo={userProps}/>
        </>
        :
        <div>Войдите в Аккаунт</div>
      }
    </div>
  )
};
  