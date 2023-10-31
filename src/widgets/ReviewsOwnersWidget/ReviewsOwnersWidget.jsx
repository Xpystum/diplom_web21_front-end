import { Link } from "react-router-dom";
import ReviewOwner from "./ReviewOwner"
import style from './ReviewsOwners.module.sass';

export default function ReviewsOwnersWidget(props){
    return (
    <div className={style.Reviews_owners_widget_wrap}>
    
        <Link to='#'>
            <h3 >Отзывы владельцев авто </h3>
        </Link>
        <div className={style.Reviews_owners_wrap}>{/*получить из BD и вывести через цикл 4 из всех*/}
           <ReviewOwner/>
           <ReviewOwner/>
           <ReviewOwner/>
           <ReviewOwner/>
        </div>
    </div>      
    )
  };
  