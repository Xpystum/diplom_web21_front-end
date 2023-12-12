import style from "./Filter.module.sass"
import ButtonPlus from '../../UI/ButtonIcon/ButtonIcon';

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
import { useEffect } from "react";


export function Filter(props){
  const countRedux = useSelector(state => state.dataState.value.filter.data);
  const dispatch = useDispatch(); // p.s нужно было локальное состояние (с rexud могут быть проблемы)

  useEffect(()=>{ 
    console.log(countRedux);
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


  return (
    <div className={style.wrappFilterProcent}>
      
      <div className={style.wrappFilterPx}>
        <form className={style.wrappFilter__filterForm}>

          { 
            Array(AddlineHook.value.countLineBlock).fill(1).map((index, keyReact) => 
                <BlockLineFilter 
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
              <CustomDataListNumber styleSelect={'DataListDoubleLeft'} placeholder='Цена от, ₽' />
              <CustomDataListNumber styleSelect={'DataListDoubleRight'} placeholder='Цена до' />
            </div>

            <div className={style.block_info_double + ' ' + style.block_info}>
              <CustomDataListNumber arrItem={arrYear} styleSelect={'DataListDoubleLeft'} placeholder='Год от' />
              <CustomDataListNumber arrItem={arrYear} styleSelect={'DataListDoubleRight'} placeholder='Год до' />
            </div>

            <div className={style.block_info_one}>
              <CustomDataList CustomDataListStyle='DataListOneLeft' placeholder='КПП' IdInput="filter__kpp_input"  IdDataList="filter__kpp_dataList" />
              <CustomDataList CustomDataListStyle='DataListOneRight' placeholder='Топливо' declination='Любое' IdInput="filter__fuel_input"  IdDataList="filter__fuel_dataList" />
            </div>

          </div>

          <div className={style.block_info_wrapp}>
            <div className={style.block_info_double + ' ' + style.block_info}>
              <CustomDataListNumber styleSelect={'DataListDoubleLeft'} placeholder='Объем от, л' />
              <CustomDataListNumber styleSelect={'DataListDoubleRight'} placeholder='Объем до' />
            </div>

            <div className={style.block_info}>
              <CustomDataList placeholder='Привод' IdInput="filter__driveUnit_input" IdDataList="filter__driveUnit_dataList" declination='Любой'/>
            </div>

            <div className={style.block_info_check_box + " " + style.block_info}>
              <CheckButtonBootsrap type={'infoPhotoSell'} content={arrButtonCheckTwo}/>
            </div>

          </div>

          {
            (statusOpen) ? 
              <>
                  <div className={style.block_info_wrapp}>
                  <div className={style.block_info}>
                    <CustomDataListImg placeholder={"Тип кузова"} type={"body"}/>
                  </div>

                  <div className={style.block_info}>
                  <ButtonMultiButton />
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
                          <RadioButtonBootstrap nameSelectBack={'rudder'}/>
                        </div>
                      </div>


                  </div>

                  <div className={style.block_info_wrapp + ' ' + style.margin_top_10px}>


                    <div className={style.block_info}>
                      <div className={style.wrapp_fourCheckBox}>
                          <label className={style.arrButtonCheckFourLabel}>
                              Дополнительно
                          </label>
                          <CheckButtonBootsrap type={'extra'} styleWrappDiv='styleWrappDiv' content={arrButtonCheckFour}/>
                      </div>
                    </div>

                    <div className={style.wrappFloatBottom}>
                        <div className={style.wrapp_labelInput + ' ' + style.width48}>

                          <label className={style.documentLabel}>
                              Мощность по ПТС
                          </label>

                          <div className={style.block_info_double  + ' ' + style.block_info_double_middle}>
                            <CustomDataListNumber styleSelect={'DataListDoubleLeft'} placeholder='От, л.с' />
                            <CustomDataListNumber styleSelect={'DataListDoubleRight'} placeholder='До' />
                          </div>
                          
                        </div>

                        <div className={style.wrapp_labelInput + ' ' + style.width48}>

                          <label className={style.documentLabel}>
                              Мощность по ПТС
                          </label>

                          <div className={style.block_info_double + ' ' + style.block_info_double_middle} >
                            <CustomDataListNumber styleSelect={'DataListDoubleLeft'} placeholder='От, км' />
                            <CustomDataListNumber styleSelect={'DataListDoubleRight'} placeholder='До' />
                          </div>

                          <CheckButtonBootsrap type={'mileage'} styleWrappDiv='margin_top10px' content={arrButtonCheckOne}/>
                        </div>
                        <RadioButtonBootstrap nameSelectBack={'salesman'} defaultStatus={'all2'} radios={radios}/>
                    </div>
                  
                  </div>

                  <div className={style.block_info_wrapp}>
                    <InputFormBootstrap />
                  </div>
              </>
              :
              ""
          }

          <div className={style.block_info_wrapp}>

            <div className={style.block_info}></div>

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
