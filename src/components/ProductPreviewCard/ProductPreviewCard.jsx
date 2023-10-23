import style from './ProductPreviewCard.module.sass';

import LabelsProduct from "../LabelsProduct/LabelsProduct";
import FavouritesStar from '../../UI/FavouritesStar/FavouritesStar';


export default function ProductPreviewCard(props) {

  const car = props.car;
  console.log(car);

  return (
    <a className={style.ProductPreviewCard} href="#">
      <div className={style.Image}>
        <img alt="Седан Лада 2110 2005 года, 100000 рублей, Нижний Новгород" src="vaz2110.jpg" />
      </div>

      <div className={style.PreviewText}>
        <div className={style.Title}>
          <div className={style.Model}>
            <div className={style.MarkPromotion} />
            <span>
              {`${car.brand} ${car.model}`}, 2005
            </span>
          </div>
          <div className={style.Equipment}>
            <span>
              1.6i MT 21104
            </span>
          </div>
        </div>

        <div className={style.Components}>
          <span>
            1.6 л (89 л.с.),
          </span>
          <span>
            бензин,
          </span>
          <span>
            механика,
          </span>
          <span>
            передний,
          </span>
          <span>
            {new Intl.NumberFormat("ru-RU").format(230000)} км
          </span>
        </div>

        <div class={style.Labels}>
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
          <div>Нижний Новгород</div>
          <div>сегодня</div>
        </div>
        <div class={style.Favourites}>
          <FavouritesStar />
        </div>
      </div>

    </a>

  )
};
