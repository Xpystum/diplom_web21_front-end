import { useEffect, useState } from "react";
import { request } from "../../Action/request";
import Header from "../../UI/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authToken, loaderUser, reloadUser } from "../../redux/dataState";
import PreloaderSmall from "../../components/PreloaderSmall/PreloaderSmall";
import requestDataInToken from "../../Action/requestDataInToken";
import Main from "./Main/Main";

export default function CabinetClient(props){
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let select_user = useSelector(state => state.dataState.value.user);
  let user = select_user.data;
  let time;

  let [id, setId] = useState(localStorage.getItem("uid"));

  if(user.created_at){
    let userTime = user.created_at;
    time = userTime.split('T');
    time = time[0].split('-').join('')
  }  
  
  
  
  useEffect(() => {

    
    if (user.length === 0 || localStorage.getItem("uid") != user.id) {
      dispatch(loaderUser(true));
      requestDataInToken(navigate, dispatch, {url: 'token'});
       
      request('post', 'user', (response) => {
        if (response.status === 200) {
          dispatch(loaderUser(false));
          dispatch(reloadUser(response.data));
        }
      }, {'id': id});
    }
    else{
      dispatch(authToken(localStorage.getItem("my_token")));
      
    }
  }, [id]);  

  return (
    <div>
      <Header user={user}/>
      {
        (select_user.loader)? 
        <PreloaderSmall/>
        :
        <Main user={user} time={time}/>
      }
    </div>
  )
};
