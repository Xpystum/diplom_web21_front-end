import { Link } from 'react-router-dom';
import style from './FormSign.module.sass';
import { useEffect, useState } from 'react';
import SelectSign from './SelectSign/SelectSign'


export default function FormSign(props) {

  let [stateStatus, stateStatusState] = useState({params: 'sign'});

  function changeStatus(param){
    console.log(param)
    stateStatusState(Object.assign({}, {params: param}) );
  }

  // useEffect(()=>{
  //   // console.log(stateStatus)
  // }, [stateStatus])

  return (
    <div id={style.signWrapp}>
        <form className={style.signWrapp__form}>
          <div className={style.controlName__selection}>

            <div className={style.wrapp_input}>
              <input onChange ={ (evt)=>{  changeStatus(evt.target.value) } } className={style.input} id="ragio_sing" type='radio' value="sign" name="sign" defaultChecked/>
              <label className={style.label} for="ragio_sing">
                Вход с паролем
              </label>
            </div>

            <div className={style.wrapp_input}>
              <input onChange ={ (evt)=>{ changeStatus(evt.target.value) } } className={style.input} id="ragio_reg" type='radio' value="reg" name="sign"/>
              <label className={style.label} for="ragio_reg">
                Регистрация 
              </label>
            </div>

          </div>

          {/* <div className={style.controlName__selection_login}>

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
          </div> */}

          <SelectSign status={stateStatus}/>
          
        </form>

        <div className={style.privacyPolice}>
        При входе вы принимаете&nbsp;
        <Link className={style.privacyPolice_link} to="#">условия использования</Link> 
        &nbsp;сайта и соглашаетесь на обработку 
        персональных данных согласно&nbsp;
        <Link className={style.privacyPolice_link} to="#">политике конфиденциальности</Link>.
        </div>
    </div>
  )
};
