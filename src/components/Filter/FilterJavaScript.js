function fillArrYear(){
    let year = [];
    for (let i = (new Date().getFullYear()); i >= 1940; i--) {
      year.push(i);
    }
    return year;
  }


export {fillArrYear}