import style from "./Filter.module.sass"
import ButtonPlus from '../../UI/ButtonIcon/ButtonIcon';
import Form from 'react-bootstrap/Form';
import CircleColor from '../../UI/CircleColor/CircleColor';
import CustomDataList from '../CustomDataList/CustomDataList';
import CustomDataListImg from '../CustomDataListImg/CustomDataListImg';
import CustomDataListNumber from '../CustomDataListNumber/CustomDataListNumber';
import ButtonMultiButton from '../ButtonMultiButton/ButtonMultiButton';

import { fillArrYear } from './FilterJavaScript';


let year = fillArrYear();
let arrYear = year.map((index)=>{
  return { value: index, label: index }
});


export default function Filter(props){
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
              <Form.Check className={style.check_box}>
                <Form.Check.Input className={style.check_box_input} />
                <Form.Check.Label className={style.check_box_label}>{"Непроданные"}</Form.Check.Label>
              </Form.Check>

              <Form.Check className={style.check_box}>
                <Form.Check.Input className={style.check_box_input} />
                <Form.Check.Label className={style.check_box_label}>{"С Фото"}</Form.Check.Label>
              </Form.Check>
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
                {/* заглушка */}
              </div>

            <div className={style.block_info}>
              {/* заглушка */}
            </div>

            <div className={style.block_info}>
              {/* заглушка */}
            </div>
          </div>

          
         
          <input type="text" />

          <button>Показать</button>
        </form>
      </div>
    </div>
  )
};
