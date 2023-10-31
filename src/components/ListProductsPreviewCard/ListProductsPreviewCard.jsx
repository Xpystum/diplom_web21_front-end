import style from './ListProductsPreviewCard.module.sass';

import ProductPreviewCard from "../ProductPreviewCard/ProductPreviewCard";
import { useSelector, useDispatch } from 'react-redux';
import { loaderSwitchProducts } from '../../redux/dataState';
import PreloaderSmall from '../PreloaderSmall/PreloaderSmall';


export default function ListProductsPreviewCard(props) {

  const cars = props.cars;

  let loaderProducts = useSelector(state => state.dataState.value.products.loader);


  return (
    <div className={style.ListProductsPreviewCard}>

      {
        (loaderProducts)?
          <PreloaderSmall />
        :
          (cars.length != 0)?
            cars.map((car) =>
              <ProductPreviewCard
                key={car.id}
                car={car}
              />
            )
          :
            "товаров в данной категории нет"
          

      }

      


    </div>
  )
};
