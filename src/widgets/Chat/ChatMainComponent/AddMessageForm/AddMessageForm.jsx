import Button from 'react-bootstrap/Button';
import style from "./AddMessageForm.module.sass";

export default function AddMessageForm({requestMessage}){
    return (

        <div className={style.wrapp_messageForm}>
            <textarea></textarea>
            <Button type="submit" onClick={ ()=>{ requestMessage() } }>Send</Button>
        </div>
    )
  };
  