import PreloaderSmall from "../../components/PreloaderSmall/PreloaderSmall";
import { useEffect } from "react";
import { request } from "../../Action/request";
import Header from "../../UI/Header/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authToken } from "../../redux/dataState";
import requestDataInToken from "../../Action/requestDataInToken";
import PostAdd from "../../UI/PostAdd/PostAdd";

export default function Cars(props){
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let auth = useSelector(state => state.dataState.value.app.auth);

  useEffect(function(){
    requestDataInToken(navigate, dispatch, {url: 'ads', parametrs: {x: 13}});
  }, []);

  return (
    <div>
      <Header/>

        {
        (!auth.token)? 
        <PreloaderSmall/>
        :
        // 'cars'
        <PostAdd />
        }
    </div>
  )
};
