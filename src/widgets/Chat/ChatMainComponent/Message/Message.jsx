import Avatar from 'react-avatar';
import style from './Message.module.sass';

export default function Message(){

    const message = {   
        url: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
        author: 'Maksim',
        text: 'Hello Friend',
    }
      return (
        <div className={style.wrappMessage}>
            <div>
                <Avatar src={message.url} size='40' round = {true}/> 
                <b className={style.authorName}>{message.author}</b>
            </div>

            <div className={style.messageText}>
                {message.text}
            </div>
            
            <div className={style.lineSeparator}> </div>
        </div>
      )
    };
    