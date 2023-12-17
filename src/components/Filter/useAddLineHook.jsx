import { useState } from "react";

export const useAddLineHook = () => {
    //START Работа логики с добавляющийся строкой
    let [countLineBlock, setCountLineBlock] = useState(1);   //количество блоков при нажатии на "+"

    function handlerAddLineBlock() {
        setCountLineBlock(++countLineBlock);
    }

    function handlerDeletedLineBlock() {
        setCountLineBlock(--countLineBlock);
    } 
    //END Работа логики с добавляющийся строкой

    return {countLineBlock, setCountLineBlock, handlerAddLineBlock, handlerDeletedLineBlock}
}