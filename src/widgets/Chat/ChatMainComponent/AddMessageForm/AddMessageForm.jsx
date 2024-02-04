import style from "./AddMessageForm.module.sass";
import { useEffect, useState } from 'react';
import { request } from '../../../../Action/request';
import { Button, Flex, Input, message  } from 'antd';
import { SendOutlined } from "@ant-design/icons";


export default function AddMessageForm({userProps}){

    
    //state
        //сообщение на отправку
    const [messageUser, setMessageUser] = useState('');
        //загрузка кнопки
    const [loading, setLoading] = useState(false);
        //status request
    const [statusRequest, SetStatusRequest] = useState(null);
        //status Предупреждение
    const [messageApi, contextHolder] = message.useMessage();

    //redux-persist - props
    const user = userProps;

    //статик переменные
    const { TextArea } = Input;
    const defaultZoneValueText = 'Введите Сообщение';   

    const warningAuthorization = () => {
        message.warning('Ошибка Авторизации, перезайдите в аккаунт.')
    };

    const warningCountSymbol = () => {
        message.warning('Введите минимум 3 символа.')
    };

    const warning = () => {
        message.warning('Неизвестная ошибка.')
    };
    
    //TODO предусмотреть когда при отправке (резко вырубается интернет)
    function sendMessage(){
        setLoading(true);
        const status = request('POST', 'chat/send', (response)=>{

            setLoading(false);
            SetStatusRequest(response.status);
            if ( response.status >= 200 && response.status <= 204 && response.data.lenght != 0)  {
                // console.log(response.data, ' ответ от request после входа в цикл');
            }
        }, {user_id: user.id, message: messageUser}, )

        


        //вывести ошибку минимум 3 буквы.
        console.log(status, 'status error');
        if(!status){
            setLoading(false);
        }
    }

    useEffect(()=>{

        // могут быть проблемы в условии про кодах.
        console.log(statusRequest , 'statusRequest')
        if( statusRequest != null && (statusRequest <= 200 && statusRequest >= 204) ) {
            switch(statusRequest){

                case 401:{
                    warningAuthorization();
                    SetStatusRequest(null);
                    break;
                }

                case 422:{
                    warningCountSymbol();
                    break;
                }

    
                default:{
                    warning();
                    SetStatusRequest(null);
                    break;
                }
    
            }
        }
        
        
    }, [statusRequest])



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
                allowClear={false}
                name={'messageText'} 
                value={messageUser}
                maxLength={400}
                // status='warning'
                onChange={ (evt)=>{ setMessageUser(evt.target.value) } }
            />
            <Flex vertical gap="small" style={{ width: '100%' }}>
                <Button 
                    icon={<SendOutlined />}
                    loading={loading}
                    type="primary" 
                    onClick={ ()=>{ sendMessage() } } 
                    block
                >Отправить</Button>
            </Flex>
        </div>
    )
};
  