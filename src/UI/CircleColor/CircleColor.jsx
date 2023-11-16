import style from './CircleColor.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// .color_white
//     background: #fff
//     border: 1px solid #BDC2C7
// .color_black
//     background: #000
// .color_brown
//     background: #7b3f00
// .color_violet
//     background: #bf8bff 
// .color_green
//     background: #00ff00
// .color_gray
//     background: #808080
// .color_silver
//     background: #c0c0c0
// .color_blue 
//     background: #0000FF
// .color_golyboe
//     background: #00bfff
// .color_beige
//     background: #f5f5dc 
// .color_yellow
//     background: #ffff00
// .color_golden
//     background: #ffd700 
// .color_red
//     background: #ff0000
// .color_burgundy
//     background: #800020
// .color_pink
//     background: #ffc0cb
// .color_orange
//     background: #ffa500


export default function CircleColor(props) {
    return (
        <div id={style.wrapp_circle_color} className={style.color_blue }>
            <FontAwesomeIcon className={style.icon} icon="fa-solid fa-check" />
        </div>
    )
};
