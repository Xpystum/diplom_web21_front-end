import { URL_BACK } from '../config';
import axios from 'axios';


export function request(method, url, callback, data = {}){
    let promise = axios({
        "method": method,
        "url": `${URL_BACK}${url}`,
        "data": data
    })
    .then(function (response) {
        callback(response);
        return true;
    })
    .catch(function (error) {
        console.log(error);
        return false;
    });
    
    return promise;
}