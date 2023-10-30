
import { URL_BACK } from './config';
import axios from 'axios';


   export function request(method, url, callback, data = {}){
    let p1 = new Promise(function(resolve, reject){
        axios({
        "method": method,
    })
        resolve(method);
        console.log('1');
    })   
    p1.then(response =>{
        console.log(method);
         callback(response);
    })
    
    let p2 = new Promise(function(resolve, reject){
        axios({
            "url": `${URL_BACK}${url}`
    })
        resolve(url);
        console.log('2');
    })   
    p2.then(response =>{
        console.log(url);
        callback(response);
    })
    
    let p3 = new Promise(function(resolve, reject){
        axios({
            "data": data
    })
        resolve(data);
        console.log('3');
    })   
    p3.then(response =>{
        console.log(data);
        callback(response);
    })
    

    
    Promise.all([p1, p2, callback, p3]).then( () =>{
        callback();
        console.log(20);
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
    //     // console.log(response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
}
