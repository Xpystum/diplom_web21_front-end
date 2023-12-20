import { useNavigate } from "react-router-dom";
import { request } from "./request";
import { authToken } from "../redux/dataState";


export default function requestDataInToken(navigate, dispatch, requestData = {}){

    if(!localStorage.getItem("my_token")){
      navigate('/sign');
    }

    let parametrs = Object.assign({}, {'token': localStorage.getItem("my_token")}, requestData.parametrs);

    
    request('post', requestData.url, ($response)=>{
      $response.console.log('??')
      if(!$response.data){
        navigate('/sign');
      }

      if($response.data){
        console.log(localStorage.getItem("my_token"), 'requestDataInToken');
        dispatch(authToken(localStorage.getItem("my_token")));
      }
    }, parametrs);

}