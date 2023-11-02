import style from './ProductPreviewCard.module.sass';

import LabelsProduct from "../LabelsProduct/LabelsProduct";
import FavouritesStar from '../../UI/FavouritesStar/FavouritesStar';


export default function ProductPreviewCard(props) {

  const car = props.car;
  let time = car.created_at
  time = time.substring(0, 10).split('-')
    

  return (
    <a className={style.ProductPreviewCard} href="#">
      <div className={style.Image}>
        <img alt="Седан Лада 2110 2005 года, 100000 рублей, Нижний Новгород" src="/vaz2110.jpg" />
      </div>

      <div className={style.PreviewText}>
        <div className={style.Title}>
          <div className={style.Model}>
            <div className={style.MarkPromotion} />
            <span>
              {`${car.name} ${car.model}`}, {car.year}
            </span>
          </div>
          <div className={style.Equipment}>
            <span>
            {car.equipment}
            </span>
          </div>
        </div>

        <div className={style.Components}>
          <span>
            {car.engine},
          </span>
          <span>
            {car.transmission},
          </span>
          <span>
            {car.drive_unit},
          </span>
          <span>
            {new Intl.NumberFormat("ru-RU").format(car.mileage)} км
          </span>
        </div>

        <div className={style.Labels}>
          <LabelsProduct />
        </div>
      </div>

      <div className={style.PricesLocation}>
        <div className={style.Prices}>
          <div className={style.Price}>
            <span>
              {new Intl.NumberFormat("ru-RU").format(car.price)} ₽
            </span>
          </div>
          {
            (car.old_price !== null) ?
              <div className={style.OldPrice}>
                <div className={style.OldPrice__Label}>хорошая цена</div>
                <div className={style.OldPrice__Value}>
                  <span>{new Intl.NumberFormat("ru-RU").format(car.old_price)} ₽</span>
                </div>
              </div>
              :
              ''
          }
        </div>

        <div className={style.Location}>
          <div>{car.city}</div>
          <div>{`${time[2]}.${time[1]}.${time[0]}`}</div>
        </div>
        <div className={style.Favourites}>
          <FavouritesStar />
        </div>
      </div>

    </a>

  )
};
