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
              <DataList />
              {/* <Form.Select className={style.selectBootstrap} aria-label="Default select example">
                <option>Марка</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select> */}
            </div>

            <div className={style.block_info}>
              <Form.Select className={style.selectBootstrap} aria-label="Default select example">
                <option>Модель</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>

            <div className={style.block_info}>
              <Form.Select className={style.selectBootstrap} aria-label="Default select example">
                <option>Поколение</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <div className={style.block_info_icon}>
                {/* <ButtonPlus IconContent="fa-solid fa-trash-can" size='2x'/> */}
                <ButtonPlus IconContent="fa-solid fa-plus" size='2x'/>
              </div>
            </div>
          </div>

          <div className={style.block_info}>

            <div className={style.block_info_double}>
                <Form.Select className={style.selectBootstrap} aria-label="Default select example">
                  <option>Цена от, ₽</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

                <Form.Select className={style.selectBootstrap} aria-label="Default select example">
                  <option>До</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
            </div>

            <div className={style.block_info_double}>
                <Form.Select className={style.selectBootstrap} aria-label="Default select example">
                  <option>Год от</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

                <Form.Select className={style.selectBootstrap} aria-label="Default select example">
                  <option>До</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
            </div>

            <div className={style.block_info_one}>
                <Form.Select className={style.selectBootstrap} aria-label="Default select example">
                  <option>КПП</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>

            <div className={style.block_info_one}>
                <Form.Select className={style.selectBootstrap} aria-label="Default select example">
                  <option>Топливо</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>

          </div>


          
         
          <input type="text" />

          <button>Показать</button>
        </form>
      </div>
    </div>
  )
};
