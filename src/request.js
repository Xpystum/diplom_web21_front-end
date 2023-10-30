
import { URL_BACK } from './config';
import axios from 'axios';


   export function request(method, url, callback, data = {}){
       
    // Promise.all([method, `${URL_BACK}${url}`, data])
    // .then(function (response) {
    //     callback(response);
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });  
    axios({
        "method": method,
        "url": `${URL_BACK}${url}`,
        "data": data
    })
    .then(function (response) {
        callback(response);
        // console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}
