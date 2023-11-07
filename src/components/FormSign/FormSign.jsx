import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import style from './FormSign.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function FormSign(props) {

  return (
    <div id={style.signWrapp}>
        <form className={style.signWrapp__form}>
          <div className={style.controlName__selection}>

            <div className={style.wrapp_input}>
              <input className={style.input} id="ragio_sing" type='radio' checked value="sign" name="sign"/>
              <label className={style.label} for="ragio_sing">
                Вход с паролем
              </label>
            </div>

            <div className={style.wrapp_input}>
              <input className={style.input} id="ragio_reg" type='radio' value="reg" name="sign"/>
              <label className={style.label} for="ragio_reg" >
                Регистрация
              </label>
            </div>

          </div>

          <div className='controlName'>

            <div>
              <label for="desc_login" >
                Телефон / Логин
              </label>
            </div>

            <div>
              <input id="desc_login" type='radio' value="login" />
            </div>

            <div>
              <span className='comment'>
                Данные, которые вы указывали при регистрации
              </span>
            </div>

          </div>

          <div className='controlName'>

            <div>
              <label for="desc_login" >
                Пароль
              </label>
            </div>

            <div>
              <input id="desc_login" type='radio' value="login" />
            </div>
    
          </div>

          <div className='submitBlock'>
            <Button name={'Войти с Паролем'}/>
            <Link to={'#'}>
              <span className='BrendVK'>
                <FontAwesomeIcon icon={'fa-brands fa-vk'} />
              </span>
              Войти через "Вконтакте"
            </Link>
          </div>

          <div className='passwordRecoveryView'>
            <div className='sign-form__link'>
              <Link to={'#'}>
                
              </Link>
            </div>  
          </div>

        </form>
    </div>
  )
};
