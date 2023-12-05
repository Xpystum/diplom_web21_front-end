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

import { fillArrYear } from './FilterJavaScript';
import { createContext, useEffect, useState } from "react";



const CountLineBlock = createContext(null);

export default function Filter(props){

  //START статический контент
    const arrDocument = ['В порядке', 'Нет или проблемные'];
    const arrDamage = ['Не требуется ремонт', 'требуется ремонт или не на ходу'];

//START checkbox
    const arrButtonCheckTwo = [
      {name: "notSell", content: 'Непроданные'},
      {name: "Photo", content: 'C фото'},
    ];

    const arrButtonCheckFour = [
      {name: "Inomark", content: 'Иномарки'},
      {name: "Sertificat", content: 'Сертификация'},
      {name: "DromAssist", content: 'Дром Ассист'},
      {name: "Barter", content: 'Возможен Обмен'},
    ];

    const arrButtonCheckOne = [
      {name: "mileage", content: 'Без пробега по РФ'},
    ];
    //END checkbox

    // START SELECT
      //есть баг с "любой" all (передавать нужно что то другое что бы не повторялись в компоненте, а иначе будет работать и тот и другой одновременно)
      const radios = [
        { name: 'Любой', value: 'alls' },
        { name: 'Собственник', value: 'owner' },
        { name: 'Частник', value: 'privateOwner' },
        { name: 'Компания', value: 'company' },
      ];
    // END SELECT

//END статический контент

  let year = fillArrYear();
  let arrYear = year.map((index)=>{
    return { value: index, label: index }
  });

  //Работа логики с добавляющийся строкой
  let [countLineBlock, setCountLineBlock] = useState(1);   //количество блоков при нажатии на "+"
  let array = new Array(1);

  useEffect(()=>{
    console.log('вызов effect')
    array = new Array(countLineBlock);
  }, [countLineBlock])
  
  function handlerAddLineBlock() {

    let a = countLineBlock++;
    setCountLineBlock(a);
    console.log(countLineBlock , ' :countLineBlock');
  }

  function handlerDeletedLineBlock() {
    let a = countLineBlock--;
    setCountLineBlock(a);
    console.log(countLineBlock);
  } 


  return (
    <div className={style.wrappFilterProcent}>
      
      <div className={style.wrappFilterPx}>
        <form className={style.wrappFilter__filterForm}>
          
          { 
            array.fill(1).map((index, keyReact) => 
              <CountLineBlock.Provider value={{countLineBlock, setCountLineBlock}}>
                <BlockLineFilter 
                  key={keyReact} 
                  countLineBlock={countLineBlock} 
                  deletedLineBlock={handlerDeletedLineBlock}  
                  addLineBlock={handlerAddLineBlock}
                />
              </CountLineBlock.Provider>
            )
          }

          <div className={style.block_info_wrapp}>
            <div className={style.block_info_double + ' ' + style.block_info}>
              <CustomDataListNumber styleSelect={'DataListDoubleLeft'} placeholder='Цена от, ₽' />
              <CustomDataListNumber styleSelect={'DataListDoubleRight'} placeholder='Цена от, ₽' />
            </div>

            <div className={style.block_info_double + ' ' + style.block_info}>
              <CustomDataListNumber arrItem={arrYear} styleSelect={'DataListDoubleLeft'} placeholder='Год от' />
              <CustomDataListNumber arrItem={arrYear} styleSelect={'DataListDoubleRight'} placeholder='До' />
            </div>

            <div className={style.block_info_one}>
              <CustomDataList CustomDataListStyle='DataListOneLeft' placeholder='КПП' IdInput="filter__kpp_input"  IdDataList="filter__kpp_dataList" />
              <CustomDataList CustomDataListStyle='DataListOneRight' placeholder='Топливо' declination='Любое' IdInput="filter__fuel_input"  IdDataList="filter__fuel_dataList" />
            </div>

          </div>

          <div className={style.block_info_wrapp}>
            <div className={style.block_info_double + ' ' + style.block_info}>
              <CustomDataListNumber styleSelect={'DataListDoubleLeft'} placeholder='Объем от, л' />
              <CustomDataListNumber styleSelect={'DataListDoubleRight'} placeholder='До' />
            </div>

            <div className={style.block_info}>
              <CustomDataList placeholder='Привод' IdInput="filter__driveUnit_input" IdDataList="filter__driveUnit_dataList" declination='Любой'/>
            </div>

            <div className={style.block_info_check_box + " " + style.block_info}>
              <CheckButtonBootsrap content={arrButtonCheckTwo}/>
            </div>

          </div>

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
                  <RadioButtonBootstrap />
                  {/* <CustomDataList declination="" placeholder={'Повреждение'} IdInput="filter__doc_input"  IdDataList="filter__doc_dataList" /> */}
                </div>
              </div>


          </div>

          <div className={style.block_info_wrapp + ' ' + style.margin_top_10px}>


            <div className={style.block_info}>
              <div className={style.wrapp_fourCheckBox}>
                  <label className={style.arrButtonCheckFourLabel}>
                      Дополнительно
                  </label>
                  <CheckButtonBootsrap styleWrappDiv='styleWrappDiv' content={arrButtonCheckFour}/>
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

                  <CheckButtonBootsrap styleWrappDiv='margin_top10px' content={arrButtonCheckOne}/>
                </div>
              
                <RadioButtonBootstrap radios={radios}/>
            </div>
           
          </div>


          <div className={style.block_info_wrapp}>
            <InputFormBootstrap />
          </div>

          <div className={style.block_info_wrapp}>

            <div className={style.block_info}></div>

            <div className={style.block_info + ' ' + style.flexCenter}>
              <ButtonCollapseFilter/>
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
