export function parseArrRedux(array){
// array - массив для добавление (уникальных и последних значений из input)

    const func = (arr, object) => {

        arr.push({name: object.name, value: object.value});

        
        let flag = 0;
        arr.forEach((element, index)=>{
            
            if (element.name == object.name && element.value != object.value) {
                arr.splice(index, 1);
            }


            if (element.value == object.value) {
                flag++;
            }

            if(flag == 2){
                arr.splice(index, 1);
                flag = 0;
            }

        })
            
        return arr;
    }
  
    const result = array.reduce(func, []);
    return result;
    // console.log(result);
    // return result;
}