// Удачи разобраться
import "datalist-css"
import style from './CustomDataList.module.sass';
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OnClick_Option, OnClick_SearchReset, listHide } from './CustomDataListJavaScript.js';
// import images from './patrik.png';

// использовать для отделение по горизонтальной лии
// <div className={style.brLine_wrapp}>
//     <div className={style.brLine}></div>
// </div>

export default function CustomDataList(props) {
    const massArr = ['Brave', 'Chrome' ,  'Edge'  , 'Firefox'  , 'Internet Explorer'  , 'Opera'  , 'Safari'  , 'Vivaldi'];
    // const testImage = [images];
    let placeholder = props.placeholder ?? '';
    let IdDataList = props.IdDataList ?? '';
    let IdInput = props.IdInput ?? 'browser';
    let declination = props.declination ?? "Любая" // склонение (Любая марка), (Любое Топливо)
    let CustomDataListStyle = props.CustomDataListStyle ?? ""

    return (
        <div className={style.CustomDataList + ' ' + style[CustomDataListStyle]}>
            <input type='text' list={IdDataList} placeholder={placeholder} id={IdInput} name="input_datalist" size="50" autocomplete="off" />
            {/* <div className={style.wrapp_datalist}> */}
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
                            <>
                                <div className={style.brLine_wrapp}>
                                    <div className={style.brLine}></div>
                                </div>
                                <option onClick={(evt)=>{ OnClick_Option(evt, IdInput) }} value={valueElement}>{valueElement}</option>
                            </>
                            :
                            <>
                                <option onClick={(evt)=>{ OnClick_Option(evt, IdInput) }} value={valueElement}>{valueElement}</option>
                            </>
                        ) 
                    }
                </datalist>
            {/* </div> */}
        </div>
    )
}
