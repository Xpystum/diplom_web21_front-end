import Messages from '../Messages/Messages';
import AddMessageForm from '../AddMessageForm/AddMessageForm';
import style from './Chat.module.sass';
import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';
import { request } from '../../../../Action/request';

export default function Chat(){

  // const socket = WebSocket()
  
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);
  // let allMessage = [];

  async function requestMessage(){

    await request('GET', 'chat', (response)=>{
      console.log(1);
      if (response.status == 200 && response.data.length > 0) {
        setMessages(response.data);
        // console.log(response.data, 'chat outside');
      }
    }, {})

    // setMessage([]);
  }

  useEffect(()=>{

    Pusher.logToConsole = false;

      const pusher = new Pusher('78ea49788a2c81fd0c1a', {
        cluster: 'eu'
      });

      const channel = pusher.subscribe('chat');

      channel.bind('message', function(data) {
        
        // console.log('зашёл в пушер')
        // console.log(data, '__data');
        // allMessage.push(data);
        // setMessages(allMessage);
      });

    // requestMessage();

  }, [])

  useEffect(()=>{
    // console.log(messages, '____messages');
  }, [messages])

 

  return (
    <div className={style.wrappChat}>
    
      <Messages messages={messages}/>
      <AddMessageForm requestMessage={requestMessage}/>
      
    </div>
  )
};
  