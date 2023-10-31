import Button from '../../UI/Button/Button';
import style from './RelevanceProductWidget.module.sass';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import RelevanceProductCart from './RelevanceProductCart/RelevanceProductCart';


export default function RelevanceProductWidget(props){

  let productsRedux = useSelector(state => state.dataState.value.products);
  let start = 0;

  let [end, endState] = useState(3);
  let [products, productState] = useState(productsRedux.slice(start, end));

  function buttonOnClick(){

    end += 3;

    if(end >= productsRedux.length  ) { 
      return 0; 
    }
    endState(end);
    productState(productsRedux.slice(start, end));
  }
  
  return (
    <div className={style.ProductWidgetWrapp}>
      <h3 className={style.ProductWidgetTitle}>Похожие автомобили</h3>
      <div className={style.wrappRelevanceProductCart}>
        {
          products.map((product)=>
            
            <RelevanceProductCart key={product.id} product={product} />
            
          )
        }
      </div>
      <Button method={buttonOnClick} name_class='relevance' name='Показать еще объявление' type="button"/>
    </div>
    )
    
  };
  