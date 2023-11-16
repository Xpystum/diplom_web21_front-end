import style from "./Filter.module.sass"
import Form from 'react-bootstrap/Form';
import ButtonPlus from '../../UI/ButtonIcon/ButtonIcon';

import DataList from '../DataList/DataList';



// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Filter(props){
  return (
    <div className={style.wrappFilterProcent}>
      <div className={style.wrappFilterPx}>
        <form className={style.wrappFilter__filterForm}>
          <div className={style.block_info}>
            <div className={style.block_info}>
              <DataList placeholder='Марка' ListInputNameName="filter__mark_list"  IdDataList="filter__mark_list"/>
            </div>

            <div className={style.block_info}>
              <DataList placeholder='Модель' ListInputNameName="filter__model_list"  IdDataList="filter__model_list"/>
            </div>

            <div className={style.block_info}>
              <DataList placeholder='Поколение' ListInputNameName="filter__pocoleny_list"  IdDataList="filter__pocoleny_list"/>
              <div className={style.block_info_icon}>
                {/* <ButtonPlus IconContent="fa-solid fa-trash-can" size='2x'/> */}
                <ButtonPlus IconContent="fa-solid fa-plus" size='2x'/>
              </div>
            </div>
          </div>

          <div className={style.block_info}>

            <div className={style.block_info_double + ' ' + style.block_info}>
              <DataList styleName={'inputDataListDoubleLeft'} placeholder='Цена от, ₽' ListInputName="filter__afterprice_list"  IdDataList="filter__afterprice_list"/>
              <DataList styleName={'inputDataListDoubleRight'} placeholder='До' ListInputName="filter__before_list"  IdDataList="filter__before_list"/>
            </div>

            <div className={style.block_info_double + ' ' + style.block_info}>
              <DataList styleName={'inputDataListDoubleLeft'} placeholder='Год от' ListInputName="filter__afteryear_list"  IdDataList="filter__afteryear_list"/>
              <DataList styleName={'inputDataListDoubleRight'} placeholder='До' ListInputName="filter__beforeyear_list"  IdDataList="filter__beforeyear_list"/>
            </div>

            <div className={style.block_info_one}>
              <DataList styleName={'inputDataListOneLeft'} placeholder='КПП' ListInputName="filter__kpp_list"  IdDataList="filter__kpp_list"/>
              <DataList styleName={'inputDataListOneRight'} placeholder='Топливо' ListInputName="filter__fuel_list"  IdDataList="filter__fuel_list"/>
            </div>

          </div>

         
          <input type="text" />

          <button>Показать</button>
        </form>
      </div>
    </div>
  )
};
