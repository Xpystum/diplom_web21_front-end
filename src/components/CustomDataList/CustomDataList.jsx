// Удачи разобраться
import "datalist-css"
import style from './CustomDataList.module.sass';
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OnClick_Option, OnClick_SearchReset, closeMissClick } from './CustomDataListJavaScript.js';




export default function CustomDataList(props) {
    // вывод в input
    const massArr = props.content ?? ['Brave', 'Chrome' ,  'Edge'  , 'Firefox'  , 'Internet Explorer'  , 'Opera'  , 'Safari'  , 'Vivaldi'];
    // const testImage = [images];
    let placeholder = props.placeholder ?? '';
    let IdDataList = props.IdDataList ?? '';
    let IdInput = props.IdInput ?? 'browser';
    let declination = props.declination ?? "Любая"; // склонение (Любая марка), (Любое Топливо)
    let CustomDataListStyle = props.CustomDataListStyle ?? "";
    
    useEffect(()=>{
        closeMissClick(IdDataList, style.CustomDataList);
    }, [])

   

    return (
        <div className={style.CustomDataList + ' ' + ((CustomDataListStyle != "")? style[CustomDataListStyle] : '') }>
            <input type='text' list={IdDataList} placeholder={placeholder} id={IdInput} name="input_datalist" size="50" autoComplete="off" />
                <datalist id={IdDataList} className={style.datalist} size="50" >
                    <div onClick={()=>{ OnClick_SearchReset(IdInput, IdDataList) }} className={style.reset_search}>
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
                                <option onClick={(evt)=>{ OnClick_Option(evt, IdInput, IdDataList) }} value={valueElement}>{valueElement}</option>
                            </div>
                            :
                            <div key={index}>
                                <option  onClick={(evt)=>{ OnClick_Option(evt, IdInput, IdDataList) }} value={valueElement}>{valueElement}</option>
                            </div>
                        ) 
                    }
                </datalist>
        </div>
    )
}
