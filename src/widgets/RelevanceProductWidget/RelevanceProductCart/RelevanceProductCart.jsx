import style from './RelevanceProductCart.module.sass';

export default function RelevanceProductCart(props){

    return (

        <a id={style.ProductCartLink} href="">
            
            <div className={style.WrappImage}>
                <img className={style.Image} src='https://s1.auto.drom.ru/photo/-x5N2csh5AaZ2dg0h10Fq_RhH0R-zpxcdFtq9S2J1Dm_QSTPTBilkQGrQizDLRMH_Mlo2qoUemA5merpblfiI-XUj4P9lQ.jpg'/>
            </div>

            <div className={style.WrappName}>
                <span className={style.Name}>
                    Lexus RX350, 2011
                </span>
            </div>

            <div className={style.WrappPrice}>
                <span className={style.Price}>
                    2 100 000 ₽
                </span>
            </div>

        </a>

    )

  };
  