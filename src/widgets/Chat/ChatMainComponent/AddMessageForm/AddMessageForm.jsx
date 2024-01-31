import style from "./AddMessageForm.module.sass";
import { useState } from 'react';
import { request } from '../../../../Action/request';
import { Button, Flex, Input } from 'antd';


export default function AddMessageForm(){

    const [message, setMessage] = useState('');
    const { TextArea } = Input;
    const defaultZoneValueText = 'Введите Сообщение';   

    async function sendMessage(){
        await request('POST', 'chat/send', (response)=>{

            if ( response.status >= 200 && response.status <= 204 && response.data.lenght != 0)  {
                // console.log(response.data, ' ответ от request после входа в цикл');
            }
        }, {user_id: 1, message: message})

        //вывести ошибку минимум 3 буквы.
        // console.log(status, 'status error');
    }


    return (
        <div className={style.wrapp_messageForm}>
            <TextArea 
                placeholder={defaultZoneValueText}
                allowClear={false}
                name={'messageText'} 
                value={message}
                maxLength={400}
                // status='warning'
                onChange={ (evt)=>{ setMessage(evt.target.value) } }
            />
            <Flex vertical gap="small" style={{ width: '100%' }}>
                <Button 
                    type="primary" 
                    onClick={ ()=>{ sendMessage() } } 
                    block
                >Send</Button>
            </Flex>
        </div>
    )
  };
  