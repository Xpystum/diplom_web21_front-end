import style from './RelevanceProductCart.module.sass';
import { URL_IMG } from "../../../config";

export default function RelevanceProductCart(props){
    let product = props.product;
    let urlImg = URL_IMG
    let price = product.price.toLocaleString();

    return (
        <a id={style.ProductCartLink} href="">

            <div className={style.WrappImage}>
                {(product.main_img != null)? <img className={style.Image} src={urlImg + product.main_img} />:<svg className={style.Image} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><g fill="none" fillRule="evenodd"><path d="M0 180h320V0H0z"></path><path fill="var(--popup-like-bg, #fff)" d="M289.702 101.079c-12.603-3.297-30.575-5.793-51.103-7.64h.001c-11.428-1.43-33.6-32.534-68.314-35.25-32-2.431-68.857.857-78.287 5.718-9.427 4.861-31.142 26.45-31.142 26.45S31.143 92.5 24.715 93.501l2.714 10.722c1.856 21.444 5.436 40.848 43.713 40.85 1.96 9.41 10.29 16.48 20.274 16.48 9.713 0 17.84-6.699 20.081-15.726h111.268c2.238 9.027 10.367 15.727 20.08 15.727 9.982 0 18.315-7.072 20.275-16.48h.002s13.153-.82 20.437-4.68c5.714-3.002 23.43-34.884 6.143-39.316"></path><path stroke="#8B8B8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M152.285 67.624c1.573 6.72 3.716 16.013 3.858 19.873M24.714 93.502c6.429-1 36.143-3.145 36.143-3.145S82.571 68.768 92 63.907c9.429-4.86 46.286-8.149 78.286-5.718C205 60.905 227.17 92.009 238.6 93.439M71.15 145.075c-38.286 0-41.864-19.405-43.722-40.85"></path><path stroke="#8B8B8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M263.123 145.075s13.15-.82 20.437-4.68c5.714-3.002 23.427-34.884 6.141-39.316C247.043 89.92 142.911 87.92 86.14 89.315"></path><path stroke="#8B8B8B" strokeLinejoin="round" strokeWidth="4" d="M222.739 145.828H111.52"></path><path stroke="#8B8B8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M91.416 120.093c11.44 0 20.715 9.282 20.715 20.73 0 11.45-9.275 20.731-20.715 20.731-11.441 0-20.714-9.281-20.714-20.73s9.273-20.73 20.714-20.73zm151.429 0c11.44 0 20.714 9.282 20.714 20.73 0 11.45-9.274 20.731-20.714 20.731-11.442 0-20.714-9.281-20.714-20.73s9.272-20.73 20.714-20.73zM107 70.484c-3.2 2.201-8.216 8.516-9.835 12.725m57.54 18.093h13.422-13.422zm-65.048 0h13.423-13.423z"></path></g></svg>}

                
            </div>

            <div className={style.WrappName}>
                <span className={style.Name}>
                {product.brand_name} {product.model_name}, {product.year}
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
  