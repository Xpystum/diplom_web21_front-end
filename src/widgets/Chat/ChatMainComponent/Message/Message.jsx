import Avatar from 'react-avatar';
import style from './Message.module.sass';

export default function Message(props){

    const message1 = {   
        url: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
        author: 'Maksim',
        text: 'Hello Friend',
    }

    const message2 = props.message;
    console.log(message2, 'message_Одно сообщение в Message');

      return (
        
        <div className={style.wrappMessage}>
            <div>
                <Avatar src={message1.url} size='40' round = {true}/> 
                <b className={style.authorName}>{message1.author}</b>
            </div>

            <div className={style.messageText}>
                {message1.text}
            </div>
            
            <div className={style.lineSeparator}> </div>
        </div>
      )
    };
    