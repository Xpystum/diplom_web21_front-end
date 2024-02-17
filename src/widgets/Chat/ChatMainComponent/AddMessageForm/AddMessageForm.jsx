import style from "./AddMessageForm.module.sass";
import { useEffect, useRef, useState, useContext  } from 'react';
import { request } from '../../../../Action/request';
import { Button, Flex, Input, message  } from 'antd';
import { SendOutlined } from "@ant-design/icons";

//context
import { contextChatGroup } from './../Chat/Chat'; 



export default function AddMessageForm(props){
    //ref interval
        const interval = useRef(null);

    const styleSelect = props.styleSelect ?? '';
    //context
        //переменная контекста группы Id
    const {funcSetIdGroup, setStatusMessageFirst, infoFirstMessage} = useContext(contextChatGroup);
    //timer
        //состояние таймера
    let [timer, setTimer] = useState(null);
    //state
        //сообщение на отправку
    const [messageUser, setMessageUser] = useState('');
        //загрузка кнопки
    const [loading, setLoading] = useState(false);
        //status request
    const [statusRequest, SetStatusRequest] = useState({value: null});
        //status Предупреждение
    // const [messageApi, contextHolder] = useState(null);

    //redux-persist - userFrom - юсер отправитель
        //state для отправки в send
    const [userForm, setUserForm] = useState(props.userFrom);
    const [userTo, setuserTo] = useState('');
    const [chatGroup_id, setChatGroup_id] = useState('');

    //Для Таймера
    let timerFunc = useRef(null);

    //статик переменные
    const { TextArea } = Input;
    const defaultZoneValueText = 'Введите Сообщение'; 

    function keyHandler(eventKey){
        
        switch(eventKey.keyCode){

            case 13:{
                
                eventKey.preventDefault();
                sendMessage();
                setMessageUser('');
                break;
            }

            default:{

                break;
            }

        }

    }
       
    const objectError = {

        warningErrorInternet: () => {
            message.warning('Ошибка подключения к интернету.');
        },  


        warningAuthorization: () => {
            message.warning('Ошибка Авторизации, перезайдите в аккаунт.');
        },

        warningCountSymbol: () => {
            message.warning('Введите минимум 3 символа.');
        },

        warningManyRequest: () => {
            message.warning(`Слишком много запросов. Попробуйте через: ${timer} секунд.`);

            if(timerFunc.current == null){
                timerFunc.current = setInterval(function() {
                    setTimer(timer--);
                }, 1000);
            }

        },

        warning: () => {
            message.warning('Неизвестная ошибка.');
        },
    }

    //для удаление таймера и возврата его в default
    function resetTimer(timerServer = timer){
        //timerServer - получать дефолтное значение с сервера
        clearTimeout(timerFunc.current);
        timerFunc.current = null;
        setTimer(timerServer);
    }

    function checkConnection(){

        const pusher = props.pusher;
        
        if(pusher != null){

            switch(pusher.connection.state){
                case 'connected':{

                    setLoading(false);
                    break;
                }
            
                default:{

                    if(!loading){

                        setLoading(true);

                    }

                    break;
                }
            }
        }

    }
    
    //TODO предусмотреть когда при отправке (резко вырубается интернет)
    async function sendMessage(){
        
        setLoading(true);
        const status = await request('POST', 'chat/send', (response)=>{
           
            setLoading(false);
            if ( response.status >= 200 && response.status <= 204 && response.data.lenght != 0)  {
                
                resetTimer();

                if(response.data.chatgroup_id) { 
                    funcSetIdGroup(response.data.chatgroup_id);
                    let chatGroup_id = response.data.chatgroup_id;
                    //установка первых данных о первом сообщение (для подключение к pusher каналу где подставляется chatGroup_id)
                    if(setStatusMessageFirst()){
                        infoFirstMessage(userForm.id, userTo.id, messageUser, chatGroup_id)
                    }
                }

            }
        }, {user_from_id: userForm.id, user_to_id: userTo.id , message: messageUser, chatgroup_id: chatGroup_id}, (error) => {
            
            if(error){

                console.log(error , 'error send')
                setTimer(error.response?.headers['retry-after'])
                //новая пемеренная нужна для того что бы statusRequest изменялся при изменении памяти переменной.

                if(error?.response?.status){

                    SetStatusRequest({value: error.response.status});

                }else{

                    SetStatusRequest({value: error?.code ?? null});
                    setLoading(true);
                    
                }

                // if()
                
            }
        })
        
        //ПРОВЕРИТЬ ПОТОМ НА РАБОТОСПОСОБНОСТЬ
        if(!status){

            // setLoading(false);  
        }
    } 

    useEffect(()=>{
        // могут быть проблемы в условии при кодах ошибки.
        if( statusRequest.value != null && (statusRequest.value <= 200 || statusRequest.value >= 204 || statusRequest.value == 'ERR_NETWORK') ) {
            switch(statusRequest.value){

                case 401:{
                    objectError.warningAuthorization();
                    SetStatusRequest({value: null});
                    console.log('вызов 401');
                    break;
                }

                case 422:{
                    objectError.warningCountSymbol();
                    SetStatusRequest({value: null});
                    setLoading(false);
                    console.log('вызов 422');
                    break;
                }

                case 429:{
                    objectError.warningManyRequest();
                    // console.log(messageApi, 'messageApiErrorAxios');
                    SetStatusRequest({value: null});
                    console.log('вызов 429');
                    break;
                }

                case "ERR_NETWORK":{
                    objectError.warningErrorInternet();
                    // console.log(messageApi, 'messageApiErrorAxios');
                    SetStatusRequest({value: null});
                    console.log('вызов ошибки соединение');
                    break;
                }

    
                default:{
                    objectError.warning();
                    SetStatusRequest({value: null});
                    console.log('вызов default');
                    break;
                }
    
            }
        }
        
        
    }, [statusRequest])

    useEffect(()=>{
        if(timer == 0){
            resetTimer();
        }
    }, [timer])

    useEffect(()=>{

       
        if(interval.current != null){
            clearInterval(interval);
        }

    }, [])

    //Состояние пользователей для send
    useEffect(()=>{

        if(props.pusher != null){

            interval.current = setInterval(checkConnection.bind(props.pusher), 20000);

            return () => {

                if(interval.current != null){
                    clearInterval(interval);
                }
                
            }
        }
        

    }, [props.pusher])

    useEffect(()=>{
        setUserForm(props.userFrom);

    }, [props.userForm])

    useEffect(()=>{
        setuserTo(props.userTo);
    }, [props.userTo])

    useEffect(()=>{
        setChatGroup_id(props.groupChatId);
        
    }, [props.groupChatId])

    return (
        <div className={style.wrapp_messageForm}>
            <TextArea 
                placeholder={defaultZoneValueText}
                allowClear={true}
                name={'messageText'} 
                value={messageUser}
                maxLength={400}
                className={style.textArea}
                onChange={ (evt)=>{ setMessageUser(evt.target.value) } }
                onKeyDown={keyHandler}
                tabIndex={0}
            />
            <Flex vertical gap="small" style={{ width: '100%' }}>
                <Button 
                    size="large"
                    icon={<SendOutlined />}
                    loading={loading}
                    type="primary" 
                    onClick={ ()=>{ sendMessage() } } 
                    block
                    disabled={loading}
                    className={(styleSelect == 'profileGeneral' )? style.buttonMyProfile : style.button}
                    
                >Отправить</Button>
            </Flex>
        </div>
    )
};
  