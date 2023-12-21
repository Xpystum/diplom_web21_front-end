import { useEffect } from "react";
import { request } from "../../Action/request";
import Header from "../../UI/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authToken, loaderUser, reloadUser } from "../../redux/dataState";
import PreloaderSmall from "../../components/PreloaderSmall/PreloaderSmall";
import requestDataInToken from "../../Action/requestDataInToken";
import style from "./CabinetClient.module.sass";

export default function CabinetClient(props){
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let auth = useSelector(state => state.dataState.value.app.auth);
  let select_user = useSelector(state => state.dataState.value.user);
  let user = select_user.data;
  // console.log((auth.token)? 'токен: '+ auth.token : 'токен: null' );
  // console.log(user.length);
    // useEffect(function(){
    //   if(user.length == 0){
    //     requestDataInToken(navigate, dispatch, {url: 'user', parametrs: {token: localStorage.getItem("my_token")}});
        
    //     request('post', 'user', (response)=>{
    //       if(response.status == 200)
    //         dispatch(loaderUser(false));
    //         dispatch(reloadUser(response.data));
    //         console.log(response);
    //     }, {token: localStorage.getItem("my_token")})
        
    //   }
    // }, []);
    useEffect(() => {
      if (user.length === 0) {
        requestDataInToken(navigate, dispatch, {url: 'token'});
        
        request('post', 'user', (response) => {
          if (response.status === 200) {
            dispatch(loaderUser(false));
            dispatch(reloadUser(response.data));
          }
        }, {'id': 3});
      }else{
        dispatch(authToken(localStorage.getItem("my_token")));
        console.log(auth);
      }
    }, []); 

  return (
    <div>
      <Header/>
      <h1>Кабинет Клиента</h1>
      {
        (select_user.loader)? 
        <PreloaderSmall/>
        :
        <div className={style.wrap}>
          <p>Имя: {user.name}</p>
          <p>Почта: {user.email}</p>
          <p>Статус: {user.status}</p>
          <p>Регистрация: {user.updated_at}</p>
        </div>
      }
    </div>
  )
};
