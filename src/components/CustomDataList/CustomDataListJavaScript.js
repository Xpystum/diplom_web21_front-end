// скрыть DataList
//IdDataList - уникальный индефикатор Datalist
function listHide(IdDataList) {
    let dataListElement = document.getElementById(`${IdDataList}`)
    if (dataListElement && dataListElement.shown) {
        dataListElement.style.display = 'none';
        dataListElement.shown = false;
    }
  }

// idInput - уникальный индефикатор инпута
//IdDataList - уникальный индефикатор Datalist
//для кнопка обнолвение поиска
function OnClick_SearchReset(IdInput, IdDataList){
    let elemInput = document.getElementById(`${IdInput}`);
    if(elemInput.value){
        elemInput.value = '';
    }
    listHide(IdDataList)
}

// Получаем Значения option
function OnClick_Option(evt, IdInput, IdDataList){
    let elemInput = document.getElementById(`${IdInput}`);
    elemInput.value = evt.target.value;
    listHide(IdDataList)
}

function closeMissClick(IdDataList, CustomDataList){

    const div = document.querySelectorAll('.' + CustomDataList);
    div.forEach((element)=>{

        // console.log(element.dataset.eventclick)
        // data-eventClick="eventOn"

        if (element.dataset.eventclick != 'eventOn') {  

            console.log('Событие установлено');
            element.dataset.eventclick = 'eventOn';

            element.addEventListener( 'click', (e) => {

                const withinBoundaries = e.composedPath().includes(div);
                console.log(withinBoundaries);

                console.log('вызвалось');
                if ( ! withinBoundaries ) {
                    const datalist = document.querySelector('#' + IdDataList);
                    // console.log(datalist, 'datalist');
                    listHide(IdDataList)
                }
            }) 
    
        }else{
            console.log('Событие не установлено');
        }

    });

}


export {OnClick_Option, OnClick_SearchReset, closeMissClick}