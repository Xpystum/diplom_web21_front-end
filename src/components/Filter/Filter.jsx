import style from "./Filter.module.sass"
import ButtonPlus from '../../UI/ButtonIcon/ButtonIcon';
import DataList from '../DataList/DataList';
import Form from 'react-bootstrap/Form';
import CircleColor from '../../UI/CircleColor/CircleColor';
import CustomDataList from '../CustomDataList/CustomDataList';
import CustomDataListImg from '../CustomDataListImg/CustomDataListImg';



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
          _ВСЁ ЧТО НИЖЕ НЕ ДОДЕЛАНО_
          <div className={style.block_info_wrapp}>
            <div className={style.block_info_double + ' ' + style.block_info}>
              <DataList styleNameInput={'inputDataListDoubleLeft'} placeholder='Цена от, ₽' ListInputName="filter__afterprice_list"  IdDataList="filter__afterprice_list"/>
              <DataList styleNameInput={'inputDataListDoubleRight'} placeholder='До' ListInputName="filter__before_list"  IdDataList="filter__before_list"/>
            </div>

            <div className={style.block_info_double + ' ' + style.block_info}>
              <DataList styleNameInput={'inputDataListDoubleLeft'} placeholder='Год от' ListInputName="filter__afteryear_list"  IdDataList="filter__afteryear_list"/>
              <DataList styleNameInput={'inputDataListDoubleRight'} placeholder='До' ListInputName="filter__beforeyear_list"  IdDataList="filter__beforeyear_list"/>
            </div>

            <div className={style.block_info_one}>
              <DataList styleNameWrapp={"wrapp_dataList_one"} styleNameInput={'inputDataListOneLeft'} placeholder='КПП' ListInputName="filter__kpp_list"  IdDataList="filter__kpp_list"/>
              <DataList styleNameWrapp={"wrapp_dataList_one_right"} styleNameInput={'inputDataListOneRight'} placeholder='Топливо' ListInputName="filter__fuel_list"  IdDataList="filter__fuel_list"/>
            </div>

          </div>

          <div className={style.block_info_wrapp}>
            <div className={style.block_info_double + ' ' + style.block_info}>
              <DataList styleNameInput={'inputDataListDoubleLeft'} placeholder='Объем от, л' ListInputName="filter__afterprice_list"  IdDataList="filter__afterprice_list"/>
              <DataList styleNameInput={'inputDataListDoubleRight'} placeholder='До' ListInputName="filter__before_list"  IdDataList="filter__before_list"/>
            </div>

            <div className={style.block_info}>
              <DataList placeholder='Привод' ListInputNameName="filter__mark_list"  IdDataList="filter__mark_list"/>
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
              <DataList placeholder='Тип Кузова' ListInputNameName="filter__mark_list"  IdDataList="filter__mark_list"/>
            </div>
          </div>

          <div className={style.block_info_wrapp}>
           <div className={style.block_info}>
              <CircleColor />
            </div>
          </div>

         

         
          <input type="text" />

          <button>Показать</button>
        </form>
      </div>
    </div>
  )
};
