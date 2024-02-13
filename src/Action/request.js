import { URL_BACK } from '../config';
import axios from 'axios';


export function request(method, url, callback, data = {}, 
    errorCallback = function () {} ,
){
  
    const token = localStorage.getItem("my_token");
    // console.log(token);  
    //при каждем запросе будет отправлять токен (middlware на сервере уже будет проверять доступ
    const promise = axios({
        "method": method,
        "url": `${URL_BACK}${url}`,
        "data": data,
        headers: {
            'Authorization': `Bearer ${(token)? token : ''}`
        },
    })  
    .then(function (response) {
        callback(response);
        return true;
    })
    .catch(function (error) {
        errorCallback(error);
        console.log(error);
        return false;
    });

   
    return promise;
}