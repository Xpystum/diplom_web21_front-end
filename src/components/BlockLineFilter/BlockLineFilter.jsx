import { useState, useContext } from 'react';
import ButtonPlus from '../../UI/ButtonIcon/ButtonIcon';
import CustomDataList from '../CustomDataList/CustomDataList';
import CustomDataListImg from '../CustomDataListImg/CustomDataListImg';
import style from './BlockLineFilter.module.sass';

export default function BlockLineFilter(props){
    const index = props.index ?? '';

    const isAdd = props.isAdd;
    const isFirst = props.isFirst;
    let resetState = props.resetState;
    
    
    return(
        <>
            <div className={style.block_info_wrapp}>
                <div className={style.block_info}>
                  <CustomDataList resetState={resetState} placeholder={'Марка'} IdInput={"filter__mark_input" + index}  IdDataList={"filter__mark_dataList" + index }/>
                </div>
    
                <div className={style.block_info}>
                  <CustomDataList resetState={resetState} placeholder={'Модель'} IdInput={"filter__model_input" + index} IdDataList={"filter__model_dataList" + index}/>
                </div>
    
                <div className={style.block_info}>
                  
                  <CustomDataListImg resetState={resetState} placeholder={"Поколение"}/>
                  <div className={style.block_info_icon}>

                      {
                        (isFirst) ?
                          (isAdd) ? 
                          <>
                            <ButtonPlus method={ props.deletedLineBlock } IconContent="fa-solid fa-trash-can" size='2x'/>
                          </> 
                          :
                          <>
                            {/* <ButtonPlus method={ props.deletedLineBlock } IconContent="fa-solid fa-plus" size='2x'/> */}
                          </> 
                        :
                          <>
                            <ButtonPlus method={ props.deletedLineBlock } IconContent="fa-solid fa-trash-can" size='2x'/>
                            <ButtonPlus method={ props.addLineBlock } IconContent="fa-solid fa-plus" size='2x'/>
                          </>
                      }
                        
                  </div>
                </div>
            </div>
        </>
    );
}