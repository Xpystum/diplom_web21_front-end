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
