import style from './Button.module.sass';
import Spinner from 'react-bootstrap/Spinner';

export default function Button(props) {

    //спинер загрузки от бутстрапа передать spin = true
    let spin = props.spin ?? ""
  

    let disabled = props.disabled ?? ""
    let name_content = props.name ?? 'there should be a name here';
    let type_button = props.type ?? 'button';
    let method = props.method ?? Function.prototype;
    let styleName = props.name_class;

    return (
        <button disabled={spin} onClick={() => {
            method();
        }} type={type_button} className={style[styleName]}>
            <div className={style[styleName + '_content']}>
                {
                    (spin) ? 
                        <>
                            <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className={style[styleName + '_spinner']}
                            /> Загрузка...
                        </>
                    :
                        name_content
                } 
            </div>
            
        </button>
    )
};
