import img from './272x205.png'
import style from './CardCarusel.module.sass'
export default function CardCarusel(props){
    let item = props.item
    return(
        <div className={style.item} key={item.id}>
            {/* {item.id} */}
            <div className={style.img__wrap}>
                <img src={img} alt="0" />
                <div className={style.price}>
                    2 400 000 &#8381;
                </div>
            </div>
            <div className={style.info}>
               <p className={style.auto}>Mazda RX-8 2004</p> 
               <p className={style.city}>Нижний Новгород</p> 
            </div>
      </div>
    );
}