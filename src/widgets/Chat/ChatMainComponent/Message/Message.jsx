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

    //выбор стилей
    const styleSelect = props.styleSelect ?? '';


    const message = props.message ?? message1;
    const user = message.user ?? null;
    const avatarPath = user?.pathAvatar?.path?.resource ?? '';
    const timeYear = message.timeYear ?? '';
    const timeHour = message.timeHour ?? '';
    

    useEffect(()=>{
        // console.log(message, ' user');
    }, [])

    return (

        <div className={(styleSelect == 'profileGeneral' )? style.wrappMessageMyProfile : style.wrappMessage}>
            <div className={(styleSelect == 'profileGeneral' )? style.wrappMessage_InfoAndTimeMyProfile : style.wrappMessage_InfoAndTime}>
                <div className={ (styleSelect == 'profileGeneral' )? style.blockwrappAvatar : ''}>
                    <Avatar name={user.name} src={URL_IMG + avatarPath} size='40' round={true}/> 
                    <b className={(styleSelect == 'profileGeneral' )? style.authorNameMyProfile : style.authorName}>{user.name}</b>
                </div>
                <div className={(styleSelect == 'profileGeneral' )? style.InfoAndTime__wrappTimeMyProfile : style.InfoAndTime__wrappTime}>
                    <span className={(styleSelect == 'profileGeneral' )? style.wrappMessage_InfoAndTime__spanTimeMyProfile : style.wrappMessage_InfoAndTime__spanTime}>{timeYear}</span>
                    <span className={(styleSelect == 'profileGeneral' )? style.wrappMessage_InfoAndTime__spanTimeMyProfile : style.wrappMessage_InfoAndTime__spanTime}>{timeHour}</span>
                </div>
            </div>

            <div className={(styleSelect == 'profileGeneral' )? style.messageTextMyProfile : style.messageText}>
                {message.message}
            </div>
            
            <div className={(styleSelect == 'profileGeneral' )? style.lineSeparatorMyProfile : style.lineSeparator}></div>
        </div>

    )
};
    