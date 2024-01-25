import { useEffect, useState } from "react";
import Message from "../Message/Message";
import style from "./Messages.module.sass";

export default function Messages(props){
  const messagesProps = props.messages;
  const [messages, setMessages] = useState(null);

  useEffect(()=>{ 

    if(messagesProps.length > 0){
      setMessages(messagesProps);
    }

  }, [messagesProps] )
  

  return (
    <div className={style.wrappMessages}>
      {
        messages ? 
        messages.map((message, index) => {
          return <Message test={console.log(message, 'number ' + index)} message={message} key={index} />
        })
        :
        ""
      }
    </div>
  )

};
  