import Form from 'react-bootstrap/Form';
import style from './InputFormBootstrap.module.sass'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilterFilterInput } from '../../redux/dataState';



export default function InputFormBootstrap(props){
    let resetState = props.resetState ?? false;
    const [stateValue, setStateValue] = useState('');
    const dispatch = useDispatch();

    function handlerOnClickInput(evt){
        setStateValue([evt.target.value]);
    }

    useEffect(()=>{
        if(resetState){
            setStateValue('');
        }
    }, [resetState])

    useEffect(()=>{
        if(stateValue){
            dispatch(addFilterFilterInput([]));
        }
    }, [stateValue])

    return (
        <>
            <Form.Group className="w-100 mb-4" controlId="exampleForm.ControlInput1">
                <Form.Label className={style.labelTitle}>Ключевые слова</Form.Label>
                <div className={style.wrappInput}>
                    <Form.Control value={stateValue} onChange={(evt)=>{ handlerOnClickInput(evt) }} className={style.inputControl} type="text" placeholder="Для точного соответствия используйте кавычки. Например, &quot;один хозяин&quot;." />
                </div>
            </Form.Group>
        </>
    );
}