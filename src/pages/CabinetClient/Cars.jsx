import PreloaderSmall from "../../components/PreloaderSmall/PreloaderSmall";
import { useEffect } from "react";
import { request } from "../../Action/request";
import Header from "../../UI/Header/Header";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { authToken } from "../../redux/dataState";

export default function Cars(props){
    let dispatch = useDispatch();
  const navigate = useNavigate();
  let auth = useSelector(state => state.dataState.value.app.auth);

  useEffect(function(){
    //VerificationUser();
    if(!localStorage.getItem("my_token")){
        navigate('/sign');
    }




    request('post', 'ads', ($response)=>{
      if(!$response.data){
        navigate('/sign');
      }

      if($response.data){
        dispatch(authToken(localStorage.getItem("my_token")));
      }

      console.log($response.data);


    }, 
        {
            'token': localStorage.getItem("my_token"),
        }
    );
 

  }, []);

  return (
    <div>
      <Header/>

        {
        (!auth.token)? 
        <PreloaderSmall/>
        :
        'cars'
        }
    </div>
  )
};
