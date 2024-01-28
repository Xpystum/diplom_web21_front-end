import { useNavigate } from "react-router-dom";
import { request } from "./request";
import { authToken } from "../redux/dataState";


export default function requestDataInToken(navigate, dispatch, requestData = {}){

    if(!localStorage.getItem("my_token")){
      navigate('/sign');
    }

    let parametrs = Object.assign({}, {'token': localStorage.getItem("my_token")}, requestData.parametrs);

    
    request('post', requestData.url, (response)=>{
      if(!response.data){
        navigate('/sign');
      }

      if(response.data){
        dispatch(authToken(localStorage.getItem("my_token")));
      }
    }, parametrs);

}