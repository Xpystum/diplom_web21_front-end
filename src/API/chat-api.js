
const subscribeChannel = [];
const pusher = pusher;
import Pusher from 'pusher-js';

export const ChatAPI = {

    creatPusher(key, authEndpoint, clister, BearerToken ){

        const pusherObject = new Pusher(key, 
        {
        authEndpoint: authEndpoint,
        cluster: clister,
        auth: {
            headers: {
                "Authorization": `Bearer ${BearerToken}`,
                "Access-Control-Allow-Origin": "*"
            }
        },
        });
        
    
    }

}