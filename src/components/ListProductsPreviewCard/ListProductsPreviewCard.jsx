import style from './ListProductsPreviewCard.module.sass';

import ProductPreviewCard from "../ProductPreviewCard/ProductPreviewCard";


export default function ListProductsPreviewCard(props) {

  const cars = props.cars;

  return (
    <div className={style.ListProductsPreviewCard}>

      {
        cars.map((car) =>
          <ProductPreviewCard
            key={car.id}
            car={car}
          />
        )
      }


    </div>
  )
};
