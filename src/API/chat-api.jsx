
const subscribeChannel = [];
import Pusher from 'pusher-js';

export const ChatAPI = {

    creatPusher(){

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
    
    
    }

}