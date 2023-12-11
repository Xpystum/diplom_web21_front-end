import { useEffect, useState } from 'react';
import style from './RadioButtonBootstrap.module.sass';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterRadioButton } from '../../redux/dataState';
import { parseArrRedux } from '../../Action/logic/parseArrRedux';

export default function RadioButtonBootstrap(props){
    let defaultStatus = props.defaultStatus ?? 'all'
    let nameSelectBack = props.nameSelectBack ?? '';
    const [radioValue, setRadioValue] = useState(defaultStatus);
    const countRedux = useSelector(state => state.dataState.value.filter.data.dataListRadioButton)
    const dispatch = useDispatch()  
   

    useEffect(()=>{

        if(radioValue == defaultStatus){
            if(countRedux.lenght != 0){
                let copy =  JSON.parse(JSON.stringify(countRedux));

                copy = copy.reduce((arr, elementIterable)=>{

                    console.log(elementIterable, 'elementIterable');
                    let flag = 0;
                    copy.forEach(()=>{
                        if(elementIterable.name == nameSelectBack){

                        }else{  
                            if(flag <= 0) {
                                console.log(elementIterable, 'elementIterable');
                                arr.push(elementIterable);
                                flag++
                            }
                            
                        }
                    });

                    return arr;
                }, [])

                dispatch(addFilterRadioButton(copy))
                
            }
        }else{

            let copy =  JSON.parse(JSON.stringify(countRedux));
            copy.push({name: nameSelectBack, value: radioValue});
            const result = parseArrRedux(copy);
            dispatch(addFilterRadioButton(result))

        }

    }, [radioValue])

    let radios = props.radios ?? [
      { name: 'Любой', value: 'all' },
      { name: 'Левый', value: 'left' },
      { name: 'Правый', value: 'right' },
    ];

    return (
        <>
            <ButtonGroup bsPrefix={style.Wrapp__radioButton}>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${radio.value}`}
                        type="radio"
                        name={radio.value}
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                        bsPrefix={'btn-check' + ' ' + style.check_active}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    )

}