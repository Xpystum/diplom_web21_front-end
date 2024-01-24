import Message from "../Message/Message";
import style from "./Messages.module.sass";

export default function Messages(props){
  // const messages = [1,2,3,4];
    const messages = props.messages;
    return (
      <div className={style.wrappMessages}>
        {messages.map((message, index) => {
          return <Message message={message} key={index} />
        })}
      </div>
    )
  };
  