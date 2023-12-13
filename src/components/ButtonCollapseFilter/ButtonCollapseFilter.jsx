import { useState } from 'react';
import style from './ButtonCollapseFilter.module.sass'

export default function ButtonCollapseFilter(props){
    const arrContent = {moreSearch: 'Расширеный Поиск', defaultSearch: 'Обычный Поиск'};

    let type = props.type ?? 'buttonCollapse'
    
    let status = props.status;
    const setStatus = props.setStatus;  

    function clickButtonCollapse(){

        if(type == 'buttonCollapse'){

            if(status == true){
                status = false;
            }else{
                status = true;
            }
            setStatus(status)

        }
    }

    function handlerClickReset(){
        
    }

    return(
        <>
            {
                (type == 'buttonCollapse')?
                    (status) ? 
                    <div onClick={() => clickButtonCollapse() } className={style.wrappButtonCollapse}>
                        <span className={style.buttonCollapse__span}>{arrContent.defaultSearch}</span>
                        <svg className={style.rotate} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.429.253a.819.819 0 0 0-1.184 0 .883.883 0 0 0 0 1.22l4.142 4.274A.821.821 0 0 0 5 6a.821.821 0 0 0 .612-.253l4.143-4.273a.883.883 0 0 0 0-1.221.819.819 0 0 0-1.184 0L5 3.937 1.429.253Z" fill="currentColor">
                            </path>
                        </svg>
                    </div>
                    :
                    <div onClick={ () => clickButtonCollapse() } className={style.wrappButtonCollapse}>
                        <span className={style.buttonCollapse__span}>{arrContent.moreSearch}</span>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.429.253a.819.819 0 0 0-1.184 0 .883.883 0 0 0 0 1.22l4.142 4.274A.821.821 0 0 0 5 6a.821.821 0 0 0 .612-.253l4.143-4.273a.883.883 0 0 0 0-1.221.819.819 0 0 0-1.184 0L5 3.937 1.429.253Z" fill="currentColor">
                            </path>
                        </svg>
                    </div>
                :
                <div onClick={() => handlerClickReset() }  className={style.wrappButtonCollapse}>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L6.586 8 .293 14.293a1 1 0 1 0 1.414 1.414L8 9.414l6.293 6.293a1 1 0 0 0 1.414-1.414L9.414 8l6.293-6.293A1 1 0 0 0 14.293.293L8 6.586 1.707.293Z" fill="currentColor">
                        </path>
                    </svg>
                    <span className={style.buttonCollapse__span}>Сбросить Всё</span>
                </div>
                
            }
        </>
    )
}


