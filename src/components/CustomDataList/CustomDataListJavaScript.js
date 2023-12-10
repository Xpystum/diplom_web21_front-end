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
function OnClick_SearchReset(inputRef, IdDataList){
    if(inputRef.current.value){
        inputRef.current.value = '';
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

    const div = document.querySelector('.' + CustomDataList);

    document.addEventListener( 'click', (e) => {
        
        const withinBoundaries = e.composedPath().includes(div);

        if ( ! withinBoundaries ) {
            const datalist = document.querySelector('#' + IdDataList);
            listHide(IdDataList)
        }
        
    }) 
}




export {OnClick_Option, OnClick_SearchReset, closeMissClick}