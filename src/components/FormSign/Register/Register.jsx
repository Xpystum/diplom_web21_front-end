import { Link } from 'react-router-dom';
import Button from '../../../UI/Button/Button';
import style from './Register.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { request } from '../../../Action/request';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function SelectSign(props) {
    let methodButton = props.buttonMethod;
    let [mail, mailState] = useState(null);
    let [pass, passState] = useState(null);
    let [passRepeat, passRepeatState] = useState(null);
    let [statusSpin, statusSpinState] = useState(false);

    // для библиотеки https://www.npmjs.com/package/react-toastify
    const notifySucces = () => toast.success('🏠 Регистрация Успешна!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const notifyError = () => toast.error('🏠 Ошибка Регистрации!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    // вариант с задержкой
    function startRequest(){

        request('post', 'register', ($response)=>{
            statusSpinState(false);
        }, {'email': mail ,
        'pass' : pass ,
        'passRepeat' : passRepeat,}).then(function(isSaved) {
            if(isSaved){
                notifySucces();
                statusSpinState(false);
            }
            else{
                notifyError();
                statusSpinState(false);
            }
        });
        
        
    }

    function clickButton(){
        statusSpinState(true);
        setTimeout(startRequest, 3000);
    }

    //вариант 2 без (задержки)
    // function clickButton(){
    //     statusSpinState(true);
    //     statusSpinState(request('post', 'register', ($response)=>{
    //         statusSpinState(false);
    //     }, {'email': mail ,
    //     'pass' : pass ,
    //     'passRepeat' : passRepeat,}))
    // }
    
    

  return (
    <>
        <div className={style.controlName__selection_login}>

            <div className={style.loginWrapp__label}>
                <label htmlFor="desc_login" className={style.loginWrapp__label_label} >
                    Почта
                </label>
            </div>

            <div className={style.loginWrapp__input}>
                <input  onChange={(event) => {mailState(event.target.value)}} className={style.loginWrapp__input_input} id="desc_login" type='email' name='email' required/>
            </div>

        </div>

        <div className={style.controlName__selection_login}>

            <div className={style.loginWrapp__label}>
                <label htmlFor="desc_pass" className={style.loginWrapp__label_label}  >
                    Пароль
                </label>
            </div>

            <div className={style.loginWrapp__input}>
                <input onChange={(event) => {passState(event.target.value)}} id="desc_pass" type='password' className={style.loginWrapp__input_input} name="pass" required   />
            </div>

        </div>

        <div className={style.controlName__selection_login}>

            <div className={style.loginWrapp__label}>
                <label htmlFor="desc_pass_repeat" className={style.loginWrapp__label_label}  >
                    Повторите пароль
                </label>
            </div>

            <div className={style.loginWrapp__input}>
                <input onChange={(event) => {passRepeatState(event.target.value)}} id="desc_pass_repeat" type='password' className={style.loginWrapp__input_input} name="passRepeat"/>
            </div>

        </div>

        <div className={style.submitBlock}>

        <Button  spin={statusSpin} method={clickButton} name={'Зарегистрироваться'} type={'button'} name_class={'button__form_sign'}> 
           
        </Button>

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

        
        <ToastContainer className={style.Toastify__toast_body}/>


        </div>
       
    </>
  )
};