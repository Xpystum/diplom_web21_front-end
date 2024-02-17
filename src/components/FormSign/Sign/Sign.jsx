import { Link, useNavigate  } from 'react-router-dom';
import Button from '../../../UI/Button/Button';
import style from './Sign.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { request } from '../../../Action/request';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { reloadUser, authToken } from '../../../redux/dataState';
import { loadUser } from '../../../redux/sliceUser';


export default function Sign(props) {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let favorites = useSelector(state => state.dataState.value.user.favorites);
    // let authToken = useSelector(state => state.dataState.value.app.auth.token);

    let [mail, setMail] = useState("");
    let [pass, setPass] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");
  

    function authResponse(response){
        
        if(response.data.code == 201 && response.data.token.trim() != ""){
            console.log(response.data.token_name, 'response.data.token_name');
            localStorage.setItem(response.data.token_name, response.data.token);
            localStorage.setItem("uid", response.data.uid);
            const id = localStorage.getItem("uid");

            request('post', 'user', (responseUser) => {     
                // console.log(responseUser, '_________response');
                if (responseUser.status === 200) {

                    dispatch(reloadUser(responseUser.data));
                    dispatch(loadUser(responseUser.data));

                }
            }, {'id': id} );
            
            request("post", 'favorites-sinc', (response)=>{
                
                dispatch(authToken(localStorage.getItem("my_token")))
                // dispatch(addFavorite(response.data));
                
                    
            }, {"favorites":favorites} )

            navigate("/my");

        }

        if(response.data.code == 403){
            console.log(403, '______ошибка');
        }

    }

    function clickButton() {
      if (mail.trim() === ""){
        setError("Введите почту");
        return;
      }
      if(pass.trim() === ""){
        setError("Введите пароль");
        return;
      }
      
      request("post", "auth", authResponse, {
        email: mail,
        password: pass,
      });
    }

    useEffect(()=>{
      
      document.getElementById("desc_pass").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.code == 'Enter') {
          let loginButton = document.getElementById("loginButton");
          
          if(loginButton){
            loginButton.click();
          }
        }
  
        })

    },[]);
      
    

    return (
      <>
        <div className={style.controlName__selection_login}>
          <div className={style.loginWrapp__label}>
            <label htmlFor="desc_login" className={style.loginWrapp__label_label}>
              Почта
            </label>
          </div>
          <div className={style.loginWrapp__input}>
            <input
              onChange={(event) => setMail(event.target.value)}
              value={mail}
              className={style.loginWrapp__input_input}
              id="desc_login"
              type="text"
              name="login"
            />
          </div>
          <div>
            {(!error)?
                <span className={style.comment}>
                    Данные, которые вы указывали при регистрации
                </span>
                :
                <span className={style.comment__error}>
                    {error && (
                        <div className={style.error}>
                        <span>{error}</span>
                        </div>
                    )} 
                </span>
                
            }
            
          </div>
        </div>
  
        <div className={style.controlName__selection_login}>
          <div className={style.loginWrapp__label}>
            <label
              htmlFor="desc_pass"
              className={style.loginWrapp__label_label}
            >
              Пароль
            </label>
          </div>
          <div className={style.loginWrapp__input}>
            <input
              onChange={(event) => setPass(event.target.value)}
              value={pass}
              id="desc_pass"
              type="password"
              className={style.loginWrapp__input_input}
              name="pass"
            />
          </div>
        </div>
  
        <div className={style.submitBlock}>
          <Button
            method={clickButton}
            name={"Войти с паролем"}
            type={"button"}
            name_class={"button__form_sign"}
            id={'loginButton'}
          />
          <Link className={style.link_vk} to={"#"}>
            <span className={style.brendVK__wrapp}>
              <FontAwesomeIcon
                className={style.brendVK__wrapp_icon}
                icon={faVk}
              />
            </span>
            Войти через "Вконтакте"
          </Link>
        </div>
  
        <div className={style.passwordRecoveryView}>
          <Link className={style.sign_form__link} to={"#"}>
            напомнить пароль
          </Link>
        </div>
      </>
    );
  }