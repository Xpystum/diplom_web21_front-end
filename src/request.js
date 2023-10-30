
import { URL_BACK } from './config';
import axios from 'axios';


   export function request(method, url, callback, data = {}){

     // let p4 = axios[data = {}];
    // let arr = [method, url, callback, data = {}];
    axios({
            "method": method,
            "url": `${URL_BACK}${url}`,
            "data": data
        })
    // let p1 = axios({"method": method,});
    // let p2 = axios({"url": `${URL_BACK}${url}`});
    // let p3 = axios({"data": data});
   
    

    // Promise.all([p1, p2, p3])
    .then(function (response) {
        callback(response);
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });  
    // axios({
    //     "method": method,
    //     "url": `${URL_BACK}${url}`,
    //     "data": data
    // })
    // .then(function (response) {
    //     callback(response);
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
}
