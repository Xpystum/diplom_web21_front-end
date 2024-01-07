import Messages from '../Messages/Messages';
import AddMessageForm from '../AddMessageForm/AddMessageForm';
import style from './Chat.module.sass';

export default function Chat(){

  const socket = WebSocket()

  return (
    <div className={style.wrappChat}>
      <Messages />
      <AddMessageForm />
    </div>
  )
  };
  