import Header from "../../UI/Header/Header"
import style from './AddReview.module.sass'
import './AddReview.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loaderSwitchProducts, reloadBrands, loaderSwitchReviews, reloadReviews, reloadSelectReview, reloadModels, reloadUser, loaderUser, reloadBodyType, reloadFuel, reloadTransmission, reloadDriveUnit } from "../../redux/dataState"
import { request } from "../../Action/request"
import requestDataInToken from "../../Action/requestDataInToken"
import { Link, useNavigate } from "react-router-dom"


export default function AddReview(props){
    let dispatch = useDispatch()
    let select_reviews = useSelector(state => state.dataState.value.reviews.data)//удолить
    let select_review = useSelector(state => state.dataState.value.select_review.data)//удолить

    
    
    
    useEffect(()=>{
        request('post', 'all-info-reviews', (response) => {
        if (response.status === 200) {
          dispatch(loaderSwitchReviews(false));
          dispatch(reloadSelectReview(response.data));

          dispatch(reloadReviews(response.data));

        }
      }, [{}]);

    },[]);
    //console.log(select_review)//удолить
    //брэнды(марка)
    
    let [brandsList, setBrandsList] = useState({})

    let brands = useSelector(state => state.dataState.value.brands)
    let models = useSelector(state => state.dataState.value.models.data)
    let body_type = useSelector(state => state.dataState.value.body_type.data)
    let user = useSelector(state => state.dataState.value.user.data)
    let fuel = useSelector(state => state.dataState.value.fuel.data)
    let transmission = useSelector(state => state.dataState.value.transmission.data)
    let drive_unit = useSelector(state => state.dataState.value.drive_unit.data)

    let [id, setId] = useState(localStorage.getItem("uid"))
    let navigate = useNavigate();

    useEffect(()=>{
        dispatch(loaderSwitchProducts(true))
        request('post', 'brands', (response) => {
        if (response.status === 200) {
            dispatch(reloadBrands(response.data))
        }
      }, )
        request('post', 'models', (response) => {
        if (response.status === 200) {
            dispatch(reloadModels(response.data))
        }
      }, )

      if (user.length === 0 || localStorage.getItem("uid") != user.id) {
        dispatch(loaderUser(true))
        request('post', 'user', (response) => {
          if (response.status === 200) {
            dispatch(reloadUser(response.data))
          }
        }, {'id': id});
      }
      request('post', 'body-type', (response) => {
        if (response.status === 200) {
            dispatch(reloadBodyType(response.data))
        }
      }, )
      request('post', 'fuel', (response) => {
        if (response.status === 200) {
            dispatch(reloadFuel(response.data))
        }
      }, )
      request('post', 'transmission', (response) => {
        if (response.status === 200) {
            dispatch(reloadTransmission(response.data))
        }
      }, )
      request('post', 'drive-unit', (response) => {
        if (response.status === 200) {
            dispatch(reloadDriveUnit(response.data))
        }
      }, )
    }, [])

    let brandsListAll = []
    let brand
    let idBrand = 1

    for(let i = 0; i < brands.data.length; i++){        
        brand = Object.assign(brands.data[i])
        brandsListAll.push(brand.name)
    }
    // console.log(drive_unit)

    // console.log(select_review)

    let [user_id, userState] = useState(null)
    let [brand_id, brandIdState] = useState(null)
    let [model_id, modelIdState] = useState(null)

    let addReview = useSelector(state => state.dataState.value.add_reviews)
    let [stateAddReviews, setStateAddReviews] = useState({
        user_id: '',
        brand_id: '',
        model_id: '',
        steering_wheel: '',
        body_type_id: '',
        year: '',
        engine_capacity: '',
        power: '',
        fuel_id: '',
        transmission_id: '',
        drive_unit_id: '',
        sale_year: '',
        mileage: '',
        review: '',
    })
    
    function sendReview(){
//         if(!stateAddReviews){
//             let data = [];
//             data = [...addReview];
//             data.push({
//                 'user_id' : user.id,
//                 'brand_id' : 3,
//                 'model_id' : 2,
//                 'steering_wheel': 'left',
//                 'body_type_id' : 2,
//                 'year' : 1998,
//                 'engine_capacity' : 3,
//                 'power': 200,
//                 'fuel_id' : 1 ,
//                 'transmission_id' : 1,
//                 'drive_unit_id' : 1,
//                 'sale_year' : 2000,
//                 'mileage' : 23000,
//                 'review' : 'asdssdasdasdasdasdasdasdadasd',});
                

//                 dispatch(addReview(data))
// console.log(addReview)
                if(localStorage.getItem("my_token")){
                    request("post", 'add-review', (response)=>{
                      if(response.status == 200){
                        setStateAddReviews(true);
                      }
                    }, {         
                        'user_id' : user.id,
                        'brand_id' : 3,
                        'model_id' : 2,
                        'steering_wheel': 'left',
                        'body_type_id' : 2,
                        'year' : 1998,
                        'engine_capacity' : 3,
                        'power': 200,
                        'fuel_id' : 1 ,
                        'transmission_id' : 1,
                        'drive_unit_id' : 1,
                        'sale_year' : 2000,
                        'mileage' : 23000,
                        'review' : 'asdssdasdasdasdasdasdasdadasd',
                    })
                  }
                }
        
    // }
    
    
    
    return(
        <div>
            <Header />

            <div className='Add_Review_Wrap'>
                <div className="Form_wrap">
                    <h1>Добавление отзыва об автомобиле</h1>
                    {
                        (!localStorage.getItem("my_token"))?
                        <div className="User_info">
                            <Link to="/sign">для создания отзыва необходима авторизация</Link>
                        </div>
                        :
                        <form action={sendReview}>
                            <div className="My_car_wrap">
                                <h2>Моя машина</h2>                            
                                <div className="User_info">
                                    <p>Информация о вас</p>
                                    <Link to="/my"  >{user.name}</Link>
                                    <select name="user_id" className="No_display">
                                        <option 
                                        value={user.id} selected
                                        onChange={(event) => {userState(event.target.value)}}
                                        >
                                    </option></select>
                                </div>
                                <div className="Brand_model_wrap">
                                    <div>
                                        <h3>Марка</h3>                                    
                                            {
                                                (brandsListAll.length == 0)?
                                                <select name="brand_id">
                                                    <option value="null" selected>Выберете марку</option>
                                                </select>
                                                :
                                                <select name="brand_id">
                                                    <option value="null" selected>Выберете марку</option>
                                                    {
                                                    brandsListAll.map(brandsListAll => 
                                                    <option 
                                                        value={idBrand ++}
                                                        onChange={(event) => {brandIdState(event.target.value)}} 
                                                    >
                                                        {brandsListAll}
                                                    </option>)
                                                    }
                                                </select>
                                            }
                                    </div>
                                    <div>
                                        <h3>Модель</h3>                                    
                                            {
                                                (models.length == 0)?
                                                <select name="model_id">
                                                    <option value="null" selected>Выберете модель</option>
                                                </select>
                                                :
                                                <select name="model_id">
                                                    <option value="null" selected>Выберете модель</option>
                                                    {
                                                    models.map(models => 
                                                    <option 
                                                        value={models.id} 
                                                        onChange={(event) => {modelIdState(event.target.value)}}
                                                    >
                                                        {models.name}
                                                    </option>)
                                                    }
                                                </select>
                                            }
                                    </div>                                
                                </div>
                                <div className="Steering_wheel">
                                    <h3>Руль</h3>
                                    <div className="Button_wrap">
                                        <select name="steering_wheel">
                                            <option value="null" selected>Руль</option>
                                            <option value="left" >Левый</option>
                                            <option value="right" >Правый</option>
                                        </select>
                                    </div>                                
                                </div>
                                <div className="Steering_wheel">
                                    <h3>Кузов</h3>
                                    <div className="Button_wrap">
                                    {
                                                (body_type.length == 0)?
                                                <select name="body_type_id">
                                                    <option value="null" selected>Выберете кузов</option>
                                                </select>
                                                :
                                                <select name="body_type_id">
                                                    <option value="null" selected>Выберете кузов</option>
                                                    {
                                                    body_type.map(body_type => 
                                                    <option 
                                                        value={body_type.id} 
                                                    >
                                                        {body_type.name}
                                                    </option>)
                                                    }
                                                </select>
                                            }
                                    </div>
                                    <h3>Год выпуска</h3>
                                    <div className="Button_wrap">
                                        <input name="year" type="text" />
                                    </div>
                                </div>
                                <div className="Engine_trnsmission">
                                    <div className="Engine">
                                        <div>
                                            <h3>Объем, см3</h3>
                                            <input type="text" name="engine_capacity" />
                                        </div>
                                        <div>
                                            <h3>Мощность, л.с.</h3>
                                            <input type="text" name="power" />
                                        </div>
                                        <div>
                                            <h3>Тип топлива</h3>
                                            {
                                                (fuel.length == 0)?
                                                <select name="fuel_id">
                                                    <option value="null" selected></option>
                                                </select>
                                                :
                                                <select name="fuel_id">
                                                    <option value="null" selected></option>
                                                    {
                                                    fuel.map(fuel => 
                                                    <option 
                                                        value={fuel.id} 
                                                    >
                                                        {fuel.name}
                                                    </option>)
                                                    }
                                                </select>
                                            }
                                        </div>
                                        <div>
                                            <h3>Трансмиссия</h3>
                                            {
                                                (transmission.length == 0)?
                                                <select name="transmission_id">
                                                    <option value="null" selected></option>
                                                </select>
                                                :
                                                <select name="transmission_id">
                                                    <option value="null" selected></option>
                                                    {
                                                    transmission.map(transmission => 
                                                    <option 
                                                        value={transmission.id} 
                                                    >
                                                        {transmission.name}
                                                    </option>)
                                                    }
                                                </select>
                                            }
                                        </div>
                                        <div>    
                                            <h3>Привод</h3>                                    
                                                {
                                                    (drive_unit.length == 0)?
                                                    <select name="drive_unit_id">
                                                        <option value="null" selected></option>
                                                    </select>
                                                    :
                                                    <select name="drive_unit_id">
                                                        <option value="null" selected></option>
                                                        {
                                                        drive_unit.map(drive_unit => 
                                                        <option 
                                                            value={drive_unit.id} 
                                                        >
                                                            {drive_unit.name}
                                                        </option>)
                                                        }
                                                    </select>
                                                }
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                            <div className="My_review">
                                <h2>Мой отзыв</h2>
                                <div className="Engine">
                                    <div>
                                        <h3>Пробег, км</h3>
                                        <input type="text" name="mileage" />
                                    </div>
                                    <div>
                                        <h3>Год приобретения</h3>
                                        <input type="text" name="sale_year" />
                                    </div>
                                </div>
                                <div className="Review_text">
                                    <h3>Отзыв</h3>
                                    <textarea type="text" name="review"  rows="15" cols="220"/>
                                </div>
                            </div>
                            <div>
                                <input type="image" src="" alt=""/>
                            </div>
                            <button>Опубликовать отзыв</button>
                        </form>
                    
                    } 
                </div>                
            </div>
        </div>
    )
}