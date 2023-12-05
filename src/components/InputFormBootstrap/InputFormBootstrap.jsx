import Form from 'react-bootstrap/Form';
import style from './InputFormBootstrap.module.sass'



export default function InputFormBootstrap(props){

    
    return (
        <>
            <Form.Group className="w-100 mb-4" controlId="exampleForm.ControlInput1">
                <Form.Label className={style.labelTitle}>Ключевые слова</Form.Label>
                <div className={style.wrappInput}>
                    <Form.Control className={style.inputControl} type="text" placeholder="Для точного соответствия используйте кавычки. Например, &quot;один хозяин&quot;." />
                </div>
            </Form.Group>
        </>
    );
}