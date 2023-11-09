import { Link } from 'react-router-dom';
import Button from '../../../UI/Button/Button';
import style from './SelectSign.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk } from '@fortawesome/free-brands-svg-icons';



export default function SelectSign(props) {

  let status = props.status.params ?? 'sign';

  return (
    <>

        <div className={style.controlName__selection_login}>

        </div>
        
        { 
            (status == 'sign')? 
                <>
                    <div className={style.controlName__selection_login}>

                        <div className={style.loginWrapp__label}>
                            <label for="desc_login" className={style.loginWrapp__label_label} >
                                Телефон / Логин
                            </label>
                        </div>

                        <div className={style.loginWrapp__input}>
                            <input className={style.loginWrapp__input_input} id="desc_login" type='text'/>
                        </div>

                        <div>
                            <span className={style.comment}>
                                Данные, которые вы указывали при регистрации
                            </span>
                        </div>

                    </div>

                    <div className={style.controlName__selection_login}>

                    <div className={style.loginWrapp__label}>
                        <label for="desc_pass" className={style.loginWrapp__label_label}  >
                            Пароль
                        </label>
                    </div>

                    <div className={style.loginWrapp__input}>
                        <input id="desc_pass" type='password' value="" className={style.loginWrapp__input_input}/>
                    </div>

                    </div>
                </>
            : null
        }
            
        {   
            (status == 'reg')? 
                <div className={style.controlName__selection_login}>
                    <div className={style.loginWrapp__label}>
                        <label for="desc_login" className={style.loginWrapp__label_label} >
                            Телефон
                        </label>
                    </div>

                    <div className={style.loginWrapp__input}>
                        <input className={style.loginWrapp__input_input} id="desc_login" type='text'/>
                    </div>
                </div>
            : null
        }  
        

        <div className={style.submitBlock}>
        <Button name={'Войти с паролем'} type={'submit'} name_class={'button__form_sign'}/>
        <Link className={style.link_vk} to={'#'}>
        <span className={style.brendVK__wrapp}>
            <FontAwesomeIcon className={style.brendVK__wrapp_icon} icon={faVk}/>
        </span>
        Войти через "Вконтакте"
        </Link>
        </div>

        <div className={style.passwordRecoveryView}>
        <Link className={style.sign_form__link} to={'#'}>
            напомнить пароль
        </Link>
        </div>
    </>
  )
};