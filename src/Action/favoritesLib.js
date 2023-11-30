

export function noDubleFavorites(favorites){
    let data = [];
    for(let favorite of favorites){
        data.push(JSON.stringify(favorite));
    }
    
    const favoritesSet = new Set();
    data.forEach((el)=>{
        favoritesSet.add(el);
    })
    
    favorites = [];

    for(let favorite of favoritesSet){
        favorites.push(JSON.parse(favorite));
    }

    return favorites;
}