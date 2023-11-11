import { useEffect } from "react";
import { request } from "../../Action/request";
import Header from "../../UI/Header/Header";

export default function CabinetClient(props){
// 1|ynx8xPj9hJZgfYYuiilM9ysPBET2qYJUWwa4UZfXd3f48a34

  useEffect(function(){
    //request('post', 'auth', requestData, {'email': 'test@example.com', 'password': '123'})
    request('post', 'token', ($response)=>{
      console.log($response);
    }, {'token': 'CSt0UmtoyRjkxrf6vkhEPMaMyQjh1kK8LnHbhrAP4685ee75'})
  }, []);



  function requestData($response){
    console.log($response);
  }

  return (
    <div>


      <Header/>
      CabinetClient


    </div>
  )
};
