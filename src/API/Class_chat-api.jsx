
import Pusher from 'pusher-js';


export class Class_chat_API {

  _PusherObject = null;
  PusherLogToConsole = null;

  constructor(key, authEndpoint, BearerToken, cluster) {

    const pusher = new Pusher('78ea49788a2c81fd0c1a', 
    {
    authEndpoint: 'http://127.0.0.1:8000/api/custom/broadcasting/auth',
    cluster: 'eu',
    auth: {
        headers: {
            "Authorization": `Bearer ${(localStorage.getItem("my_token"))? localStorage.getItem("my_token") : ''}`,
            "Access-Control-Allow-Origin": "*"
        }
    },
    });

    this._PusherObject = pusher;


  }

  get pusher() {
    //свойства только для тчение (создать пушер можно только при создании экземпляра класса)
    return this._PusherObject;
  }

}



Pusher.logToConsole = false;  



setPusher(pusher);