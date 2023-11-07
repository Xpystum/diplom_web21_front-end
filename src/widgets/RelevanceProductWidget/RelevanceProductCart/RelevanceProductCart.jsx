import style from './RelevanceProductCart.module.sass';
import { URL_IMG } from "../../../config";

export default function RelevanceProductCart(props){
    let product = props.product;
    let urlImg = URL_IMG

    let price = product.price.toLocaleString();

    return (
        <a id={style.ProductCartLink} href="">

            <div className={style.WrappImage}>
                <img className={style.Image} src={urlImg + "/" + product.img_src}/>
            </div>

            <div className={style.WrappName}>
                <span className={style.Name}>
                {product.mark} {product.model}, {product.year}
                </span>
            </div>

            <div className={style.WrappPrice}>
                <span className={style.Price}>
                    {price} ₽
                </span>
            </div>

        </a>
    )

  };
  