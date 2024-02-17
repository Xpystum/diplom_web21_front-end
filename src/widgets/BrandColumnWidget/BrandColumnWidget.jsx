import PreloaderSmall from "../../components/PreloaderSmall/PreloaderSmall";
import BrandCard from "./BrandCard/BrandCard";
import style from './BrandColumnWidget.module.sass';

export default function BrandColumnWidget(props){
    let mass = props.brands
    let brands = mass.data
    const chunkedBrands = chunkArray(brands, 4);
    // let itemColumn = props.itemColumn
    
    // let popular = props.noPopular
    // let brandsColumn1 = Object.assign(brands.slice(0, itemColumn))
    // let brandsColumn2 = Object.assign(brands.slice(itemColumn, itemColumn*2))
    // let brandsColumn3 = Object.assign(brands.slice(itemColumn*2, itemColumn*3))
    // let brandsColumn4 = Object.assign(brands.slice(itemColumn*3, itemColumn*4))
    
    return(
            <div className="App">
              {chunkedBrands.map((column, index) => (
                <div key={index} className="column">
                  {column.map((brand, i) => (
                    <div key={i} className="brand">{brand}</div>
                  ))}
                </div>
              ))}
            </div>
          );
        };
        
        // Функция для разделения массива на массивы по указанному количеству элементов
        const chunkArray = (arr, size) => {
          return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
            arr.slice(index * size, index * size + size)
          );
        };


    //     <div className={style.tabs}>
           
    //         {(!mass.loader)?    
    //             <div className={style.tabs__content}>
    //                 <div className={style.tabs__content__column}>
    //                     {brandsColumn1.map((brand)=>
    //                         (brand.type <= 2 && brand.popular_passenger != popular)?
    //                         <BrandCard brand={brand} key={brand.id}/>
    //                         :""
    //                     )}
    //                 </div>
    //                 <div className={style.tabs__content__column}>
    //                     {brandsColumn2.map((brand)=>
    //                         (brand.type <= 2 && brand.popular_passenger != popular)?
    //                         <BrandCard brand={brand} key={brand.id}/>
    //                         :""
    //                     )}
    //                 </div>
    //                 <div className={style.tabs__content__column}>
    //                     {brandsColumn3.map((brand)=>
    //                         (brand.type <= 2 && brand.popular_passenger != popular)?
    //                         <BrandCard brand={brand} key={brand.id}/>
    //                         :
    //                         ""
    //                     )}
    //                 </div>
    //                 <div className={style.tabs__content__column}>
    //                     {brandsColumn4.map((brand)=>
    //                             (brand.type <= 2 && brand.popular_passenger != popular)?
    //                             <BrandCard brand={brand} key={brand.id}/>
    //                             :
    //                             ""
    //                     )}
    //                 </div>
    //             </div>
    //             :
    //                 <PreloaderSmall />
    //             }
            
    //     </div>