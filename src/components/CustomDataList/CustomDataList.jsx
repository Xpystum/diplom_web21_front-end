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
   const nameBack = props.nameBack; 

    // вывод в input
    const massArr = props.content ?? ['Brave', 'Brave2', 'Brave3', 'Chrome' ,  'Edge'  , 'Firefox'  , 'Internet Explorer'  , 'Opera'  , 'Safari'  , 'Vivaldi'];
    // const testImage = [images];
    let placeholder = props.placeholder ?? '';
    let IdDataList = props.IdDataList ?? '';
    let IdInput = props.IdInput ?? 'browser';
    let declination = props.declination ?? "Любая"; // склонение (Любая марка), (Любое Топливо)
    let labelRemoveDataButton = declination + ' ' + placeholder;
    let CustomDataListStyle = props.CustomDataListStyle ?? "";

    const COMPONENT_MAP_SERVER = {
        model: 'Model',
        marka: 'Marka',
        kpp: 'Kpp',
        fuel: 'Fuel',
        privod: 'Privod',
        document: 'Document',
        damage: 'Damage'

    }

    function selectSwitchInput(placeholder, evt){

        switch(placeholder)
        {
            case 'Модель':{
                addReduxDataArr(COMPONENT_MAP_SERVER.model , evt);
                break;
            }

            case 'Марка':{
                addReduxDataArr(COMPONENT_MAP_SERVER.marka ,evt);
                break;
            }

            case 'КПП':{
                addReduxDataArr(COMPONENT_MAP_SERVER.kpp , evt);
                break;
            }

            case 'Топливо':{
                addReduxDataArr(COMPONENT_MAP_SERVER.fuel , evt);
                break;
            }
            
            case 'Привод':{
                addReduxDataArr(COMPONENT_MAP_SERVER.privod , evt);
                break;
            }

            case 'Неважно':{
                addReduxDataArr(COMPONENT_MAP_SERVER.document , evt);
                break;
            }

            case 'Повреждение':{
                addReduxDataArr(COMPONENT_MAP_SERVER.damage , evt);
                break;
            }

        }
       
    }

    const countRedux = useSelector(state => state.dataState.value.filter.data.dataList)
    const dispatch = useDispatch()  
    const inputRef = useRef(null);


    function addReduxDataArr(nameValue, evtValue = []){
        
        if(countRedux.length == 0){
                let arr = [];
                arr.push({name: nameValue, value: evtValue});
                dispatch(addFilterData(arr));
        }else{  


            let copy =  JSON.parse(JSON.stringify(countRedux));
            copy.push({name: nameValue, value: evtValue});
            const result = parseArrRedux(copy);
            dispatch(addFilterData(result));
        
         
        }
    }

    function onClickDataList(evt){
        selectSwitchInput(placeholder, evt);
    }

    function onChangeInput(evt){
        selectSwitchInput(placeholder, evt);
    }
    
    useEffect(()=>{
        //логика для закрытие списка (если нажатие вне элемента)
        closeMissClick(IdDataList, IdInput + 'div');
    }, [])


    return (
        <div className={style.CustomDataList + ' ' + IdInput + 'div' + ' ' + ((CustomDataListStyle != "")? style[CustomDataListStyle] : '') }>
            <input ref={inputRef} onBlur ={(evt) => { onChangeInput(evt.target.value)}    }  defaultValue={''} type='text' list={IdDataList} placeholder={placeholder} id={IdInput} name="input_datalist" size="50" autoComplete="off" />
                <datalist onClick={ (evt)=>{ onClickDataList(evt.target.value) } } id={IdDataList} className={style.datalist} size="50" >
                    <div onClick={()=>{ OnClick_SearchReset(inputRef, IdDataList) }} className={style.reset_search}>
                        <FontAwesomeIcon icon="fa-solid fa-x" />
                        <span className={style.reset_search_name}>{labelRemoveDataButton}</span>
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
