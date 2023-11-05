import { useState } from 'react';

import style from './ProductPreviewCard.module.sass';

import LabelsProduct from "../LabelsProduct/LabelsProduct";
import FavouritesStar from '../../UI/FavouritesStar/FavouritesStar';
import { URL_BACK_FILES } from '../../config';
import QuickLabelled from '../../UI/QuickLabelled/QuickLabelled';


export default function ProductPreviewCard(props) {
    let [stateFavourites, setStateFavourites] = useState(false);

    const car = props.car;
    let time = car.created_at
    time = time.substring(0, 10).split('-')

    const textIconStar = {
        initial: 'Добавить в избранное',
        reverse: 'Удалить из избранного',
    };


    function onAddFavorite() {
        console.log('Проверка выполения функции =>', onAddFavorite.name);

        stateFavourites ?
            setStateFavourites(false)
            :
            setStateFavourites(true)
    }

    return (
        <a className={style.ProductPreviewCard} href="#">
            <div className={style.Image}>
                <img alt="Седан Лада 2110 2005 года, 100000 рублей, Нижний Новгород" src={URL_BACK_FILES + car.img_src} />
            </div>

            <div className={style.PreviewText}>
                <div className={style.Title}>
                    <div className={style.Model}>
                        <div className={style.MarkPromotion} />
                        <span>
                            {`${car.mark} ${car.model}`}, {car.year}
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
                    {/* <FavouritesStar /> */}
                    <QuickLabelled
                        iconName={'Star'} // Имя иконки подставляем из UI/Icons/Icons/icons.svg из id
                        iconCaption={false}
                        iconCaptionText={textIconStar}
                        iconSize={
                            {
                                width: '16',
                                height: '16',
                            }
                        }
                        textSize={'16px'}
                        state={stateFavourites}
                        actionFunction={onAddFavorite}
                    />
                </div>
            </div>

        </a>

    )
};
