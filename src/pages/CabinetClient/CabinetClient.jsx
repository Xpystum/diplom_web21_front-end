import { useEffect } from "react";
import { request } from "../../Action/request";
import Header from "../../UI/Header/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authToken } from "../../redux/dataState";
import PreloaderSmall from "../../components/PreloaderSmall/PreloaderSmall";
import requestDataInToken from "../../Action/requestDataInToken";


export default function CabinetClient(props){
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let auth = useSelector(state => state.dataState.value.app.auth);
// 1|ynx8xPj9hJZgfYYuiilM9ysPBET2qYJUWwa4UZfXd3f48a34
/*
  useEffect(function(){
    //request('post', 'auth', requestData, {'email': 'test@example.com', 'password': '123'})
    request('post', 'token', ($response)=>{
      console.log($response);
    }, {'token': 'CSt0UmtoyRjkxrf6vkhEPMaMyQjh1kK8LnHbhrAP4685ee75'})
  }, []);
*/

  useEffect(function(){
    requestDataInToken(navigate, dispatch, {url: 'token'});
    // if(!localStorage.getItem("my_token")){
    //     navigate('/sign');
    // }

    // request('post', 'token', ($response)=>{
    //   if(!$response.data){
    //     navigate('/sign');
    //   }

    //   if($response.data){
    //     dispatch(authToken(localStorage.getItem("my_token")));
    //   }
    // }, 
    //     {
    //         'token': localStorage.getItem("my_token"),
    //     }
    // );
 

  }, []);

  function requestData($response){
    console.log($response);
  }

  return (
    <div>
      <Header/>

      {
        (!auth.token)? 
        <PreloaderSmall/>
        :
        'CabinetClient'
      }

    </div>
  )
};
