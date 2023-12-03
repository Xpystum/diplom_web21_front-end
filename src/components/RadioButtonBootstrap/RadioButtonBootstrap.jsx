import { useState } from 'react';
import style from './RadioButtonBootstrap.module.sass';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function RadioButtonBootstrap(){
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Любой', value: 'Любой' },
      { name: 'Левый', value: 'Левый' },
      { name: 'Правый', value: 'Правый' },
    ];

    return (
        <>
        <ButtonGroup>
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