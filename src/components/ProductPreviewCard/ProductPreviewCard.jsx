import style from './ProductPreviewCard.module.sass';

import LabelsProduct from "../LabelsProduct/LabelsProduct";



export default function ProductPreviewCard(props) {
  return (
    <a className={style.ProductPreviewCard} href="#">
      <div className={style.Image}>
        <img alt="Седан Лада 2110 2005 года, 205000 рублей, Ангарск" src="vaz2110.jpg" />
      </div>

      <div className={style.PreviewText}>
        <div className={style.Title}>
          <div className={style.Model}>
            <div className={style.MarkPromotion} />
            <span>
              Лада 2110, 2005
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
            230 000 км
          </span>
        </div>

        <div class={style.Labels}>
          <LabelsProduct />
        </div>
      </div>

      <div className="css-1dkhqyq e1f2m3x80">
        <div>
          <div class="css-1i8tk3y eyvqki92">
            <div class="css-1dv8s3l eyvqki91">
              <span class="css-46itwz e162wx9x0">
                <span data-ftid="bull_price">205000
                </span>₽</span>
            </div>
            <div class="css-11m58oj evjskuu0">
              <div class="css-16vzcmq ejipaoe0">высокая цена</div>
            </div>
          </div>
        </div>
        <div class="css-1hrfta1 e162wx9x0">
          <div class="css-1x4jcds eotelyr0">
            <span data-ftid="bull_location" class="css-1488ad e162wx9x0">Ангарск</span>
            <div data-ftid="bull_date">50 минут назад</div>
          </div>
        </div>
        <div class="css-pivpd8 e13r0v7w0">
          <div class="css-1rozdag">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.606.973a1.485 1.485 0 0 1 2.788 0l3.043 7.653c.217.547.709.92 1.273.968l7.9.662c1.337.112 1.88 1.86.86 2.773l-6.018 5.393c-.43.385-.618.989-.486 1.565l1.838 8.063c.312 1.366-1.109 2.446-2.255 1.714l-6.762-4.321a1.453 1.453 0 0 0-1.574 0l-6.763 4.32c-1.145.733-2.566-.347-2.255-1.713l1.84-8.063a1.623 1.623 0 0 0-.487-1.565L.53 13.029c-1.02-.914-.477-2.66.86-2.773l7.9-.662a1.517 1.517 0 0 0 1.273-.968L13.606.973Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

    </a>

  )
};
