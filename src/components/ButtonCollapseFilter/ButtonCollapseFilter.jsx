import { useState } from 'react';
import style from './ButtonCollapseFilter.module.sass'

export default function ButtonCollapseFilter(props){
    const arrContent = {moreSearch: 'Расширеный Поиск', defaultSearch: 'Обычный Поиск'};
    const [checkStatus, setcheckStatus] = useState(false);

    return(
        <>
            {
                (checkStatus) ? 
                    <div className={style.wrappButtonCollapse}>
                        <span className={style.buttonCollapse__span}>{arrContent.moreSearch}</span>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.429.253a.819.819 0 0 0-1.184 0 .883.883 0 0 0 0 1.22l4.142 4.274A.821.821 0 0 0 5 6a.821.821 0 0 0 .612-.253l4.143-4.273a.883.883 0 0 0 0-1.221.819.819 0 0 0-1.184 0L5 3.937 1.429.253Z" fill="currentColor">
                            </path>
                        </svg>
                    </div>
                :
                <div className={style.wrappButtonCollapse}>
                    <span className={style.buttonCollapse__span}>{arrContent.defaultSearch}</span>
                    <svg className={style.rotate} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.429.253a.819.819 0 0 0-1.184 0 .883.883 0 0 0 0 1.22l4.142 4.274A.821.821 0 0 0 5 6a.821.821 0 0 0 .612-.253l4.143-4.273a.883.883 0 0 0 0-1.221.819.819 0 0 0-1.184 0L5 3.937 1.429.253Z" fill="currentColor">
                        </path>
                    </svg>
                </div>
            }
        </>
    )
}


