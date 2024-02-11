import Avatar from 'react-avatar';
import style from './MainUserChat.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { URL_IMG } from '../../../../config';

export default function MainUserChat({userProps}){
    const user = userProps;
    const avatarPath = user.pathAvatar?.path.resource

  return (
    <div className={style.wrappMainUserChat}>
        <div className={style.avatarUserWrapp}>
            <Avatar name={user.name} src={URL_IMG + avatarPath} size='40' round={true}/> 
            <div className={style.blockInfoUser}>
                <div className={style.userName}>
                    {user.name}
                </div>
                <div className={style.statusUser}>
                    <FontAwesomeIcon className={style.iconStyle} fixedWidth size='1x' icon="fa-solid fa-circle" />
                    <span className={style.status}>Online</span>
                </div>
            </div>
        </div>
    </div>
  )

};
  