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
          <div className={style.loaderSmall}>
            <PreloaderSmall />
          </div>
        :
          (cars.length != 0)?
            cars.map((car) =>
              <ProductPreviewCard
                key={car.id}
                car={car}
              />
            )
          :
          <div className={style.NoProduct}>
            <p>Товаров в данной категории нет</p>
          </div>
      }
    </div>
  )
};
