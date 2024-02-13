import style from "./AddMessageForm.module.sass";
import { useEffect, useRef, useState, useContext  } from 'react';
import { request } from '../../../../Action/request';
import { Button, Flex, Input, message  } from 'antd';
import { SendOutlined } from "@ant-design/icons";

//context
import { contextChatGroup } from './../Chat/Chat'; 



export default function AddMessageForm(props){

    //context
        //переменная контекста группы Id
    const funcSetIdGroup = useContext(contextChatGroup);
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
       
    const objectError = {
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
    
    //TODO предусмотреть когда при отправке (резко вырубается интернет)
    async function sendMessage(){
        
        setLoading(true);
        const status = await request('POST', 'chat/send', (response)=>{

            setLoading(false);
            if ( response.status >= 200 && response.status <= 204 && response.data.lenght != 0)  {
                resetTimer();

                if(response.data.chatgroup_id) { 
                    console.log(response.data.chatgroup_id , 'response.data.chatgroup_id')
                    funcSetIdGroup(response.data.chatgroup_id);
                    let chatgroup_id = response.data.chatgroup_id;
                    //после получение groupId наш broadcat подпишется на канал и будет получать первое сообщение в realTime
                    request('POST', 'chat/send', (response) => {

                        if ( response.status >= 200 && response.status <= 204 && response.data.lenght != 0)  {
                            console.log('вызов двойного request и response.data.chatgroup_id', chatgroup_id,);
                            console.log(response.data);
                        }

                    }, {user_from_id: userForm.id, user_to_id: userTo.id , message: messageUser, chatgroup_id: chatgroup_id}, (error) => {
                        
                      

                    });

                }

                console.log(response.data, ' response.dataresponse.dataresponse.dataresponse.data');
            }
        }, {user_from_id: userForm.id, user_to_id: userTo.id , message: messageUser, chatgroup_id: chatGroup_id}, (error) => {
            
            if(error){
                setTimer(error.response.headers['retry-after'])
                console.log(error, 'errorerrorerrorerror response.dataresponse.dataresponse.dataresponse.data')
                //новая пемеренная нужна для того что бы statusRequest изменялся при изменении памяти переменной.
                SetStatusRequest({value: error.response.status});
            }
        })
        
        //вывести ошибку минимум 3 буквы.
        // console.log(status, 'status error');
        if(!status){
            setLoading(false);  
        }
    }


    useEffect(()=>{
        // могут быть проблемы в условии при кодах ошибки.
        if( statusRequest.value != null && (statusRequest.value <= 200 || statusRequest.value >= 204) ) {
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

    //Состояние пользователей для send

    useEffect(()=>{
        setUserForm(props.userFrom);
        // console.log(props.userFrom , 'props.userForm');
    }, [props.userForm])

    useEffect(()=>{
        setuserTo(props.userTo);
        // console.log(props.userTo , 'props.userTo');
    }, [props.userTo])

    useEffect(()=>{
        setChatGroup_id(props.groupChatId);
        // console.log(props.groupChatId , 'groupChatId');
    }, [props.groupChatId])



    return (
        <div className={style.wrapp_messageForm}>
            {
                // (statusRequest)? 
                // contextHolder
                // :
                // ''
            }
            <TextArea 
                placeholder={defaultZoneValueText}
                allowClear={true}
                name={'messageText'} 
                value={messageUser}
                maxLength={400}
                className={style.textArea}
                onChange={ (evt)=>{ setMessageUser(evt.target.value) } }
                

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
                    className={style.button}
                >Отправить</Button>
            </Flex>
        </div>
    )
};
  