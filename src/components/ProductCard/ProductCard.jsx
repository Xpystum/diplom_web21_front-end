import { useState } from 'react';

import style from './ProductCard.module.sass';

import QuickLabelled from '../../UI/QuickLabelled/QuickLabelled';
import Slider from "../Slider/Slider";
import Button from '../../UI/Button/Button';
import Icons from '../../UI/Icons/Icons';


export default function ProductCard(props) {
    let [stateFavourites, setStateFavourites] = useState(false);

    let [stateShowCalculationMinPrice, setStateShowCalculationMinPrice] = useState(false);

    const textIconStar = {
        initial: 'Добавить в избранное',
        reverse: 'Удалить из избранного',
    };

    const textIconComplain = {
        initial: 'Пожаловаться на это объявление',
        reverse: 'Пожаловаться на это объявление',
    };

    const textIconPromote = {
        initial: 'Продвинуть объявление',
        reverse: 'Продвинуть объявление',
    };

    const textIconThisMyBull = {
        initial: 'Это мое объявление',
        reverse: 'Это мое объявление',
    };

    const textIconShareAd = {
        initial: 'Поделиться объявлением',
        reverse: 'Поделиться объявлением',
    };


    function onAddFavorite() {
        console.log('Проверка выполения функции =>', onAddFavorite.name);

        stateFavourites ?
            setStateFavourites(false)
            :
            setStateFavourites(true)
    }


    function onComplain() {
        console.log('Проверка выполения функции =>', onComplain.name);
    }


    function onPromote() {
        console.log('Проверка выполения функции =>', onPromote.name);
    }


    function onThisMyBull() {
        console.log('Проверка выполения функции =>', onThisMyBull.name);
    }


    function onShareAd() {
        console.log('Проверка выполения функции =>', onShareAd.name);
    }

    function onShowCalculationMinPrice() {
        console.log('Проверка выполения функции =>', onShowCalculationMinPrice.name);
        stateShowCalculationMinPrice ?
            setStateShowCalculationMinPrice(false)
            :
            setStateShowCalculationMinPrice(true)
    }

    function onHideCalculationMinPrice() {
        console.log('Проверка выполения функции =>', onHideCalculationMinPrice.name);

        stateShowCalculationMinPrice ?
            setStateShowCalculationMinPrice(false)
            :
            setStateShowCalculationMinPrice(true)
    }

    function onCreditCalculator() {
        console.log('Проверка выполения функции =>', onCreditCalculator.name);
    }


    return (
        <div className={style.ProductCard}>

            <div className={style.Headline}>

                <div className={style.Labell}>
                    <QuickLabelled
                        iconName={'Star'} // Имя иконки подставляем из UI/Icons/Icons/icons.svg из id
                        iconCaption={false}
                        iconCaptionText={textIconStar}
                        iconSize={
                            {
                                width: '30',
                                height: '30',
                            }
                        }
                        textSize={'16px'}
                        state={stateFavourites}
                        actionFunction={onAddFavorite}

                    />
                </div>

                <h1>
                    <span>Продажа</span>
                    <span className={style.Brand}>Chery</span>
                    <span className={style.Model}>Tiggo 4 Pro,</span>
                    <span className={style.YearMaking}>2023 год</span>
                    <span className={style.Location}>в Москве</span>
                </h1>

            </div>

            <div className={style.Сolumn}>
                <div className={style.СolumnLeft}>

                    <div className={style.PhotoGallery}>
                        <Slider />
                    </div>

                    <div className={style.QuickLabelleds}>
                        <div className={style.Labell}>
                            <QuickLabelled
                                iconName={'Star'} // Имя иконки подставляем из UI/Icons/Icons/icons.svg из id
                                iconCaption={true}
                                iconCaptionText={textIconStar}
                                iconSize={
                                    {
                                        width: '20',
                                        height: '20',
                                    }
                                }
                                textSize={'16px'}
                                state={stateFavourites}
                                actionFunction={onAddFavorite}
                            />
                        </div>
                        <div className={style.Labell}>
                            <QuickLabelled
                                iconName={'Complain'} // Имя иконки подставляем из UI/Icons/Icons/icons.svg из id
                                iconCaption={true}
                                iconCaptionText={textIconComplain}
                                iconSize={
                                    {
                                        width: '20',
                                        height: '20',
                                    }
                                }
                                textSize={'16px'}
                                state={false}
                                actionFunction={onComplain}
                            />
                        </div>

                        <div className={style.Labell}>
                            <QuickLabelled
                                iconName={'Promote'} // Имя иконки подставляем из UI/Icons/Icons/icons.svg из id
                                iconCaption={true}
                                iconCaptionText={textIconPromote}
                                iconSize={
                                    {
                                        width: '20',
                                        height: '20',
                                    }
                                }
                                textSize={'16px'}
                                state={false}
                                actionFunction={onPromote}
                            />
                        </div>

                        <div className={style.Labell}>
                            <QuickLabelled
                                iconName={'ThisMyBull'} // Имя иконки подставляем из UI/Icons/Icons/icons.svg из id
                                iconCaption={true}
                                iconCaptionText={textIconThisMyBull}
                                iconSize={
                                    {
                                        width: '20',
                                        height: '20',
                                    }
                                }
                                textSize={'16px'}
                                state={false}
                                actionFunction={onThisMyBull}
                            />
                        </div>

                        <div className={style.Labell}>
                            <QuickLabelled
                                iconName={'ShareAd'} // Имя иконки подставляем из UI/Icons/Icons/icons.svg из id
                                iconCaption={true}
                                iconCaptionText={textIconShareAd}
                                iconSize={
                                    {
                                        width: '20',
                                        height: '20',
                                    }
                                }
                                textSize={'16px'}
                                state={false}
                                actionFunction={onShareAd}
                            />
                        </div>
                    </div>

                    <div className={style.DataAdPlacement}>
                        <div className={style.NumberDateAd}>
                            <span>Объявление</span>
                            <span className={style.NumberAd}>52434544</span>
                            <span>от</span>
                            <span className={style.DateAd}>07.10.2023</span>
                        </div>
                        <div className={style.CountViewsAd}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--gray-icon, hsl(210, 8%, 76%))"><g fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5c-4.064 0-7.346-2.304-9.85-6.91-.2-.369-.2-.811 0-1.18C2.652 4.804 5.936 2.5 10 2.5s7.346 2.304 9.85 6.91c.2.369.2.811 0 1.18-2.502 4.606-5.786 6.91-9.85 6.91Zm0-2.5c2.806 0 5.08-2.238 5.08-5 0-2.763-2.274-5-5.08-5-2.807 0-5.08 2.237-5.08 5 0 2.762 2.273 5 5.08 5Z"></path><path d="M10 12.5c1.403 0 2.54-1.12 2.54-2.5S11.403 7.5 10 7.5c-1.402 0-2.54 1.12-2.54 2.5s1.138 2.5 2.54 2.5Z"></path></g></svg>
                            <span className={style.CountAd}>55</span>
                        </div>
                    </div>
                </div>

                <div className={style.СolumnRight}>

                    <div className={style.Prices}>
                        <div className={style.Price}>
                            <span>
                                {new Intl.NumberFormat("ru-RU").format(2620000)} ₽
                            </span>
                        </div>

                        {
                            (true) ? //Условие-заглушка, надо будет проставить если в предложении есть min. цена
                                <div className={style.MinPrice}>
                                    <div className={style.MinPriceLabel}>минимальная цена</div>
                                    <button className={style.MinPriceValue} onClick={() => { onShowCalculationMinPrice() }}>
                                        <span>{new Intl.NumberFormat("ru-RU").format(2380000)} ₽</span>
                                    </button>
                                </div>
                                :
                                ''
                        }

                        <div // Всплываюшая плашка с условиями расчета минимальной цены
                            className={
                                stateShowCalculationMinPrice ?
                                    style.ShowCalculationMinPrice
                                    :
                                    style.CalculationMinPrice
                            }
                        >
                            <div className={style.PricesCalculation}>
                                <div className={style.Price}>
                                    <span>
                                        {new Intl.NumberFormat("ru-RU").format(2620000)} ₽
                                    </span>
                                </div>

                                {
                                    (true) ?
                                        <div className={style.MinPrice}>
                                            <div className={style.MinPriceLabel}>минимальная цена</div>
                                            <button className={style.MinPriceValue}>
                                                <span>{new Intl.NumberFormat("ru-RU").format(2380000)} ₽</span>
                                            </button>
                                        </div>
                                        :
                                        ''
                                }
                            </div>

                            <div className={style.PricesCalculationTerm}>

                                <div className={style.AdditionalDiscount}>
                                    <div className={style.AdditionalDiscountValue}>
                                        <span>дополнительная скидка</span>
                                        <div>
                                            <span>-</span>
                                            <span>{new Intl.NumberFormat("ru-RU").format(240000)}</span>
                                            <span>₽</span>
                                        </div>
                                    </div>
                                    <div className={style.AdditionalDiscountText}>
                                        Дополнительная скидка (выгода) при определенных условиях, условия уточняйте в отделе продаж
                                    </div>
                                </div>

                                <div className={style.Line}></div>


                                <div className={style.MaxDiscount}>
                                    <div className={style.MaxDiscountValue}>
                                        <span>Максимальная скидка</span>
                                        <div>
                                            <span>-</span>
                                            <span>{new Intl.NumberFormat("ru-RU").format(240000)}</span>
                                            <span>₽</span>
                                        </div>
                                    </div>
                                    <div className={style.MaxDiscountText}>
                                        Максимальная скидка, с учётом всех акций
                                    </div>
                                </div>

                            </div>

                            <div
                                className={style.BtnCalculationMinPrice}
                                onClick={() => { onHideCalculationMinPrice() }}>
                                <Icons
                                    name={'CrossBtn'}
                                    sizeWidth={20}
                                    sizeHeight={20}
                                />
                            </div>
                        </div>{/* END высплывающего меню */}
                    </div> {/* END раздела Price */}


                    <div className={style.CreditCalculator}>
                        <Button
                            name={'В кредит от ' + 46000 + ' ₽ в месяц'}
                            method={onCreditCalculator}
                        />
                    </div>

                    <div className={style.CharacteristicsProduct}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Двигатель</th>
                                    <td>
                                        <span>бензин, 1.5 л</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Мощность</th>
                                    <td>
                                        <span>147 л.с.</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Коробка передач</th>
                                    <td>
                                        <span>вариатор</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Привод</th>
                                    <td>
                                        <span>передний</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Цвет</th>
                                    <td>
                                        <span>черный</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Пробег</th>
                                    <td>
                                        <span className={style.Green}>новый автомобиль</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Руль</th>
                                    <td>
                                        <span>левый</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Поколение</th>
                                    <td>
                                        <span><a href='#'>1 поколение</a></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Комплектация</th>
                                    <td>
                                        <span><a href='#'>1.5PT CVT Ultimate</a></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>VIN</th>
                                    <td>
                                        <span>LVV**************</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={style.DescriptionProduct}>
                        <div className={style.DescriptionText}>
                            <span>Дополнительно:</span>
                            <span>
                                <span>Месяц продаж CHERY в «У Сервис+»! Увеличиваем выгоды на все автомобили в наличии + дополнительное оборудование в ПОДАРОК! Успейте купить на специальных условиях!</span>
                                <span>Комплектация: Chery Tiggo 4 PRO Ultimate</span>
                                <span>Основные опции: 2023, климат-контроль, аудио, кожа, airbags, ABS, ESP, светодиодные фары, центральный замок, электропривод стекол, электропривод сидений, электропривод зеркал, круиз-контроль, датчик дождя, обогрев сидений, парктроник, видеокамера, люк, литые диски, R18.</span>
                                <span>Цвет кузова: Глубокий черный Metallic.</span>
                                <span>Кожаная отделка сидений.</span>
                                <span>Цвет обивки сидений: черный, серая прошивка.</span>
                                <span>Автомобиль в наличии на складе дилера.</span>
                                <span>Предложение обновлено 06 ноября 2023 г. в 08 ч 56 мин.</span>
                                <span>Интерьер: Тип сидений: обычные</span>
                                <span>Кожаная отделка сидений</span>
                                <span>Цвет обивки сидений: черный, серая прошивка</span>
                                <span>Цвет передней панели: черный</span>
                                <span>Цвет коврового покрытия: черный</span>
                                <span>Цвет потолка: серый</span>
                            </span>
                        </div>
                        <div className={style.DescriptionLocation}>
                            <span>Город:</span>
                            <span>Москва</span>
                        </div>
                    </div>

                    <div className={style.AdContacts}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>

                </div>
            </div>
        </div>
    )
};
