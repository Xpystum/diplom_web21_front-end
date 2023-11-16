import style from './ButtonIcon.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// иконки
// fa-solid fa-basket-shopping - корзина
// fa-solid fa-plus - плюс
// fa-solid fa-trash-can - мусорный бак

export default function ButtonPlus(props) {

    let size =  props.size ?? '1x';
    let IconContent = props.IconContent ?? '';
    let method = props.method ?? Function.prototype;
    let type = props.type ?? 'button';

    return (
        <>
            <button method={method} type={type} className={style.button}>
                <FontAwesomeIcon className={style.iconButton} icon={IconContent} size={size} aria-hidden='true'/>
            </button>
        </>
    )
}