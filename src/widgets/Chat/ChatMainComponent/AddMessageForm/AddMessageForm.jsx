import Button from 'react-bootstrap/Button';
import style from "./AddMessageForm.module.sass";

export default function AddMessageForm(){
    return (
        <div className={style.wrapp_messageForm}>
            <textarea></textarea>
            <Button type="submit">Send</Button>
        </div>
    )
  };
  