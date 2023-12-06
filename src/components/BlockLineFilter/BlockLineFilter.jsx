import { useState, useContext } from 'react';
import ButtonPlus from '../../UI/ButtonIcon/ButtonIcon';
import CustomDataList from '../CustomDataList/CustomDataList';
import CustomDataListImg from '../CustomDataListImg/CustomDataListImg';
import style from './BlockLineFilter.module.sass';

export default function BlockLineFilter(props){
    let countLineBlock = props.countLineBlock;

    const isAdd = props.isAdd;
    const isFirst = props.isFirst;

    
    return(
        <>
            <div className={style.block_info_wrapp}>
                <div className={style.block_info}>
                  <CustomDataList placeholder={'Марка'} IdInput="filter__mark_input"  IdDataList="filter__mark_dataList" />
                </div>
    
                <div className={style.block_info}>
                  <CustomDataList placeholder={'Модель'} IdInput="filter__model_input" IdDataList="filter__model_dataList"/>
                </div>
    
                <div className={style.block_info}>
                  
                  <CustomDataListImg placeholder={"Поколение"}/>
                  <div className={style.block_info_icon}>
                      {
                        (isFirst) ?
                          (isAdd) ? 
                          <>
                            <ButtonPlus method={ props.deletedLineBlock } IconContent="fa-solid fa-trash-can" size='2x'/>
                            {/* <ButtonPlus method={ props.addLineBlock } IconContent="fa-solid fa-plus" size='2x'/> */}
                          </> 
                          :
                          <>
                            {/* <ButtonPlus method={ props.deletedLineBlock } IconContent="fa-solid fa-trash-can" size='2x'/> */}
                            <ButtonPlus method={ props.addLineBlock } IconContent="fa-solid fa-plus" size='2x'/>
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