import Button from '../../UI/Button/Button';
import style from './RelevanceProductWidget.module.sass';

import RelevanceProductCart from './RelevanceProductCart/RelevanceProductCart';


export default function RelevanceProductWidget(props){
  
    return (
      <div className={style.ProductWidgetWrapp}>
        <h3 className={style.ProductWidgetTitle}>Похожие автомобили</h3>
        <div className={style.wrappRelevanceProductCart}>
          <RelevanceProductCart/>
          <RelevanceProductCart/>
          <RelevanceProductCart/>

          <RelevanceProductCart/>
          <RelevanceProductCart/>
          <RelevanceProductCart/>
        </div>
        <Button name_class='relevance' name='Показать еще объявление' type="button"/>
      </div>
    )
  };
  