import { useState } from 'react';
import style from './RadioButtonBootstrap.module.sass';
import './RadioButtonBootstrap.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function RadioButtonBootstrap(props){
    const [checked, setChecked] = useState(true);
    let defaultStatus = props.defaultStatus ?? 'all'
    const [radioValue, setRadioValue] = useState(defaultStatus);
  
    const radios = [
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
                        id={`radio-${idx}`}
                        type="radio"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    )

}