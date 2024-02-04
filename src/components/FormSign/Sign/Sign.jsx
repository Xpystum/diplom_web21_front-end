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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.dataState.value.user.favorites);
    const authToken = useSelector((state) => state.dataState.value.app.auth.token);
  
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");
  
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
        status: status,
      });
    }
  
    function authResponse(response) {
      console.log(response);
      if (response.data.code === 201 && response.data.token.trim() !== "") {
        
        localStorage.setItem(response.data.token_name, response.data.token);
  
        navigate("/my");
  
        request("post", "favorites-sinc", (response) => {
          dispatch(authToken(localStorage.getItem("my_token")));
        }, { favorites });
      } else if (response.data.code === 403) {
        setError("Неверный логин или пароль");
      }
    }
  
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