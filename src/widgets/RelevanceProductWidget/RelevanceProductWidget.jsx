import Button from '../../UI/Button/Button';
import style from './RelevanceProductWidget.module.sass';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import RelevanceProductCart from './RelevanceProductCart/RelevanceProductCart';
import { request } from "../../Action/request";


export default function RelevanceProductWidget(props){

  // let idProduct = props.id;


  let [end, endState] = useState(3);
  let [allProduct, allProductState] = useState([]);
  let [products, productState] = useState([]);

    useEffect(()=>{
    request('post', 'relevance-product', (response) => {
      if (response.status === 200) {
        allProductState(response.data);
        productState(response.data.slice(0, end));
      }
    }, {id:10});
  }, []);


  function buttonOnClick(){
    end += 3;
    if(end > allProduct.length) { 
      return 0; 
    }

    endState(end);
    
    productState(allProduct.slice(0, end));
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
  