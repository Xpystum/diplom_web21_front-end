
import { URL_BACK } from './config';
import axios from 'axios';


   export function request(method, url, callback, data = {}){
    // let p1 = method;
    // let p2 = `${URL_BACK}${url}`;
    // let p3 = callback;
    // let p4 = [data = {}];
    // let arr = [method, url, callback, data = {}];
    // axios({
    //         "method": method,
    //         "url": `${URL_BACK}${url}`,
    //         "data": data
    //     })
    

    Promise.all(method, url, callback, data = {})
    .then(function (response) {
        callback(response);
        // console.log(method, url, callback, data = {});
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
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
}
