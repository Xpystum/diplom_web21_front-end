import { useEffect } from "react";
import { request } from "../../Action/request";
import Header from "../../UI/Header/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authToken, reloadUser } from "../../redux/dataState";
import PreloaderSmall from "../../components/PreloaderSmall/PreloaderSmall";
import requestDataInToken from "../../Action/requestDataInToken";


export default function CabinetClient(props){
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let auth = useSelector(state => state.dataState.value.app.auth);
  let user = useSelector(state => state.dataState.value.user.data);
  useEffect(function(){
    requestDataInToken(navigate, dispatch, {url: 'token'});
    request('post', 'user', (response) => {
      if (response.status === 200) {
        dispatch(reloadUser(response.data));
      }
    }, {});
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
        <div>
          CabinetClient 
          {console.log(user)}
        </div>
      }
    </div>
  )
};
