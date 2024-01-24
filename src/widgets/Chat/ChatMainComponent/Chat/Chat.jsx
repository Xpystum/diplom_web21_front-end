import Messages from '../Messages/Messages';
import AddMessageForm from '../AddMessageForm/AddMessageForm';
import style from './Chat.module.sass';
import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';

export default function Chat(){

  // const socket = WebSocket()
  
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);
  let allMessage = [];

  async function requestMessage(){

    await fetch('http://localhost:8000/api/chat/messages', {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${'1|CFwAEz99ZEPf7Buoy0ni9u5NLdOIn7cd2KAYoW3cf3b23a7f'}`,
      },
    })

    setMessage([]);
  }

  useEffect(()=>{

    Pusher.logToConsole = true;

      const pusher = new Pusher('78ea49788a2c81fd0c1a', {
        cluster: 'eu'
      });

      const channel = pusher.subscribe('chat');

      channel.bind('message', function(data) {
        
        console.log('зашёл в пушер')
        console.log(data, '__data');
        // allMessage.push(data);
        // setMessages(allMessage);
      });

    // requestMessage();

  }, [])

  useEffect(()=>{
    console.log(messages, '____messages');
  }, [messages])

 

  return (
    <div className={style.wrappChat}>
    
      <Messages messages={messages}/>
      <AddMessageForm />
        
    </div>
  )
};
  