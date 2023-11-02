import style from './ProductPreviewCard.module.sass';

import LabelsProduct from "../LabelsProduct/LabelsProduct";
import FavouritesStar from '../../UI/FavouritesStar/FavouritesStar';
import { URL_BACK_FILES } from '../../config';
import moment from 'moment/moment';
import 'moment/locale/ru';

export default function ProductPreviewCard(props) {
  const car = props.car;
  let time = car.created_at
  time = time.substring(0, 10).split('-').join('')

  return (
    <a className={style.ProductPreviewCard} href="#">
      <div className={style.Image}>
        <img alt={car.img_src} src={URL_BACK_FILES + car.img_src} />
      </div>

      <div className={style.PreviewText}>
        <div className={style.Title}>
          <div className={style.Model}>
            <div className={style.MarkPromotion} />
            <span>
              {`${car.mark} ${car.model}, ${car.year}`} 
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
          <LabelsProduct car ={car}/>
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
          <div>{moment(time, "YYYYMMDD").fromNow()}</div>
        </div>
        <div className={style.Favourites}>
          <FavouritesStar />
        </div>
      </div>

    </a>

  )
};
