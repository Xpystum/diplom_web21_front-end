import { useNavigate } from "react-router-dom";
import { request } from "./request";
import { authToken } from "../redux/dataState";



export default function requestToken(dispatch){

    if(!localStorage.getItem("my_token")){
        dispatch(authToken(''));
    }

    request('post', 'token', ($response)=>{
      if(!$response.data){
        dispatch(authToken(''));
        return false;
      }

      if($response.data){
        // dispatch(authToken(localStorage.getItem("my_token")));
        console.log($response.data);
        return true;
      }
    }, {'token': localStorage.getItem("my_token")});

}