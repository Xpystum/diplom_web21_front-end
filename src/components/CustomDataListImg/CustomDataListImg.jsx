import Select, { components } from 'react-select'
import style from './CustomDataListImg.module.sass';
import './CustomDataListImg.css';
import images from './patrik.png';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { addFilterDataImg, addFilterDataImgSvg } from '../../redux/dataState';

export default function CustomDataListImg(props) {
    let placeholder = props.placeholder;
    let declination = props.declination ?? "Любое";
    let type = props.type ?? 'default';
    let options = [];

    const dispatch = useDispatch()  


    // test images
    const testImage = images;

    //состояние для зелёный звёзд в меню (фронт)
    const [selArrSvg, setArrSvg] = useState(new Map([
        ['Седан', false],
        ['Хэтчбек 5 дв.', false],
        ['Хэтчбек 3 дв.', false],
        ['Лифтбек', false],
        ['Джип 5 дв.', false],
        ['Джип 3 дв.', false],
        ['Универсал', false],
        ['Минивэн', false],
        ['Пикап', false],
        ['Купе', false],
        ['Открытый', false],
    ]));

    //машины которые выбрали (состояние выбранных машин)
    //для бека указывать самим name - value (redux получает массив на ру)
    const [arrSvgVichle, setArrSvgVichle] = useState([]);

    // фотографии которые выбрали (value - будет значением)
    const [arrImgSelect, setArrImgSelect] = useState(null);

    useEffect(()=>{
        console.log(arrImgSelect);
        if(arrImgSelect != 'null'){
            let arr = [{name: 'ImgSelectPokolenu', value: arrImgSelect}];
            dispatch(addFilterDataImg(arr));
        }else{
            dispatch(addFilterDataImg([]));
        }
        
    },[arrImgSelect])

    useEffect(()=>{
        dispatch(addFilterDataImgSvg(arrSvgVichle));
    },[arrSvgVichle])

    //логика в зависимости от react-select (надо вынести в отдельный файл)
    switch(type){
        case 'default':{

            if (type == 'default') {
                //картинка + название
                // p.s не удалять самый первый объект
                options = [
        
                    //не удалять первый объект (он должен быть в option - завязано на библиотеке)
                    {
                        value: 'null', label:
                            <div className={style.wrapp_reset_search}>
                                <div className={style.reset_search}>
                                    <FontAwesomeIcon icon="fa-solid fa-x" />
                                    <span className={style.reset_search_name}>{declination + ' ' + placeholder}</span>
                                </div>
                                <div className={style.brLine_wrapp}>
                                    <div className={style.brLine}></div>
                                </div>
                            </div>
        
                    },
        
                    {
                        value: 'chocolate1', label:
                            <div className={style.generation_card + ' ' + 'generation_card__CustomDataList'}>
                                <div className={style.wrapp_images + ' ' + 'wrapp_images__CustomDataList'}>
                                    <img src={testImage} height="180px" width="200px" />
                                </div>
                                <div className={style.wrapp_info}>
                                    <div className={style.title}>
                                        BMW X10 PATRIK BANE
                                    </div>
        
                                    <div className={style.generation}>
                                        поколение мужчин
                                    </div>
                                </div>
                            </div>
                    },
        
                    {
                        value: 'chocolate2', label:
                            <div className={style.generation_card + ' ' + 'generation_card__CustomDataList'}>
                                <div className={style.wrapp_images + ' ' + 'wrapp_images__CustomDataList'}>
                                    <img src={testImage} height="180px" width="200px" />
                                </div>
                                <div className={style.wrapp_info}>
                                    <div className={style.title}>
                                        BMW X10 PATRIK BANE
                                    </div>
        
                                    <div className={style.generation}>
                                        поколение мужчин
                                    </div>
                                </div>
                            </div>
                    },
        
                    {
                        value: 'chocolate3', label:
                            <div className={style.generation_card + ' ' + 'generation_card__CustomDataList'}>
                                <div className={style.wrapp_images + ' ' + 'wrapp_images__CustomDataList'}>
                                    <img src={testImage} height="180px" width="200px" />
                                </div>
                                <div className={style.wrapp_info}>
                                    <div className={style.title}>
                                        BMW X10 PATRIK BANE
                                    </div>
        
                                    <div className={style.generation}>
                                        поколение мужчин
                                    </div>
                                </div>
                            </div>
                    },
        
                    {
                        value: 'chocolate4', label:
                            <div className={style.generation_card + ' ' + 'generation_card__CustomDataList'}>
                                <div className={style.wrapp_images + ' ' + 'wrapp_images__CustomDataList'}>
                                    <img src={testImage} height="180px" width="200px" />
                                </div>
                                <div className={style.wrapp_info}>
                                    <div className={style.title}>
                                        BMW X10 PATRIK BANE
                                    </div>
        
                                    <div className={style.generation}>
                                        поколение мужчин
                                    </div>
                                </div>
                            </div>
                    },
                ]
            }
            break;

        }
        case 'body':{

            if (type == 'body') {
                //svg транспорт + название
                // p.s не удалять самый первый объект
                options = [
                    //не удалять первый объект (он должен быть в option - завязано на библиотеке)
                    {
                        value: 'null', label:
                            <div className={style.wrapp_reset_search + ' ' + "wrapp_reset_search"}>
                                <div className={style.reset_search}>
                                    <FontAwesomeIcon icon="fa-solid fa-x" />
                                    <span className={style.reset_search_name}>{declination + ' ' + placeholder}</span>
                                </div>
                                <div className={style.brLine_wrapp}>
                                    <div className={style.brLine}></div>
                                </div>
                            </div>
        
                    },
        
                    {
                        value: 'chocolate1', label:
                            <div className={style.wrappSvgBodyVichle + ' ' + "react_selectSVG__option_block"}>
                                <svg stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="59"
                                    height="28"
                                    viewBox="0 0 59 28">
                                    <g fill="none" fillRule="evenodd" strokeLinejoin="round"><path strokeLinecap="round" d="M28.078 9.564c.29 1.249.685 2.975.71 3.692M4.557 14.372c1.185-.186 6.664-.584 6.664-.584s4.003-4.011 5.741-4.915c1.739-.903 8.534-1.514 14.434-1.062 6.4.505 10.489 6.284 12.596 6.55m-30.874 9.593c-7.059 0-7.718-3.606-8.06-7.59"></path><path strokeLinecap="round" d="M48.513 23.954s2.425-.152 3.768-.87c1.054-.557 4.32-6.48 1.133-7.304-7.866-2.074-27.065-2.445-37.532-2.186"></path><path d="M41.2 24.5H20.7"></path><path strokeLinecap="round" d="M16.855 19.312c2.11 0 3.82 1.725 3.82 3.852s-1.71 3.852-3.82 3.852-3.82-1.725-3.82-3.852 1.71-3.852 3.82-3.852zm27.92 0c2.109 0 3.819 1.725 3.819 3.852s-1.71 3.852-3.82 3.852c-2.109 0-3.819-1.725-3.819-3.852s1.71-3.852 3.82-3.852zm-25.047-9.217c-.59.41-1.515 1.583-1.813 2.365M28.5 15.5h2.8-2.8zm-12 0h2.8-2.8z"></path></g>
                                </svg>
                                <br />
                                Седан
                                <div className={style.starGreen}>
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--green, hsl(85, 49%, 48%))">
                                        <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10Z" fill="currentColor">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.574 6.26c.495.404.57 1.135.167 1.632l-4.597 5.68a1.15 1.15 0 0 1-1.621.17l-3.095-2.518a1.164 1.164 0 0 1-.171-1.631A1.15 1.15 0 0 1 6.88 9.42l2.2 1.79 3.871-4.783a1.15 1.15 0 0 1 1.623-.168Z" fill="#fff">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                    },
        
                    {
                        value: 'chocolate1', label:
                            <div className={style.wrappSvgBodyVichle + ' ' + "react_selectSVG__option_block"}>
                                <svg stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width="59" height="28" viewBox="0 0 59 28"><g fill="none" fillRule="evenodd" strokeLinejoin="round"><path d="m21.4 24.504 16-.004"></path><path strokeLinecap="round" d="M10.997 6.748c25.904-3.373 27.59 3.7 31.746 6.993M14.198 23.748c-3.583-.69-6.27-6.242-3.162-15.353"></path><path strokeLinecap="round" d="m44.717 23.748 1.745-.292c2.081-.398 4.004-6.614 2.66-7.703-5.372-4.383-28.92-1.301-32.133-2.231 0 0-1.607-.363-1.607-2.417M28.5 15.5h2.8-2.8zm-10 0h2.8-2.8zm10.842-7.105c.444 1.32.711 3.436.711 4.994M18.727 8.634a25.311 25.311 0 0 0-.21 3.002m-.659 7.942c2.037 0 3.688 1.665 3.688 3.719s-1.651 3.719-3.688 3.719-3.687-1.665-3.687-3.72c0-2.053 1.65-3.718 3.687-3.718z"></path><path strokeLinecap="round" d="M41.063 19.578c2.036 0 3.687 1.665 3.687 3.719s-1.65 3.719-3.687 3.719-3.688-1.665-3.688-3.72c0-2.053 1.651-3.718 3.688-3.718z"></path></g></svg>
                                <br />
                                Хэтчбек 5 дв.
                                <div className={style.starGreen}>
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--green, hsl(85, 49%, 48%))">
                                        <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10Z" fill="currentColor">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.574 6.26c.495.404.57 1.135.167 1.632l-4.597 5.68a1.15 1.15 0 0 1-1.621.17l-3.095-2.518a1.164 1.164 0 0 1-.171-1.631A1.15 1.15 0 0 1 6.88 9.42l2.2 1.79 3.871-4.783a1.15 1.15 0 0 1 1.623-.168Z" fill="#fff">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                    },
        
                    {
                        value: 'chocolate1', label:
                            <div className={style.wrappSvgBodyVichle + ' ' + "react_selectSVG__option_block"}>
                                <svg stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width="59" height="28" viewBox="0 0 59 28"><g fill="none" fillRule="evenodd" strokeLinejoin="round"><path d="m21.4 24.504 16-.004"></path><path strokeLinecap="round" d="M10.997 6.748c25.904-3.373 27.59 3.7 31.746 6.993M14.198 23.748c-3.583-.69-6.27-6.242-3.162-15.353"></path><path strokeLinecap="round" d="m44.717 23.748 1.745-.292c2.081-.398 4.004-6.614 2.66-7.703-5.372-4.383-28.92-1.301-32.133-2.231 0 0-1.607-.363-1.607-2.417M28.5 15.5h2.8-2.8zm-10 0h2.8-2.8zm10.842-7.105c.444 1.32.711 3.436.711 4.994M18.727 8.634a25.311 25.311 0 0 0-.21 3.002m-.659 7.942c2.037 0 3.688 1.665 3.688 3.719s-1.651 3.719-3.688 3.719-3.687-1.665-3.687-3.72c0-2.053 1.65-3.718 3.687-3.718z"></path><path strokeLinecap="round" d="M41.063 19.578c2.036 0 3.687 1.665 3.687 3.719s-1.65 3.719-3.687 3.719-3.688-1.665-3.688-3.72c0-2.053 1.651-3.718 3.688-3.718z"></path></g></svg>
                                <br />
                                Хэтчбек 3 дв.
                                <div className={style.starGreen}>
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--green, hsl(85, 49%, 48%))">
                                        <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10Z" fill="currentColor">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.574 6.26c.495.404.57 1.135.167 1.632l-4.597 5.68a1.15 1.15 0 0 1-1.621.17l-3.095-2.518a1.164 1.164 0 0 1-.171-1.631A1.15 1.15 0 0 1 6.88 9.42l2.2 1.79 3.871-4.783a1.15 1.15 0 0 1 1.623-.168Z" fill="#fff">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                    },
        
                    {
                        value: 'chocolate1', label:
                            <div className={style.wrappSvgBodyVichle + ' ' + "react_selectSVG__option_block"}>
                                <svg stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width="59" height="28" viewBox="0 0 59 28">
                                    <g fill="none" fillRule="evenodd" strokeLinejoin="round"><path strokeLinecap="round" d="M28.561 9.564c.29 1.249.685 2.975.711 3.692m-24.899.341c4.22-.255 6.55-3.515 12.694-5.215">
                                    </path><path strokeLinecap="round" d="M4.118 4.694c4.038 2.369 9.785-.295 15.618 3.072l1.568-.192c2.834-.346 6.274-.347 10.576.237 6.4.505 10.325 6.375 12.432 6.64m-30.71 9.503c-7.182 0-7.852-4.225-8.2-8.908">
                                        </path><path strokeLinecap="round" d="M17.894 10.277c-1.076.974-3.18 3.223-1.394 3.223 0 0 27.76-.137 37.03 2.28 3.188.823-.131 6.693-1.132 7.304-1 .611-3.926.87-3.926.87M29.5 15.5h2.8-2.8zm-11 0h2.8-2.8z"></path>
                                        <path d="M41.026 24.497 21.05 24.5"></path>
                                        <path strokeLinecap="round" d="M17.34 19.312c2.11 0 3.82 1.725 3.82 3.852s-1.71 3.852-3.82 3.852c-2.109 0-3.819-1.725-3.819-3.852s1.71-3.852 3.82-3.852zm27.393 0c2.11 0 3.82 1.725 3.82 3.852s-1.71 3.852-3.82 3.852c-2.109 0-3.819-1.725-3.819-3.852s1.71-3.852 3.82-3.852zM13.096 5.925l.788 1.758"></path>
                                    </g>
                                </svg>
                                <br />
                                Лифтбек
                                <div className={style.starGreen}>
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--green, hsl(85, 49%, 48%))">
                                        <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10Z" fill="currentColor">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.574 6.26c.495.404.57 1.135.167 1.632l-4.597 5.68a1.15 1.15 0 0 1-1.621.17l-3.095-2.518a1.164 1.164 0 0 1-.171-1.631A1.15 1.15 0 0 1 6.88 9.42l2.2 1.79 3.871-4.783a1.15 1.15 0 0 1 1.623-.168Z" fill="#fff">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                    },
        
                    {
                        value: 'chocolate1', label:
                            <div className={style.wrappSvgBodyVichle + ' ' + "react_selectSVG__option_block"}>
                                <svg stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width="59" height="28" viewBox="0 0 59 28"><g fill="none" fillRule="evenodd" strokeLinejoin="round"><path d="M21.834 23.5h20.102"></path><path strokeLinecap="round" d="M7.286 6.978H4.499c-.578 0-.999.634-.999 1.426v6.124c0 1.109.631 2.059 1.42 2.059M13.389 4.55s-3.208 6.493.63 6.493c0 0 44.221-1.847 41.592 6.336-.999 3.115-1.577 5.174-2.576 5.385a20.12 20.12 0 0 1-2.307.37M29.989 13.5h2.8-2.8zm-12.619 0h2.8-2.8zm10.11-9.267c.947 2.692 1.614 5.305 1.614 6.677M16.91 4.76a35.994 35.994 0 0 0-.21 3.591"></path><path strokeLinecap="round" d="M13.065 23.134c-4.838.475-9.325-6.125-5.276-16.948l.84-2.217M24.851 20.5h14.67-14.67z"></path><path strokeLinecap="round" d="M17.49 18.012c2.468 0 4.47 2.01 4.47 4.488 0 2.478-2.002 4.488-4.47 4.488s-4.47-2.01-4.47-4.488c0-2.479 2.002-4.488 4.47-4.488zm28.814 0c2.469 0 4.47 2.01 4.47 4.488 0 2.478-2.001 4.488-4.47 4.488-2.468 0-4.47-2.01-4.47-4.488 0-2.479 2.002-4.488 4.47-4.488zM7.552 2.65c26.08-2.324 30.267-.354 34.815 8.99"></path></g></svg>
                                <br />
                                Джип 5 дв.
                                <div className={style.starGreen}>
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--green, hsl(85, 49%, 48%))">
                                        <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10Z" fill="currentColor">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.574 6.26c.495.404.57 1.135.167 1.632l-4.597 5.68a1.15 1.15 0 0 1-1.621.17l-3.095-2.518a1.164 1.164 0 0 1-.171-1.631A1.15 1.15 0 0 1 6.88 9.42l2.2 1.79 3.871-4.783a1.15 1.15 0 0 1 1.623-.168Z" fill="#fff">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                    },
        
                    {
                        value: 'chocolate1', label:
                            <div className={style.wrappSvgBodyVichle + ' ' + "react_selectSVG__option_block"}>
                                <svg stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width="59" height="28" viewBox="0 0 59 28"><g fill="none" fillRule="evenodd" strokeLinejoin="round"><path d="M21.834 23.5h20.102"></path><path strokeLinecap="round" d="M7.286 6.978H4.499c-.578 0-.999.634-.999 1.426v6.124c0 1.109.631 2.059 1.42 2.059M13.389 4.55s-3.208 6.493.63 6.493c0 0 44.221-1.847 41.592 6.336-.999 3.115-1.577 5.174-2.576 5.385a20.12 20.12 0 0 1-2.307.37M29.989 13.5h2.8-2.8zm-12.619 0h2.8-2.8zm10.11-9.267c.947 2.692 1.614 5.305 1.614 6.677M16.91 4.76a35.994 35.994 0 0 0-.21 3.591"></path><path strokeLinecap="round" d="M13.065 23.134c-4.838.475-9.325-6.125-5.276-16.948l.84-2.217M24.851 20.5h14.67-14.67z"></path><path strokeLinecap="round" d="M17.49 18.012c2.468 0 4.47 2.01 4.47 4.488 0 2.478-2.002 4.488-4.47 4.488s-4.47-2.01-4.47-4.488c0-2.479 2.002-4.488 4.47-4.488zm28.814 0c2.469 0 4.47 2.01 4.47 4.488 0 2.478-2.001 4.488-4.47 4.488-2.468 0-4.47-2.01-4.47-4.488 0-2.479 2.002-4.488 4.47-4.488zM7.552 2.65c26.08-2.324 30.267-.354 34.815 8.99"></path></g></svg>
                                <br />
                                Джип 3 дв.
                                <div className={style.starGreen}>
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--green, hsl(85, 49%, 48%))">
                                        <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10Z" fill="currentColor">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.574 6.26c.495.404.57 1.135.167 1.632l-4.597 5.68a1.15 1.15 0 0 1-1.621.17l-3.095-2.518a1.164 1.164 0 0 1-.171-1.631A1.15 1.15 0 0 1 6.88 9.42l2.2 1.79 3.871-4.783a1.15 1.15 0 0 1 1.623-.168Z" fill="#fff">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                    },
        
                    {
                        value: 'chocolate1', label:
                            <div className={style.wrappSvgBodyVichle + ' ' + "react_selectSVG__option_block"}>
                                <svg stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width="59" height="28" viewBox="0 0 59 28"><g fill="none" fillRule="evenodd" strokeLinejoin="round"><path strokeLinecap="round" d="M42.011 14.302s-2.897-7.367-19.333-7.367C13.301 6.935 6.19 8.21 6.19 8.21m19.754.69c.474 1.7 1.08 3.958 1.133 4.914"></path><path strokeLinecap="round" d="M48.015 23.954s2.425-.152 3.768-.87c1.054-.557 4.32-6.48 1.132-7.304-9.271-2.444-32.476-2.046-40.377-1.514-.896.053-3.346.132-1.634-4.463m1.714 14.151C7.324 23.98 2.45 18.94 6.928 9.43m9.007.48c.105.902.264 2.124.264 2.602"></path><path d="m40.57 24.497-20.506.003"></path><path strokeLinecap="round" d="M16.357 19.312c2.109 0 3.819 1.725 3.819 3.852s-1.71 3.852-3.82 3.852c-2.109 0-3.819-1.725-3.819-3.852s1.71-3.852 3.82-3.852zm27.919 0c2.11 0 3.82 1.725 3.82 3.852s-1.71 3.852-3.82 3.852c-2.109 0-3.819-1.725-3.819-3.852s1.71-3.852 3.82-3.852zM27.5 16.5h2.8-2.8zm-12 0h2.8-2.8z"></path></g></svg>
                                <br />
                                Универсал
                                <div className={style.starGreen}>
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--green, hsl(85, 49%, 48%))">
                                        <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10Z" fill="currentColor">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.574 6.26c.495.404.57 1.135.167 1.632l-4.597 5.68a1.15 1.15 0 0 1-1.621.17l-3.095-2.518a1.164 1.164 0 0 1-.171-1.631A1.15 1.15 0 0 1 6.88 9.42l2.2 1.79 3.871-4.783a1.15 1.15 0 0 1 1.623-.168Z" fill="#fff">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                    },
        
                    {
                        value: 'chocolate1', label:
                            <div className={style.wrappSvgBodyVichle + ' ' + "react_selectSVG__option_block"}>
                                <svg stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width="59" height="28" viewBox="0 0 59 28"><g fill="none" fillRule="evenodd" strokeLinejoin="round"><path strokeLinecap="round" d="M12.12 23.456c-5.347.186-10.678-6.614-6.2-18.726m-.896-1.196C22.829 1.887 39.95.586 48.299 9.511c8.086 8.606 6.469 13.36 1.78 13.945"></path><path d="M42.03 23.5H20.195"></path><path strokeLinecap="round" d="M10.344 5.66s-2.686 6.427 1.107 6.374c3.793-.053 32.824-1.708 39.83 1.055M23.646 5.287c.105 1.063.342 2.63.368 4.224M36.42 5.287c.659 1.62 1.215 3.873 1.321 6.264M10.5 14.496l16.476.004m-10.811 4.281c2.255 0 4.083 1.844 4.083 4.117 0 2.274-1.828 4.118-4.083 4.118s-4.082-1.844-4.082-4.118c0-2.273 1.827-4.117 4.082-4.117zm29.869 0c2.255 0 4.083 1.844 4.083 4.117 0 2.274-1.828 4.118-4.083 4.118s-4.082-1.844-4.082-4.118c0-2.273 1.827-4.117 4.082-4.117zM37.5 14.5h2.8-2.8z"></path></g></svg>
                                <br />
                                Минивэн
                                <div className={style.starGreen}>
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--green, hsl(85, 49%, 48%))">
                                        <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10Z" fill="currentColor">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.574 6.26c.495.404.57 1.135.167 1.632l-4.597 5.68a1.15 1.15 0 0 1-1.621.17l-3.095-2.518a1.164 1.164 0 0 1-.171-1.631A1.15 1.15 0 0 1 6.88 9.42l2.2 1.79 3.871-4.783a1.15 1.15 0 0 1 1.623-.168Z" fill="#fff">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                    },
        
                    {
                        value: 'chocolate1', label:
                            <div className={style.wrappSvgBodyVichle + ' ' + "react_selectSVG__option_block"}>
                                <svg stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width="59" height="28" viewBox="0 0 59 28"><g fill="none" fillRule="evenodd" strokeLinejoin="round"><path d="M42.926 23.5H18.248"></path><path strokeLinecap="round" d="M27.13 21.5h12.642H27.13zM9.474 23.138c-3.767.398-7.762-2.046-6.603-10.147M23.81 3.853c.949 2.763 2.424 7.597 1.74 12.485m-.012-5.472c-6.922-.107-17.742 0-24.221.796m21.545-9.456c13.328-.531 16.507 2.412 19.562 9.265"></path><path strokeLinecap="round" d="M51.823 23.138s1.152-.107 2.31-.372c1.002-.213 1.581-2.285 2.582-5.42 1.677-5.242-15.672-6.393-28.5-6.537m-9.715.022 3.226-5.44-3.226 5.44zm1.781-9.793c1.528 3.984 2.426 7.784 2.373 9.803m-8.747 7.143c2.473 0 4.478 2.022 4.478 4.516s-2.005 4.516-4.478 4.516-4.478-2.022-4.478-4.516 2.005-4.516 4.478-4.516z"></path><path strokeLinecap="round" d="M47.279 17.984c2.473 0 4.478 2.022 4.478 4.516s-2.005 4.516-4.478 4.516-4.478-2.022-4.478-4.516 2.005-4.516 4.478-4.516zM28.5 13.522h2.8-2.8z"></path></g></svg>
                                <br />
                                Пикап
                                <div className={style.starGreen}>
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--green, hsl(85, 49%, 48%))">
                                        <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10Z" fill="currentColor">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.574 6.26c.495.404.57 1.135.167 1.632l-4.597 5.68a1.15 1.15 0 0 1-1.621.17l-3.095-2.518a1.164 1.164 0 0 1-.171-1.631A1.15 1.15 0 0 1 6.88 9.42l2.2 1.79 3.871-4.783a1.15 1.15 0 0 1 1.623-.168Z" fill="#fff">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                    },
        
                    {
                        value: 'chocolate1', label:
                            <div className={style.wrappSvgBodyVichle + ' ' + "react_selectSVG__option_block"}>
                                <svg stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width="59" height="28" viewBox="0 0 59 28"><g fill="none" fillRule="evenodd" strokeLinejoin="round"><path strokeLinecap="round" d="M12.5 24.408s-6.562-.235-6.93-8.23c0 0-.422-2.39 1.527-2.816 0 0 9.923-3.145 12.952-3.57 5.808-.816 13.155.454 18.018 3.757a21.013 21.013 0 0 1 2.33 1.826"></path><path strokeLinecap="round" d="M47.709 24.413s3.375-.213 4.007-.585c.632-.372 3.293-5.073 1.133-6.64-1.08-.77-22.23-3.002-37.824-3.772"></path><path d="m40.935 24.501-21.66-.001"></path><path strokeLinecap="round" d="M21.5 16.5h3.2-3.2zm-5.58 3.344c1.965 0 3.557 1.605 3.557 3.586 0 1.98-1.592 3.586-3.556 3.586s-3.556-1.606-3.556-3.586c0-1.98 1.592-3.586 3.556-3.586zm28.368 0c1.964 0 3.556 1.605 3.556 3.586 0 1.98-1.592 3.586-3.556 3.586s-3.555-1.606-3.555-3.586c0-1.98 1.591-3.586 3.555-3.586z"></path></g></svg>
                                <br />
                                Купе
                                <div className={style.starGreen}>
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--green, hsl(85, 49%, 48%))">
                                        <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10Z" fill="currentColor">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.574 6.26c.495.404.57 1.135.167 1.632l-4.597 5.68a1.15 1.15 0 0 1-1.621.17l-3.095-2.518a1.164 1.164 0 0 1-.171-1.631A1.15 1.15 0 0 1 6.88 9.42l2.2 1.79 3.871-4.783a1.15 1.15 0 0 1 1.623-.168Z" fill="#fff">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                    },
        
                    {
                        value: 'chocolate1', label:
                            <div className={style.wrappSvgBodyVichle + ' ' + "react_selectSVG__option_block"}>
                                <svg stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width="59" height="28" viewBox="0 0 59 28"><g fill="none" fillRule="evenodd" strokeLinejoin="round"><path d="m19.512 24.501 20.792-.001"></path><path strokeLinecap="round" d="M26.5 17.5h3.2-3.2zm-13.952 6.913c-1.949 0-6.095-1.886-6.095-8.554-.026-1.301.659-1.753 1.528-1.806 5.584-.212 22.44.319 29.658 1.222m-11.221-3.028 1.23 2.245m-12.831-.452c1.091-2.198 1.272-2.812 7.646.216"></path><path strokeLinecap="round" d="M47.268 24.413s3.857 0 4.541-.585c.633-.584 3.793-6.481 0-7.119-1.79-.425-4.74-.903-10.851-1.753-.37-.053-.79-.16-1.16-.372l-8.691-4.78"></path><path strokeLinecap="round" d="M43.75 19.578c2.036 0 3.687 1.665 3.687 3.719s-1.651 3.719-3.688 3.719c-2.036 0-3.687-1.665-3.687-3.72 0-2.053 1.651-3.718 3.687-3.718zm-27.683 0c2.037 0 3.687 1.665 3.687 3.719s-1.65 3.719-3.687 3.719-3.688-1.665-3.688-3.72c0-2.053 1.651-3.718 3.688-3.718z"></path></g></svg>
                                <br />
                                Открытый
                                <div className={style.starGreen}>
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--green, hsl(85, 49%, 48%))">
                                        <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10Z" fill="currentColor">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.574 6.26c.495.404.57 1.135.167 1.632l-4.597 5.68a1.15 1.15 0 0 1-1.621.17l-3.095-2.518a1.164 1.164 0 0 1-.171-1.631A1.15 1.15 0 0 1 6.88 9.42l2.2 1.79 3.871-4.783a1.15 1.15 0 0 1 1.623-.168Z" fill="#fff">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                    }
                ]
        
            }
            break;
        }
    }

    function changeDefaultStateArrSvg(){
        let arr = selArrSvg;
        arr.forEach((value, key, array)=>{
            array.set(key, false);
        })
        setArrSvg(arr);
    }

    
    function buttonMenu() {
        let elementSelect = document.querySelector('.react_selectSVG__indicator');
        if(elementSelect){
            elementSelect.addEventListener('click', () => { checkSvgGreenStar(); });
        }
    }

    function buttonMenuSelectRemove() {
        let elementSelect = document.querySelector('.wrapp_reset_search');
        if(elementSelect){
            elementSelect.addEventListener('click', () => { setArrSvgVichle([]); changeDefaultStateArrSvg(); });
        }
    }

    useEffect(()=>{
        buttonMenu();
    },[])

    //проверка на выбор (зелёная звездочка)
    function checkSvgGreenStar() {

        let elementSelectAll = document.querySelectorAll('.react_selectSVG__option_block');
        if (elementSelectAll) {
            elementSelectAll.forEach(function (element) {
                if(selArrSvg.get(element.textContent) != undefined && selArrSvg.get(element.textContent) == true){
                    element.children[2].style.opacity = 1
                    element.children[0].style.color = '#000000';
                }else{
                    element.children[2].style.opacity = 0
                    element.children[0].style.color = '#808080';
                }
            })
        }

    }


    //изменение логики input (для библиотеки)
    const ValueContainer = ({ getValue, ...props }) => {

        const newOnChange = (e) => {
            props.onChange(e) //Вызываем стандартное событие
            console.log('vyaa')
            // MyOnChange(e.target.value) //Вызываем нужное нам
        }

        const newProps = {...props, onChange: (e)=>newOnChange(e)}

        let placeholder = props.selectProps.placeholder;
        let divInfo = '';
        let divGeneral = '';
        let values = getValue();

    
        if(type == 'default'){
            
            if (values.length != 0){
                
                if(values[0].value != 'null'){
                    let elementTextImg = values[0].label.props.children[1].props.children;

                    if(elementTextImg){
                        let divPocolenue = '';
                        let divName = '';

                        divName = elementTextImg[0].props.children;
                        divPocolenue = elementTextImg[1].props.children
                        divGeneral = divPocolenue + ' , ' + divName;
                    }

                }else{
                    divGeneral = '';
                }
            }
        }
        
        
        if(type == 'body'){
            buttonMenuSelectRemove();
            const elementSvg = document.querySelectorAll('.react_selectSVG__option_block');
            if (elementSvg) {
                elementSvg.forEach(function (elem) {
                    elem.onclick = function (evt) {

                        if (selArrSvg.get(evt.currentTarget.textContent) != undefined && selArrSvg.get(evt.currentTarget.textContent) == false) {
                            evt.currentTarget.children[2].style.opacity = 1;
                            evt.currentTarget.children[0].style.color = '#000000';
                            setArrSvg(selArrSvg.set(evt.currentTarget.textContent, true));

                            let arr = JSON.parse(JSON.stringify(arrSvgVichle));
                            arr.push(evt.currentTarget.textContent);
                                setArrSvgVichle(arr);

                        }else{
                                
                            evt.currentTarget.children[2].style.opacity = 0;
                            evt.currentTarget.children[0].style.color = 'inherit';
                            setArrSvg(selArrSvg.set(evt.currentTarget.textContent, false));
                            
                            let arr= JSON.parse(JSON.stringify(arrSvgVichle));
                            let index = null;

                            //удаление из массива состояние arrSvgVichle
                            arr.forEach((elem, ind)=>{
                                if(elem == evt.currentTarget.textContent){
                                    index = ind;
                                }
                            }); 

                            if(index != null){
                                arr.splice(index,1);
                                setArrSvgVichle(arr);
                            }
                        }

                        
                    }
                })
            }

            if (values.length != 0) {

                if (values[0].value != 'null') {
    
                    if (type == 'default') {
                        let values = getValue();
                        let divPocolenue = '';
    
                        if (values && values.length != 0) {
                            let divValue = values[0].label.props.children[1].props.children; //получаем массив 2 div (где информация на картинке)
                            if (typeof divValue.length === "undefined") {
                                divGeneral = '';
                            }
                            else {
                                divValue.forEach((element, index) => {
                                    if (index == 0) {
                                        divInfo += element.props.children;
                                    }
                                    else {
                                        divPocolenue += element.props.children;
                                    }
                                });
                                divGeneral = divPocolenue + ", " + divInfo;
                            }
                        }
                    }
    
                    if(type == 'body') {
                        if(arrSvgVichle.length > 1){
                            divGeneral = arrSvgVichle[0] + ' ' + `и ещё ${arrSvgVichle.length - 1}...`
                        }
    
                        if(arrSvgVichle.length == 1){
                            placeholder = arrSvgVichle[0];
                        }
                    }
    
                } else {
                    placeholder = props.selectProps.placeholder;
                    divGeneral = '';
                }
            }

        }

        return (
            <components.ValueContainer  {...newProps}>
                {
                    (divGeneral == '') ?
                        <div className={style.componentValueContainer}>{placeholder}</div>
                        :
                        <div className={style.componentValueContainer}>{divGeneral}</div>
                }
            </components.ValueContainer>
        )
    };

    function valueInput(evt){
        // сделано для img (для машинок логика уже есть)
        if(type == 'default'){
            setArrImgSelect(evt.value)
        }
    }

    return (
        <>
            <Select
                placeholder={placeholder}
                options={options}
                isSearchable={false}
                className='react_select_container'
                components={{ ValueContainer: ValueContainer }}
                classNamePrefix={(type == 'default') ? 'react_select' : 'react_selectSVG'}
                multiple={true}
                onChange={ (evt) => valueInput(evt) }
            />
        </>
    )
}




