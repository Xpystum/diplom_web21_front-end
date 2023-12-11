import Form from 'react-bootstrap/Form';
import style from './CustomDataListNumber.module.sass';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterNumber } from '../../redux/dataState';

export default function CustomDataListNumber(props) {
    let placeholder = props.placeholder;
    let styleSelect = props.styleSelect ?? null;

    let wrappSelect = props.wrappSelect ?? "wrappSelectDefault";

    const [stateNumber, setStateNumber] = useState('');
    const dispatch = useDispatch(); 
    const arrayStateComponent = useSelector(state => state.dataState.value.filter.data.dataListNumber)

    function parseRedux(param){
        let arr = JSON.parse(JSON.stringify(arrayStateComponent));

        arr = arr.reduce((akkum, elementIterable )=>{
       
            if(elementIterable.name !== placeholder){
                akkum.push(elementIterable);
            }

            return akkum;

        }, [])

        dispatch(addFilterNumber(arr));
    }

    useEffect(()=>{
        if(stateNumber != '' && stateNumber != 'null' && stateNumber != null && stateNumber != placeholder){
            let arr = JSON.parse(JSON.stringify(arrayStateComponent));
            arr.push({name: placeholder, value: stateNumber})
            dispatch(addFilterNumber(arr));
        }
    }, [stateNumber])   


    function handlerOnChangeSelect(evt){
        if(evt === placeholder){
            parseRedux(evt);
            setStateNumber('');
        }
        
        setStateNumber(evt);
        
    }

    let arrItem = props.arrItem ?? [
        { value: "Максим работай", label: "Максим работай" },
        { value: "Максим работай", label: "Максим работай" },
        { value: "Максим работай", label: "Максим работай" },
        { value: "Максим работай", label: "Максим работай" },
        { value: "Максим работай", label: "Максим работай" }
    
    ]


    // 
    return (
        <div className={style[wrappSelect]}>
            <Form.Select value={stateNumber} onChange={ (evt)=>{ handlerOnChangeSelect(evt.currentTarget.value)} }  className={style.wrapp_dataList + ( (styleSelect)? ' ' + style[styleSelect] : "")} aria-label="color-select" >
                <option>{placeholder}</option>  
                {
                    arrItem.map((index, eter)=>{
                        return <option key={eter} value={index.value}>{index.label}</option>
                    })
                }
            </Form.Select>
        </div>
    )
}
