import { useEffect, useRef, useState } from 'react';
import style from './CheckButtonBootsrap.module.sass'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterCheckButton } from '../../redux/dataState';

export default function CheckButtonBootsrap(props){

    let content = props.content ?? [
        {name: 'testName', content: "testContent"},
        {name: 'testName2', content: "testContent2"},
    ];
    const dispatch = useDispatch();
    const arrRedux = useSelector(state => state.dataState.value.filter.data.dataListCheckButton)

    let type = props.type;
    const styleWrapp = props.styleWrapp ?? 'wrapp_check_box';
    const styleInput = props.styleInput ?? 'check_box_input_two';
    const styleLabel = props.styleLabel ?? 'check_box_label_two';
    const styleWrappDiv = props.styleWrappDiv ?? '';

    const selectType = {

        _inputValue: null,

        _parseRedux(arrCopy) {

            //защищеный мето для парсинга и подготовки отправление в redux
            
                arrCopy.push({name: type, value: this._inputValue})

                let flag = 0;
                let resultParse = arrCopy.reduce((arr, elementIterable)=>{
                    
                    arr.push({name: type, value: this._inputValue});
                    arr.forEach((element, index)=>{
                        if(element.name == elementIterable.name){
                            flag++;
                        }

                        if(flag == 2){
                            arr.splice(index, 1);
                            flag = 0;
                        }

                    });

                    return arr;

                }, [])

            
            return resultParse;
        },

        _setInputValue(value){
            this._inputValue = JSON.parse(JSON.stringify(value))
        },


        twoCheckbox(value) { 
            
            this._setInputValue(value);
            let copy = JSON.parse(JSON.stringify(arrRedux));
            console.log(copy , 'copy');
            copy = this._parseRedux(copy);  
            dispatch(addFilterCheckButton(copy));
        },

    }

    // START логика для redux
    function swtichType(updatedCheckedState){

        // switch(type){
        //     case 'extra':{
        //         selectType.fourCheckbox(updatedCheckedState);
        //         break;
        //     }

        //     case 'infoPhotoSell':{
        //         selectType.twoCheckbox(updatedCheckedState);
        //         break;
        //     }
        // }

        selectType.twoCheckbox(updatedCheckedState);

    }


    // END логика для redux

    const cbRef = useRef(null);
    const [inputValue, setInputValue] = useState(()=>{  
        
        let arr = [];
        content.forEach(element => {
            arr.push({name: element.name, value: false})
        });

        return arr;

    })

    useEffect(()=>{ 

        // if(cbRef.current){
        //     let copy =  JSON.parse(JSON.stringify(arrRedux));

        //     copy.push({name: type, value: inputValue})
        //     dispatch(addFilterCheckButton(copy));
        //     cbRef.current = false;
        // }
        

    }, [])


    const handleOnChange = (position) => {
        const updatedCheckedState = inputValue.map((item, index) =>
        index === position ? {name: item.name, value: !item.value} : item)
        setInputValue(updatedCheckedState);
        swtichType(updatedCheckedState);
       
    };

    return (    
        <>
            {
                content.map( (element, index) =>    
                    <div className={ (styleWrappDiv != '')? style[styleWrappDiv] : '123'} key={index}>
                        <Form.Check  className={style[styleWrapp]}>
                            <Form.Check.Input 
                                checked={inputValue[index].value}
                                onChange={() => handleOnChange(index) }
                                id={element.name}
                                name={element.name} 
                                className={style[styleInput]} 
                             />
                            <Form.Check.Label 
                                htmlFor={element.name} 
                                className={style[styleLabel]}
                            >{element.content}</Form.Check.Label>
                        </Form.Check>
                    </div>
                )
            }
        </>
    )
}