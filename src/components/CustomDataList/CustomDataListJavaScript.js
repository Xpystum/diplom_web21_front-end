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


export {OnClick_Option, OnClick_SearchReset, listHide}