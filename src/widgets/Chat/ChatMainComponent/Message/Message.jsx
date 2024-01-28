import Avatar from 'react-avatar';
import style from './Message.module.sass';
import { URL_IMG } from '../../../../config';
import { useEffect } from 'react';

export default function Message(props){

    const message1 = {   
        url: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
        author: 'Maksim',
        text: 'Hello Friend',
    }
    const message = props.message ?? message1;
    const user = message.user ?? null;
    const avatarPath = user.pathAvatar.path.resource ?? '';
    const timeYear = message.timeYear ?? '';
    const timeHour = message.timeHour ?? '';
    
    useEffect(()=>{
        // console.log(userTime, 'message');
    }, [])

    return (

        <div className={style.wrappMessage}>
            <div className={style.wrappMessage_InfoAndTime}>
                <div>
                    <Avatar src={URL_IMG + avatarPath} size='40' round = {true}/> 
                    <b className={style.authorName}>{user.name}</b>
                </div>
                <div className={style.InfoAndTime__wrappTime}>
                    <span className={style.wrappMessage_InfoAndTime__spanTime}>{timeYear}</span>
                    <span className={style.wrappMessage_InfoAndTime__spanTime}>{timeHour}</span>
                </div>
            </div>

            <div className={style.messageText}>
                {message.message}
            </div>
            
            <div className={style.lineSeparator}> </div>
        </div>

    )
};
    