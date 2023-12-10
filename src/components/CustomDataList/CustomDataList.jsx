// Удачи разобраться
import "datalist-css"
import style from './CustomDataList.module.sass';
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OnClick_Option, OnClick_SearchReset, closeMissClick } from './CustomDataListJavaScript.js';
import { useDispatch, useSelector } from "react-redux";
import { addFilterData } from '../../redux/dataState';
import { parseArrRedux } from "../../Action/logic/parseArrRedux";



// лучше использовать react-select (datalist не удачное решение)
export default function CustomDataList(props) {
    //состояние для кнопки сброса
    // let [resetState, setResetState] = useState('');

    // вывод в input
    const massArr = props.content ?? ['Brave', 'Brave2', 'Brave3', 'Chrome' ,  'Edge'  , 'Firefox'  , 'Internet Explorer'  , 'Opera'  , 'Safari'  , 'Vivaldi'];
    // const testImage = [images];
    let placeholder = props.placeholder ?? '';
    let IdDataList = props.IdDataList ?? '';
    let IdInput = props.IdInput ?? 'browser';
    let declination = props.declination ?? "Любая"; // склонение (Любая марка), (Любое Топливо)
    let CustomDataListStyle = props.CustomDataListStyle ?? "";

    const count = useSelector(state => state.dataState.value.filter.data.dataList)
    const dispatch = useDispatch()  
    const inputRef = useRef(null);

    function addReduxDataArr(nameValue, evtValue){
        const arr = [
            {name: 'Mark', value: '1'},
            {name: 'Model', value: '12'},
            {name: 'Fuel', value: '6'},
            {name: 'Fuel', value: '6'},
            {name: 'Fuel', value: '9'},
            {name: 'Mark', value: 'new'},
            {name: 'Mark', value: 'new'},
            {name: 'Mark', value: 'new'},
            {name: 'Model', value: 'nEwModel'},
            {name: 'Model', value: 'nEwModel'},
        ]
        
        if(count.length == 0){
            // let arr = [];
            // arr.push({name: nameValue, value: evtValue});
            // arr.push({name: nameValue, value: evtValue});
            // arr.push({name: nameValue, value: evtValue});
            // arr.push({name: nameValue, value: evtValue});
            
            console.log(parseArrRedux(arr));
            // dispatch(arr);
        }else{

            // let copy =  JSON.parse(JSON.stringify(count));
            // console.log(copy, 'arr');
            // copy.push({name: nameValue, value: evtValue});

            // const result = parseArrRedux(copy);
            // dispatch(addFilterData(result));
           
            // console.log(count, 'result')
        }   

    //    console.log(parseArrRedux(arr));

    }

    function onClickDataList(evt){
        
        switch(placeholder)
        {
            case 'Модель':{
                addReduxDataArr('Model' , evt);
                break;
            }

            case 'Марка':{
                addReduxDataArr('Marka' ,evt);
                break;
            }

            case 'КПП':{
                addReduxDataArr('KPP' , evt);
                break;
            }

            case 'Топливо':{
                addReduxDataArr('Fuel' , evt);
                break;
            }
            
            case 'Привод':{
                addReduxDataArr('Privod' , evt);
                break;
            }

        }

       
    }

    function onChangeInput(evt){
        // let object = {placeholder: evt};

        // dispatch(addFilterData.push(object))
    }
    
    useEffect(()=>{
        //логика для закрытие списка (если нажатие вне элемента)
        closeMissClick(IdDataList, IdInput + 'div');
    }, [])



   

    // onChange={e => onChangeInput(e.target.value, setResetState)}

    return (
        <div className={style.CustomDataList + ' ' + IdInput + 'div' + ' ' + ((CustomDataListStyle != "")? style[CustomDataListStyle] : '') }>
            <input ref={inputRef} onChange={(evt) => { onChangeInput(evt.target.value)}    }  defaultValue={''} type='text' list={IdDataList} placeholder={placeholder} id={IdInput} name="input_datalist" size="50" autoComplete="off" />
                <datalist onClick={ (evt)=>{ onClickDataList(evt.target.value) } } id={IdDataList} className={style.datalist} size="50" >
                    <div onClick={()=>{ OnClick_SearchReset(inputRef, IdDataList) }} className={style.reset_search}>
                        <FontAwesomeIcon icon="fa-solid fa-x" />
                        <span className={style.reset_search_name}>{declination + ' ' + placeholder}</span>
                    </div>
                    <div className={style.brLine_wrapp}>
                        <div className={style.brLine}></div>
                    </div>
                    {
                        massArr.map((valueElement, index)=>
                            (index == 5)?
                            <div key={index}>
                                <div className={style.brLine_wrapp}>
                                    <div className={style.brLine}></div>
                                </div>
                                <option onClick={(evt)=>{ OnClick_Option(evt, IdInput, IdDataList) }} value={valueElement} label={valueElement}></option>
                            </div>
                            :
                            <div key={index}>
                                <option  onClick={(evt)=>{ OnClick_Option(evt, IdInput, IdDataList) }} value={valueElement} label={valueElement}></option>
                            </div>
                        ) 
                    }
                </datalist>
        </div>
    )
}
