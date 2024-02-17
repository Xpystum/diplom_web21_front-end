import Avatar from 'react-avatar';
import style from './MainUserChat.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { URL_IMG } from '../../../../config';


//context
import React, { useContext, useEffect } from 'react';

export default function  MainUserChat(props) {
    

    //context
    const styleSelect = props.styleSelect ?? '';
    const user = props.user;
    const avatarPath = user?.pathAvatar?.path?.resource ?? ''

    useEffect(()=>{

    }, [props])

  return (
    <>
        <div className={ (styleSelect !=  'selectUser')? ( (styleSelect == 'profileGeneral' )? style['wrappMainUserChatMyProfile'] : style['wrappMainUserChat'] )
        : style['wrappMainUserSelectChatUser'] 
        }>
            <div className={(styleSelect !=  'selectUser')? style['avatarUserWrapp'] : style['infoBlockWrapp'] }>
                <Avatar name={user?.name} src={URL_IMG + avatarPath} size='40' round={true}/> 
                <div className={(styleSelect !=  'selectUser')? style['blockInfoUser'] : style['blockInfoUser']}>
                    <div className={(styleSelect !=  'selectUser')? style['userName'] : style['userName']}>
                        {   
                            // 'какое то имя, какого то чувака'
                            user?.name
                        }
                    </div>
                    <div className={(styleSelect !=  'selectUser')? style['statusUser'] : style['statusUser']}>
                        <FontAwesomeIcon className={(styleSelect !=  'selectUser')? style['iconStyle'] : style['iconStyle']} fixedWidth size='1x' icon="fa-solid fa-circle" />
                        <span className={(styleSelect !=  'selectUser')? style['status'] : style['status']}>Online</span>
                    </div>
                </div>
            </div>
            {
                styleSelect ==  'selectUser'?
                <div className={style.wrappIcon}>
                    <div className={style.timeAndCheckIcon}>
                        <FontAwesomeIcon className={style.checkIcon} icon="fa-solid fa-check" />
                        <div className={style.time}>
                            <span>24:23</span>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon className={style.burgerButton} icon="fa-solid fa-bars" />
                    </div>
                </div>
                :
                ""
            }
        </div>
        
        {
            styleSelect ==  'selectUser'?
            <div className={style.lineSelectUser}></div>
            :
            ""
        }
    </>
  )

};

  