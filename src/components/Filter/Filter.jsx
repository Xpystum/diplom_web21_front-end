import style from "./Filter.module.sass"
import ButtonPlus from '../../UI/ButtonIcon/ButtonIcon';


import CustomDataList from '../CustomDataList/CustomDataList';
import CustomDataListImg from '../CustomDataListImg/CustomDataListImg';
import CustomDataListNumber from '../CustomDataListNumber/CustomDataListNumber';
import ButtonMultiButton from '../ButtonMultiButton/ButtonMultiButton';
import RadioButtonBootstrap from '../RadioButtonBootstrap/RadioButtonBootstrap';
import CheckButtonBootsrap from '../CheckButtonBootsrap/CheckButtonBootsrap';
import { fillArrYear } from './FilterJavaScript';




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


  return (
    <div className={style.wrappFilterProcent}>
      
      <div className={style.wrappFilterPx}>
        <form className={style.wrappFilter__filterForm}>
          <div className={style.block_info_wrapp}>
            <div className={style.block_info}>
              <CustomDataList placeholder={'Марка'} IdInput="filter__mark_input"  IdDataList="filter__mark_dataList" />
            </div>

            <div className={style.block_info}>
              <CustomDataList placeholder={'Модель'} IdInput="filter__model_input" IdDataList="filter__model_dataList"/>
              {/* <DataList placeholder='Модель' ListInputName="filter__model_list"  IdDataList="filter__model_list"/> */}
            </div>

            <div className={style.block_info}>
              
              <CustomDataListImg placeholder={"Поколение"}/>
              {/* <DataList placeholder='Поколение' ListInputName="filter__pocoleny_list"  IdDataList="filter__pocoleny_list"/> */}
              <div className={style.block_info_icon}>
                {/* <ButtonPlus IconContent="fa-solid fa-trash-can" size='2x'/> */}
                <ButtonPlus IconContent="fa-solid fa-plus" size='2x'/>
              </div>
            </div>
          </div>
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
            
         
          <input type="text" />

          <button>Показать</button>
        </form>
      </div>
    </div>
  )
};
