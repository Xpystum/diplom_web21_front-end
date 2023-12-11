import { useEffect, useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import CircleColor from '../../UI/CircleColor/CircleColor';
import style from './ButtonMultiButton.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { addFilterDataColor } from '../../redux/dataState';


export default function ButtonMultiButton(){
    const [value, setValue] = useState([]);
    const dispatch = useDispatch(); //redux

    useEffect(()=>{
        
        dispatch(addFilterDataColor([{name: 'color', value: value}]));
    }, [value])
    
    const handleChange = (val) => { 
        if(val.length >= 0 && !val.includes('none')){
            setValue(val);
        }else{
            setValue([]);
        }
    };
    return (
        <>
            <ToggleButtonGroup className={style.wrappToggleButtonGroup} type="checkbox" value={value} onChange={handleChange}>

                <ToggleButton onClick={() => {  } } className={style.resetButtonsStyle} id="tbg-btn-1" value={'none'}>
                    Любой
                    {
                        (value.length == 0) ? 
                        <FontAwesomeIcon  className={style.icon} icon="fa-solid fa-check" />
                        : "" 
                    }
                </ToggleButton>

                <ToggleButton className={style.oneButtonCircleColor} id="tbg-btn-2" value={'blue'}>
                    <CircleColor 
                        statusCheck={ (value.includes('blue'))? true : false }
                        color="color_white"
                    />
                </ToggleButton>

                <ToggleButton className={style.oneButtonCircleColor} id="tbg-btn-3" value={'black'}>
                    <CircleColor 
                        statusCheck={ (value.includes('black'))? true : false }
                        color="color_black"
                    />
                </ToggleButton>

                <ToggleButton className={style.oneButtonCircleColor} id="tbg-btn-4" value={'brown'}>
                    <CircleColor 
                        statusCheck={ (value.includes('brown'))? true : false }
                        color="color_brown"
                    />
                </ToggleButton>

                <ToggleButton className={style.oneButtonCircleColor} id="tbg-btn-5" value={'violet'}>
                    <CircleColor 
                        statusCheck={ (value.includes('violet'))? true : false }
                        color="color_violet"
                    />
                </ToggleButton>

                <ToggleButton className={style.oneButtonCircleColor} id="tbg-btn-6" value={'green'}>
                    <CircleColor 
                        statusCheck={ (value.includes('green'))? true : false }
                        color="color_green"
                    />
                </ToggleButton>

                <ToggleButton className={style.twoButtonCircleColor} id="tbg-btn-7" value={'graySilver'}>
                    <CircleColor 
                        statusCheck={ (value.includes('graySilver'))? true : false }
                        color="color_gray"
                    />
                     <CircleColor 
                        statusCheck={ (value.includes('graySilver'))? true : false }
                        color="color_silver"
                    />
                </ToggleButton> 

                <ToggleButton className={style.twoButtonCircleColor} id="tbg-btn-8" value={'blueGolyboe'}>
                    <CircleColor 
                        statusCheck={ (value.includes('blueGolyboe'))? true : false }
                        color="color_blue"
                    />
                     <CircleColor 
                        statusCheck={ (value.includes('blueGolyboe'))? true : false }
                        color="color_golyboe"
                    />
                </ToggleButton> 

                <ToggleButton className={style.threeButtonCircleColor} id="tbg-btn-9" value={'beigeYellowGolden'}>
                    <CircleColor 
                        statusCheck={ (value.includes('beigeYellowGolden'))? true : false }
                        color="color_beige"
                    />
                    <CircleColor 
                        statusCheck={ (value.includes('beigeYellowGolden'))? true : false }
                        color="color_yellow"
                    />
                    <CircleColor 
                        statusCheck={ (value.includes('beigeYellowGolden'))? true : false }
                        color="color_golden"
                    />
                </ToggleButton> 

                <ToggleButton className={style.fourButtonCircleColor} id="tbg-btn-10" value={'redBurgundyPinkOrange'}>
                    <CircleColor 
                        statusCheck={ (value.includes('redBurgundyPinkOrange'))? true : false }
                        color="color_red"
                    />

                    <CircleColor 
                        statusCheck={ (value.includes('redBurgundyPinkOrange'))? true : false }
                        color="color_burgundy"
                    />

                    <CircleColor 
                        statusCheck={ (value.includes('redBurgundyPinkOrange'))? true : false }
                        color="color_pink"
                    />

                    <CircleColor 
                        statusCheck={ (value.includes('redBurgundyPinkOrange'))? true : false }
                        color="color_orange"
                    />
                </ToggleButton> 

            </ToggleButtonGroup>
        </>
    );
}