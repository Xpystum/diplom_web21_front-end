import Form from 'react-bootstrap/Form';
import style from './CustomDataListNumber.module.sass';

export default function CustomDataListNumber(props) {
    let placeholder = props.placeholder;
    let styleSelect = props.styleSelect ?? null;

    let wrappSelect = props.wrappSelect ?? "wrappSelectDefault";

    function handlerOnChangeSelect(evt){
        console.log(placeholder, evt);
    }
g
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
            <Form.Select onChange={ (evt)=>{ handlerOnChangeSelect(evt.currentTarget.value)} } className={style.wrapp_dataList + ( (styleSelect)? ' ' + style[styleSelect] : "")} aria-label="Default select example" >
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
