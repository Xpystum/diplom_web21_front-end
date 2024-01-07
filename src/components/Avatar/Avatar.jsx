import { Link } from 'react-router-dom';
import style from './Avatar.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Avatar(){
    return(
        <div>
            <div className={style.wrappProfile}>
                <div className={style.wrapp_avatar}>
                    <div className={style.wrappAvatar}>
                        <div className={style.wrappAvatar__block}>

                        </div> 
                    </div >
                </div>
            </div>
        </div>
    )
}