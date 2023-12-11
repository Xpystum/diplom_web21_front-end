import style from './CheckButtonBootsrap.module.sass'
import Form from 'react-bootstrap/Form';

export default function CheckButtonBootsrap(props){

    let content = props.content ?? [
        {name: 'testName', content: "testContent"},
        {name: 'testName2', content: "testContent2"},

    ];
    const styleWrapp = props.styleWrapp ?? 'wrapp_check_box';
    const styleInput = props.styleInput ?? 'check_box_input_two';
    const styleLabel = props.styleLabel ?? 'check_box_label_two';
    const styleWrappDiv = props.styleWrappDiv ?? '';

    return (
        <>
            {
                content.map( (element, index) =>    
                    <div className={ (styleWrappDiv != '')? style[styleWrappDiv] : '123'} key={index}>
                        <Form.Check className={style[styleWrapp]}>
                            <Form.Check.Input id={element.name} name={element.name} type={'checkbox'} className={style[styleInput]} />
                            <Form.Check.Label htmlFor={element.name} className={style[styleLabel]}>{element.content}</Form.Check.Label>
                        </Form.Check>
                    </div>
                )
            }
        </>
    )
}