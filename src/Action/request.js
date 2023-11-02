import { URL_BACK } from '../config';
import axios from 'axios';


export function request(method, url, callback, data = {}){
    axios({
        "method": method,
        "url": `${URL_BACK}${url}`,
        "data": data
    })
    .then(function (response) {
        callback(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}