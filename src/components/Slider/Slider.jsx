import React from "react";

import { useState } from 'react';

import './Slider.scss';
import style from './Slider.module.sass';

import ImageGallery from "react-image-gallery";
import Button from "../../UI/Button/Button";


const images = [
    {
        original: "img/1_big.jpeg",
        thumbnail: "img/1_small.jpeg",
    },
    {
        original: "img/2_big.jpeg",
        thumbnail: "img/2_small.jpeg",
    },
    {
        original: "img/3_big.jpeg",
        thumbnail: "img/3_small.jpeg",
    },
    {
        original: "img/4_big.jpeg",
        thumbnail: "img/4_small.jpeg",
    },
    {
        original: "img/5_big.jpeg",
        thumbnail: "img/5_small.jpeg",
    },
    {
        original: "img/6_big.jpeg",
        thumbnail: "img/6_small.jpeg",
    },
    {
        original: "img/7_big.jpeg",
        thumbnail: "img/7_small.jpeg",
    },
    {
        original: "img/8_big.jpeg",
        thumbnail: "img/8_small.jpeg",
    },
    {
        original: "img/9_big.jpeg",
        thumbnail: "img/9_small.jpeg",
    },
    {
        original: "img/10_big.jpeg",
        thumbnail: "img/10_small.jpeg",
    },
    {
        original: "img/11_big.jpeg",
        thumbnail: "img/11_small.jpeg",
    },
    {
        original: "img/12_big.jpeg",
        thumbnail: "img/12_small.jpeg",
    },
];



export default function Slider(props) {

    let [stateShow, setStateShow] = useState(false);

    function onShow() {
        console.log('Проверка выполения функции =>', onShow.name);

        stateShow ?
            setStateShow(false)
            :
            setStateShow(true)

        console.log(stateShow);
    }


    return (
        <div className={style.Slider}>
            <div className={
                !stateShow ?
                    "slider show"
                    :
                    "slider"
            }>
                <ImageGallery
                    items={images}
                    showPlayButton={false}
                />
            </div>

            <button className="btnShowPreviewImg"
                onClick={() => { onShow() }}
            >
                <span>{
                    stateShow ?
                        "Свернуть фото"
                        :
                        "Развернуть фото"
                }</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.429.253a.819.819 0 0 0-1.184 0 .883.883 0 0 0 0 1.22l4.142 4.274A.821.821 0 0 0 5 6a.821.821 0 0 0 .612-.253l4.143-4.273a.883.883 0 0 0 0-1.221.819.819 0 0 0-1.184 0L5 3.937 1.429.253Z" fill="currentColor"></path></svg>

            </button>

            <div className={style.BtnShowPreviewImg}>
                <Button
                    className={style.Btn}
                    name={
                        stateShow ?
                            "Свернуть фото"
                            :
                            "Развернуть фото"
                    }
                    method={onShow}
                >
                </Button>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.429.253a.819.819 0 0 0-1.184 0 .883.883 0 0 0 0 1.22l4.142 4.274A.821.821 0 0 0 5 6a.821.821 0 0 0 .612-.253l4.143-4.273a.883.883 0 0 0 0-1.221.819.819 0 0 0-1.184 0L5 3.937 1.429.253Z" fill="currentColor"></path></svg>
            </div>

        </div>
    )
}
