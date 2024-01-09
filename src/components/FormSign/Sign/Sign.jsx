import { Link, useNavigate  } from 'react-router-dom';
import Button from '../../../UI/Button/Button';
import style from './Sign.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { request } from '../../../Action/request';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../../redux/dataState';
import { authToken } from "../../../redux/dataState";

export default function Sign(props) {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let favorites = useSelector(state => state.dataState.value.user.favorites);
    let authToken = useSelector(state => state.dataState.value.app.auth.token);

    let [mail, mailState] = useState(null);
    let [pass, passState] = useState(null);

    function clickButton(){
        request('post', 'auth', authResponse, 
        {
            'email': mail,
            'password' : pass
        })
    }

    function authResponse($response){
        
        if($response.data.code == 201 && $response.data.token.trim() != ""){
            localStorage.setItem($response.data.token_name, $response.data.token);
            localStorage.setItem("uid", $response.data.uid);
            
            navigate("/my");

            request("post", 'favorites-sinc', (response)=>{
                
                dispatch(authToken(localStorage.getItem("my_token")))
                // dispatch(addFavorite(response.data));
                
                    
            }, {"favorites":favorites} )
        }

        if($response.data.code == 403){
            console.log(403, '______ошибка');
        }

    }


  return (
    <>
       
        <div className={style.controlName__selection_login}>

            <div className={style.loginWrapp__label}>
                <label htmlFor="desc_login" className={style.loginWrapp__label_label} >
                    Почта
                </label>
            </div>

            <div className={style.loginWrapp__input}>
                <input onChange={(event) => {mailState(event.target.value)}} className={style.loginWrapp__input_input} id="desc_login" type='text' name="login"/>
            </div>

            <div>
                <span className={style.comment}>
                    Данные, которые вы указывали при регистрации
                </span>
            </div>

        </div>

        <div className={style.controlName__selection_login}>

        <div className={style.loginWrapp__label}>
            <label htmlFor="desc_pass"  className={style.loginWrapp__label_label}  >
                Пароль
            </label>
        </div>

        <div className={style.loginWrapp__input}>
            <input onChange={(event) => {passState(event.target.value)}} id="desc_pass" type='password' className={style.loginWrapp__input_input} name="pass"/>
        </div>

        </div>

        <div className={style.submitBlock}>
        <Button method={clickButton} name={'Войти с паролем'} type={'button'} name_class={'button__form_sign'}/>
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