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
    let resetState = props.resetState ?? false;

    // END логика для redux

    const cbRef = useRef(null);
    const [inputValue, setInputValue] = useState(()=>{  
        let arr = [];
        content.forEach(element => {
            arr.push({name: element.name, value: false})
        });

        return arr;
    })

    function parseRedux(updatedCheckedState){
        let redux = JSON.parse(JSON.stringify(arrRedux));

        for(let element of updatedCheckedState){
            if(element.value == true){
                if(redux.indexOf(element.name) == -1){
                    redux.push(element.name)
                }
            }else{
                if(redux.indexOf(element.name) != -1){
                    redux.splice(redux.indexOf(element.name), 1)
                }
            }
        }
        dispatch(addFilterCheckButton(redux));
    }

    const handleOnChange = (position) => {
        const updatedCheckedState = inputValue.map((item, index) =>
        index === position ? {name: item.name, value: !item.value} : item)
        setInputValue(updatedCheckedState);
    };

    useEffect(()=>{
        if(!resetState){
            parseRedux(inputValue);
        }
    }, [inputValue])

    useEffect(()=>{
        if(resetState){
            // dispatch(addFilterCheckButton([]));
            setInputValue(()=>{  
                let arr = [];
                content.forEach(element => {
                    arr.push({name: element.name, value: false})
                });
        
                return arr;
            })
            console.log('вошёл')
        }
    }, [resetState])

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