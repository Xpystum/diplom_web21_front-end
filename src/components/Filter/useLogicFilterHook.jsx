import { useState } from 'react';
import { fillArrYear } from './FilterJavaScript';

import { useAddLineHook } from './useAddLineHook'

export const useLogicFilterHook = () => {
    //START статический контент
    const [statusOpen, setStatusOpen] = useState(false);
    const arrDocument = ['В порядке', 'Нет или проблемные'];
    const arrDamage = ['Не требуется ремонт', 'требуется ремонт или не на ходу'];
        //START checkbox
        const arrButtonCheckTwo = [
            {name: "notSell", content: 'Непроданные'},
            {name: "Photo", content: 'C фото'},
        ];
    
        const arrButtonCheckFour = [
            {name: "Inomark", content: 'Иномарки'},
            {name: "Sertificat", content: 'Сертификация'},
            {name: "DromAssist", content: 'Дром Ассист'},
            {name: "Barter", content: 'Возможен Обмен'},
        ];
    
        const arrButtonCheckOne = [
            {name: "mileage", content: 'Без пробега по РФ'},
        ];
        //END checkbox

        // START SELECT
        //есть баг с "любой" all (передавать нужно что то другое что бы не повторялись в компоненте, а иначе будет работать и тот и другой одновременно)
        const radios = [
            { name: 'Любой', value: 'all2' },
            { name: 'Собственник', value: 'owner' },
            { name: 'Частник', value: 'privateOwner' },
            { name: 'Компания', value: 'company' },
        ];
        // END SELECT
    // END статический контент
    
    //START вывод даты
    let year = fillArrYear();
    let arrYear = year.map((index)=>{
      return { value: index, label: index }
    });
    //END вывод даты

   
    // START Logic work AddLineBlock
    const {
        countLineBlock, 
        setCountLineBlock,
        handlerAddLineBlock,
        handlerDeletedLineBlock,
    } = useAddLineHook()

    const AddlineHook = {
        value: {
            countLineBlock, 
            setCountLineBlock,
            handlerAddLineBlock,
            handlerDeletedLineBlock,
        }
    }
    // END Logic work AddLineBlock
        


    return { 
        arrDocument , 
        arrDamage, 
        arrButtonCheckOne , 
        arrButtonCheckTwo, 
        arrButtonCheckFour, 
        arrYear, 
        radios,
        AddlineHook,
        statusOpen,
        setStatusOpen
    }
}