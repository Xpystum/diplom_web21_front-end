import React, { useEffect, useRef, useState } from "react";
import Message from "../Message/Message";
import style from "./Messages.module.sass";
import { Spin } from 'antd';


const Messages = React.memo( (props) => {

  const styleSelect = props.styleSelect ?? '';
  const messagesProps = props.messages;
  const [messages, setMessages] = useState([]);
  const [statusRequestSpinner , setStatusRequestSpinner] = useState(true);
  const [statusEmptyBoxMessage, SetStatusEmptyBoxMessage] = useState(true);
  //якорь для опускание до первых сообщений
  const messageAnchorRef = useRef(null);
  const [isAutoScroll, SetIsAutoScroll] = useState(true)

  function scrollHandler(event) {
    let element = event.currentTarget;

    if(Math.abs( (element.scrollHeight - element.scrollTop) - element.clientHeight) < 450 ){

      !isAutoScroll && SetIsAutoScroll(true);

    } else{

      isAutoScroll && SetIsAutoScroll(false);

    }

  }

  useEffect(()=>{ 
  
    if(messagesProps?.chatGroupDown){
      setStatusRequestSpinner(false);
    }
    
    if(messagesProps?.length > 0){
      
      setMessages(messagesProps);
      setStatusRequestSpinner(false);
      SetStatusEmptyBoxMessage(false);
    }

  }, [messagesProps] )

  useEffect(()=>{

    if(isAutoScroll){
      messageAnchorRef.current?.scrollIntoView({block: 'end', behavior: "smooth" })
    }

  }, [messages])


  return (
    <>
      <Spin spinning={statusRequestSpinner}>
        <div className={(styleSelect == 'profileGeneral' )? style.wrappMessagesMyProfile : style.wrappMessages} onScroll={scrollHandler}>
          {
            (statusEmptyBoxMessage) ? 
            <div className={(styleSelect == 'profileGeneral' )? style.infoChatGroupDownMyProfile : style.infoChatGroupDown}>
              <span>Сообщений нет, начните диалог</span>
            </div>
            :
            <>
              {messages.map( (message, index) => <Message styleSelect={styleSelect} message={message} key={index + 1} />)}
              <div ref={messageAnchorRef}></div>
            </>
           
          }
        </div>
      </Spin>
    </>
    
  )

});
  
export {Messages}