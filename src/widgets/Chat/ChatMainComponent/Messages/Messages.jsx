import { useEffect, useState } from "react";
import Message from "../Message/Message";
import style from "./Messages.module.sass";
import { Spin } from 'antd';

export default function Messages(props){
  const messagesProps = props.messages;
  const [messages, setMessages] = useState([]);
  const [statusRequestSpinner , setStatusRequestSpinner] = useState(true);

  useEffect(()=>{ 
  
    if(messagesProps?.chatGroupDown){
      setStatusRequestSpinner(false);
    }

    if(messagesProps.length > 0){
      setMessages(messagesProps);
      setStatusRequestSpinner(false);
    }

  }, [messagesProps] )
  

  return (
    <>
      <Spin spinning={statusRequestSpinner}>
        <div className={style.wrappMessages}>
          {
            (messagesProps?.chatGroupDown) ? 
            <div className={style.infoChatGroupDown}>
              <span>Сообщений нет, начните диалог</span>
            </div>
            :
            messages.map( (message, index) => {
              return <Message message={message} key={index + 1} />
            })
          }
        </div>
      </Spin>
    </>
    
  )

};
  