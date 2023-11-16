import style from './QuickLabelled.module.sass';

import Icons from '../Icons/Icons';


/* Может принимать следцющие props-ы

Имя иконки по которой подставляется svg кртинка
Имя берем из UI/Icons/Icons/icons.svg из id
iconName = iconName,

Отображение подписи - есть(true) или нет(false)
iconCaption={true}

Подпись к иконке
iconCaptionText = {'Избранное'}

Размеры иконки, по умолчанию width='16' и height='16'
iconSize={
            {
                width: '20',
                height: '20',
            }
        }

Парметры шрифта для подписи
textSize={ '16px'}

Параметры состояния, используется для установки или снятия цвета
state= true и false

Проброска callback function
actionFunction= name function

*/

export default function QuickLabelled(props) {

    let option = {
        iconName: props.iconName,
        iconCaption: props.iconCaption,
        iconCaptionText: props.iconCaptionText,
        iconSize: props.iconSize,
        textSize: props.textSize,
        state: props.state,
        actionFunction: props.actionFunction,
    }

    return (
        <div
            className={style.QuickLabelled}
            style={
                option.state ?
                    { color: 'red' }
                    :
                    { color: option.color }
            }


            onClick={
                option.actionFunction ?
                    () => { option.actionFunction() }
                    :
                    () => { }
            }

        >

            <Icons
                name={option.iconName}
                className={option.iconName}
                sizeWidth={option.iconSize ? option.iconSize.width : '16px'}
                sizeHeight={option.iconSize ? option.iconSize.height : 'auto'}

            />

            {
                option.iconCaption ?
                    <span style={option.textSize ? { fontSize: option.textSize } : { fontSize: '' }}>
                        {
                            !option.state ?
                                option.iconCaptionText.initial
                                :
                                option.iconCaptionText.reverse
                        }
                    </span>
                    :
                    ''
            }




        </div>
    )
};
