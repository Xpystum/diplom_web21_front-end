import Message from "../Message/Message";
import style from "./Messages.module.sass";

export default function Messages(){
  const messages = [1,2,3,4];
    return (
      <div className={style.wrappMessages}>
        {messages.map((message, index) => {
          return <Message key={index} />
        })}
      </div>
    )
  };
  