
import Pusher from 'pusher-js';


export class Class_chatAPI {

  _PusherObject = null;
  _PusherLogToConsole = null;
  _SubscriptionChannel = []
  _interval = null //интервал для проверки соединение

  constructor(key, authEndpoint, cluster,  BearerToken ) {

    const pusher = new Pusher(key, 
    {
      authEndpoint: authEndpoint,
      cluster: cluster,
      auth: {
          headers: {
              "Authorization": `Bearer ${BearerToken}`,
              "Access-Control-Allow-Origin": "*"
          }
      },
    });

    this._PusherObject = pusher;
    // console.log('подписочка');
    // console.log(this._PusherObject , 'this._PusherObject');

  }

  get pusher() {
    //свойства только для тчение (создать пушер можно только при создании экземпляра класса)
    return this._PusherObject;
  }

  get state() {

    return this._PusherObject.connection.state;

  }

  subscribeChannel(nameChannel, prefixNameChannel = '') {

    const channel = this._PusherObject.subscribe(nameChannel + prefixNameChannel);
    this._SubscriptionChannel.push(channel);
    
  }

  unsubscribeChannelFromChannel(nameChannel, prefixNameChannel = ''){

    const channelName = nameChannel + prefixNameChannel;
    this._PusherObject.unsubscribe(channelName);
    this._SubscriptionChannel =  this._SubscriptionChannel.filter(object => object.name !== channelName);

  }

  /**
   * возвращает callback функцию в которое будет,
   * приходит изменение при событии и использовании websocket
   * 
   * @param {string} nameSubscribe название событие 
   * @returns functionCallback возврат callback func
   */

  subscribeEventChannel(channelName, nameSubscribe, functionCallBack){
    
    const channel =  this._SubscriptionChannel.find(channel => channel.name === `${channelName}`);
    channel.bind(`${nameSubscribe}`, function(data) {
      //передача значение при событии
      functionCallBack(data);
    });
    
  }

  isExisistChannel(channelName){
    const channel = this._SubscriptionChannel.find(channel => channel.name === `${channelName}`);

    if(channel) { 
      return true
    }else{
      return false;
    }

  }

  disconnectPusher(){

    this._PusherObject.disconnect();
    this._SubscriptionChannel = [];
    if(this._interval != null){
      clearInterval(this._interval);
      this._interval = null;
    }

  }

  //получение ошибок в консоль
  turnOnErrorConsole(){

    this._PusherObject.connection.bind("connecting", function () {
      console.log('соединение');
    });

    this._PusherObject.connection.bind("unavailable", function () {
      console.log('соединение не установлено');
    });

    this._PusherObject.connection.bind("connected", function () {
      console.log('соединение установлено');
    });

    this._PusherObject.connection.bind("error", function (error) {
      console.error("Ошибка соединение", error);
    });

    this._PusherObject.connection.bind("state_change", function (states) {
      console.error("Состояние соединение: ", states);
    });

    console.log(this._PusherObject.connection.state, ':____состояние соединение');

  }

  checkstatusInterval(func, time = 5000){
    this._interval = setInterval(func, time);
  }

  clearInterval(){

    if(this._interval != null){
      clearInterval(this._interval);
      this._interval = null;
    }

  }

}
