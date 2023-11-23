import { useEffect } from "react";
import { request } from "../../Action/request";
import Header from "../../UI/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authToken, loaderSelectUser, reloadSelectUser, reloadUsers } from "../../redux/dataState";
import PreloaderSmall from "../../components/PreloaderSmall/PreloaderSmall";
import requestDataInToken from "../../Action/requestDataInToken";
import style from "./CabinetClient.module.sass";

export default function CabinetClient(props){
  let dispatch = useDispatch();

  // времянка
  let links = 1;
  
  
  const navigate = useNavigate();
  
  let users = useSelector(state => state.dataState.value.users.data);
  let auth = useSelector(state => state.dataState.value.app.auth);
  let select_user = useSelector(state => state.dataState.value.select_user);
  let user = select_user.data

  let responseSelectUser = (response)=>{
    if(response.status == 200)
        dispatch(reloadSelectUser(response.data))
  }
  
    useEffect(function(){
      if(user.length == 0){
        requestDataInToken(navigate, dispatch, {url: 'token'});
        request('post', 'users', (response) => {
          if(response.status == 200)
              dispatch(reloadUsers(response.data))
        },{});
        request('post', 'user', (response) => {
          if (response.status === 200) {
            dispatch(loaderSelectUser(false));
            dispatch(reloadSelectUser(response.data));
          }
        }, {});
        if(users.length == 0){
          request("post", 'user', responseSelectUser, {"id": links})
        } 
        else{
          users.forEach(user => {
              // 
              if(user.id == links){
                  dispatch(reloadSelectUser(user))
                  return 0;
              }
          });
        }
      }
    }, []);  
  
  function requestData($response){
    console.log($response);
  }

  return (
    <div>
      <Header/>
      {
        (!auth.token )? 
        <PreloaderSmall/>
        :
        <div className={style.wrap}>
          <h1>Кабинет Клиента</h1>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.status}</p>
          <p>{user.updated_at}</p>

        </div>
      }
    </div>
  )
};
