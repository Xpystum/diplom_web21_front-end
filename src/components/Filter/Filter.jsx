import style from "./Filter.module.sass"

import CustomDataList from '../CustomDataList/CustomDataList';
import CustomDataListImg from '../CustomDataListImg/CustomDataListImg';
import CustomDataListNumber from '../CustomDataListNumber/CustomDataListNumber';
import ButtonMultiButton from '../ButtonMultiButton/ButtonMultiButton';
import RadioButtonBootstrap from '../RadioButtonBootstrap/RadioButtonBootstrap';
import CheckButtonBootsrap from '../CheckButtonBootsrap/CheckButtonBootsrap';
import InputFormBootstrap from "../InputFormBootstrap/InputFormBootstrap";
import ButtonCollapseFilter from "../ButtonCollapseFilter/ButtonCollapseFilter";
import BlockLineFilter from "../BlockLineFilter/BlockLineFilter";


import {useLogicFilterHook} from './useLogicFilterHook'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


export function Filter(props){
  //баги
  //1. CustomDataListImg - при нажатии вне поля не закрывает окно (надо копать в ValueContainer)
  //2. parseArrRedux - баг с алгоритмом, при повторяющих данных он может не изменять состояние (всплывает при добавлении нового блока линий в фильтре + "")


  const countRedux = useSelector(state => state.dataState.value.filter.data);
  const dispatch = useDispatch(); // p.s нужно было использовать локальное состояние для кнопки сброса (с redux могут быть проблемы)

  function setStateReduxData(){

    for(let key in countRedux){
      if(countRedux[key].length){
        return true;
      }
    }

    return false;
  }

  const [resetState, setResetState] = useState(false); // состояние для кнопки сброса
  const [dataReduxInput, setDataReduxInput] = useState(()=>{
   return setStateReduxData();
  });
  

  useEffect(()=>{ 
    setResetState(false);
    setDataReduxInput(setStateReduxData());

    // console.log(countRedux);
  }, [countRedux] )




  const { arrDocument, 
    arrDamage, 
    arrButtonCheckOne, 
    arrButtonCheckTwo, 
    arrButtonCheckFour, 
    arrYear, 
    radios,
    AddlineHook,
    statusOpen,
    setStatusOpen,
   } = useLogicFilterHook();
  //  сумма для фильтра от и до 
  let currency = [];
  let year = [];
  for(let i= 50000; i <= 2000000; i+=50000){
    currency.push({ value: new Intl.NumberFormat("ru-RU").format(i), label: new Intl.NumberFormat("ru-RU").format(i) });
  }
  let now = new Date().getFullYear();
  for(let i= 1940; i <= now; i++){
    year.push({ value: i, label: i });
  }
  return (
    <div className={style.wrappFilterProcent}>
      
      <div className={style.wrappFilterPx}>
        <form className={style.wrappFilter__filterForm}>

          { 
            Array(AddlineHook.value.countLineBlock).fill(1).map((index, keyReact) => 
                <BlockLineFilter 
                  resetState={resetState}
                  key={keyReact}
                  index={keyReact}
                  countLineBlock={AddlineHook.value.countLineBlock} 
                  deletedLineBlock={AddlineHook.value.handlerDeletedLineBlock}    
                  addLineBlock={AddlineHook.value.handlerAddLineBlock}
                  title={'проверка'}
                  isAdd={ (keyReact == 0)? ( (AddlineHook.value.countLineBlock > 1)? true : false) :  false}
                  isFirst={ (keyReact == 0)? true : false }
                />
            )
          }

          <div className={style.block_info_wrapp}>
            <div className={style.block_info_double + ' ' + style.block_info}>
              <CustomDataListNumber resetState={resetState} styleSelect={'DataListDoubleLeft'} placeholder='Цена от, ₽' arrItem={currency}/>
              <CustomDataListNumber resetState={resetState} styleSelect={'DataListDoubleRight'} placeholder='Цена до' arrItem={currency}/>
            </div>

            <div className={style.block_info_double + ' ' + style.block_info}>
              <CustomDataListNumber resetState={resetState} arrItem={year} styleSelect={'DataListDoubleLeft'} placeholder='Год от' />
              <CustomDataListNumber resetState={resetState} arrItem={year} styleSelect={'DataListDoubleRight'} placeholder='Год до'/>
            </div>

            <div className={style.block_info_one}>
              <CustomDataList resetState={resetState} CustomDataListStyle='DataListOneLeft' placeholder='КПП' IdInput="filter__kpp_input"  IdDataList="filter__kpp_dataList" />
              <CustomDataList resetState={resetState} CustomDataListStyle='DataListOneRight' placeholder='Топливо' declination='Любое' IdInput="filter__fuel_input"  IdDataList="filter__fuel_dataList" />
            </div>

          </div>

          <div className={style.block_info_wrapp}>
            <div className={style.block_info_double + ' ' + style.block_info}>
              <CustomDataListNumber resetState={resetState} styleSelect={'DataListDoubleLeft'} placeholder='Объем от, л' />
              <CustomDataListNumber resetState={resetState} styleSelect={'DataListDoubleRight'} placeholder='Объем до' />
            </div>

            <div className={style.block_info}>
              <CustomDataList resetState={resetState} placeholder='Привод' IdInput="filter__driveUnit_input" IdDataList="filter__driveUnit_dataList" declination='Любой'/>
            </div>

            <div className={style.block_info_check_box + " " + style.block_info}>
              <CheckButtonBootsrap resetState={resetState} type={'infoPhotoSell'} content={arrButtonCheckTwo}/>
            </div>

          </div>

          {
            (statusOpen) ? 
              <>
                  <div className={style.block_info_wrapp}>
                  <div className={style.block_info}>
                    <CustomDataListImg resetState={resetState} placeholder={"Тип кузова"} type={"body"}/>
                  </div>

                  <div className={style.block_info}>
                  <ButtonMultiButton resetState={resetState}/>
                  </div>

                  <div className={style.block_info}>
                    {/* заглушка */}
                  </div>
                  </div>

                  <div className={style.block_info_wrapp}>
                      <div className={style.block_info}>
                        <div className={style.wrapp_labelInput}>
                          <label className={style.documentLabel}>
                            Документы
                          </label>
                          <CustomDataList 
                            resetState={resetState}
                            nameBack='document'
                            declination="" 
                            placeholder={'Неважно'}
                            IdInput="filter__doc_input"  
                            IdDataList="filter__doc_dataList" 
                            content={arrDocument}
                          />
                        </div>
                      </div>

                      <div className={style.block_info}>
                        <div className={style.wrapp_labelInput}>
                          <label className={style.documentLabel}>
                            Повреждение
                          </label>
                          <CustomDataList
                            resetState={resetState}
                            nameBack='damage'
                            declination="" 
                            placeholder={'Повреждение'} 
                            IdInput="filter__damage_input"  
                            IdDataList="filter__damage_dataList" 
                            content={arrDamage}
                          />
                        </div>
                      </div>

                      <div className={style.block_info}>
                        <div className={style.wrapp_labelInput}>
                          <label className={style.documentLabel}>
                            Руль
                          </label>
                          <RadioButtonBootstrap resetState={resetState} nameSelectBack={'rudder'}/>
                        </div>
                      </div>


                  </div>

                  <div className={style.block_info_wrapp + ' ' + style.margin_top_10px}>


                    <div className={style.block_info}>
                      <div className={style.wrapp_fourCheckBox}>
                          <label className={style.arrButtonCheckFourLabel}>
                              Дополнительно
                          </label>
                          <CheckButtonBootsrap resetState={resetState} type={'extra'} styleWrappDiv='styleWrappDiv' content={arrButtonCheckFour}/>
                      </div>
                    </div>

                    <div className={style.wrappFloatBottom}>
                        <div className={style.wrapp_labelInput + ' ' + style.width48}>

                          <label className={style.documentLabel}>
                              Мощность по ПТС
                          </label>

                          <div className={style.block_info_double  + ' ' + style.block_info_double_middle}>
                            <CustomDataListNumber resetState={resetState} styleSelect={'DataListDoubleLeft'} placeholder='От, л.с' />
                            <CustomDataListNumber resetState={resetState} styleSelect={'DataListDoubleRight'} placeholder='До' />
                          </div>
                          
                        </div>

                        <div className={style.wrapp_labelInput + ' ' + style.width48}>

                          <label className={style.documentLabel}>
                              Мощность по ПТС
                          </label>

                          <div className={style.block_info_double + ' ' + style.block_info_double_middle} >
                            <CustomDataListNumber resetState={resetState} styleSelect={'DataListDoubleLeft'} placeholder='От, км' />
                            <CustomDataListNumber resetState={resetState} styleSelect={'DataListDoubleRight'} placeholder='До' />
                          </div>

                          <CheckButtonBootsrap resetState={resetState} type={'mileage'} styleWrappDiv='margin_top10px' content={arrButtonCheckOne}/>
                        </div>
                        <RadioButtonBootstrap resetState={resetState} nameSelectBack={'salesman'} defaultStatus={'all2'} radios={radios}/>
                    </div>
                  
                  </div>

                  <div className={style.block_info_wrapp}>
                    <InputFormBootstrap resetState={resetState}/>
                  </div>
              </>
              :
              ""
          }

          <div className={style.block_info_wrapp}>

            <div className={style.block_info}>
              {(dataReduxInput) ?  <ButtonCollapseFilter stateReset={setResetState} type={'buttonReset'} /> : '' }
            </div>

            <div className={style.flexCenter + ' ' + style.block_info }>
              <ButtonCollapseFilter status={statusOpen} setStatus={setStatusOpen} />
            </div>

            <div className={style.WrappbuttonSearch}>
              <button className={style.buttonSearch}>Показать</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};
