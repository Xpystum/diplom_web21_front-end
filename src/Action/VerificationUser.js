// import { useDispatch, useSelector } from "react-redux";
// import { authToken } from "../redux/dataState";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { request } from "./request";


export function VerificationUser(navigate, dispatch, request, authToken){
    // let dispatch = useDispatch();
    // const navigate = useNavigate();
    // useEffect(function(){
        
        
    //     if(!localStorage.getItem("my_token")){
    //         navigate('/sign');
    //     }
    //     dispatch(authToken(localStorage.getItem("my_token")));
    //     console.log(1);
    // },[]);


    // let dispatch = useDispatch();
    // let navigate = useNavigate();
    if(!localStorage.getItem("my_token")){
        navigate('/sign');
    }
    
    request('post', 'token', ($response)=>{
      if(!$response.data){
        navigate('/sign');
      }

      if($response.data){
        dispatch(authToken(localStorage.getItem("my_token")));
      }
    }, 
        {
            'token': localStorage.getItem("my_token"),
        }
    );

}