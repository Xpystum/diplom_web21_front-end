import { useEffect, useState } from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { request } from '../../Action/request'
import { addReview, reloadReviews, reloadSelectReview } from '../../redux/dataState'


export default function AddReviewCard(props){
    let user = props.user
    let brands = props.brands
    let models = props.models
    let body_type = props.body_type    
    let fuel = props.fuel
    let transmission = props.transmission
    let drive_unit = props.drive_unit
    let reviews = useSelector(state => state.dataState.value.reviews.data)

    let dispatch = useDispatch()


    useEffect(()=>{
      request('post', 'all-info-reviews', (response) => {
      if (response.status === 200) {
        dispatch(reloadSelectReview(response.data));
      }
    }, [{}]);})

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
      
      // await sleep(300)
      // window.alert(JSON.stringify(values, 0, 2))

      values.user_id = user.id
      localStorage.setItem('add_review', JSON.stringify(values))

      
console.log(reloadSelectReview(reviews))

      request('post', 'add-review', 
      (response) => {
        if (response.status === 200) {
            console.log(1)
            dispatch(addReview(response.data))
        }
      }, 
      [
        JSON.stringify(values)
              // {
              // 'user-id': user.id, 
              // 'brand-id': 1, 
              // 'model_id': 2,
              // 'steering_wheel': 'left',
              // 'body_type': 1,
              // 'year': 2000,
              // 'engine_capacity': 2,
              // 'power': 2,
              // 'fuel_id': 2,
              // 'transmission_id': 2,
              // 'drive_unit_id': 2,
              // 'mileage': 2,
              // 'sale_year': 2001,
              // 'main_img': 'reviews/audi1_1.jpg',
              // 'raiting': 0,}
      ])
      console.log(values)
    }

    const required = value => (value && value !== null? undefined : '*')
    const checkOpton = value => (value != null ? undefined : 'Выберите опцию')
    const mustBeNumber = value => (isNaN(value) ? 'Введите число' : undefined)

    const minValue = min => value =>
      isNaN(value) || value >= min ? undefined : `*`
    const maxValue = max => value =>
      isNaN(value) || value <= max ? undefined : `*`
    const composeValidators = (...validators) => value =>
      validators.reduce((error, validator) => error || validator(value), undefined)

      
      const Error = ({ name }) => (
        <Field

          name={name}
          subscription={{ touched: true, error: true }}
          render={({ meta: { touched, error } }) =>
            touched && error ? <span>{error}</span> : null
          }
        />
      )

    return(
        
        <div className='Add_Review_Wrap'>


          {(!localStorage.getItem("my_token"))?

                        <div className="User_info">
                            <h1>Добавление отзыва об автомобиле</h1>
                            <Link to="/sign">для создания отзыва необходима авторизация</Link>
                        </div>
                        :
          <div>
          <h1>Добавление отзыва об автомобиле</h1>
          <Form
            action='/add-review'
            onSubmit={onSubmit}

            initialValues={{ 
              // id: idNum,
              // user_id: user.id, 
              // brand_id: null, 
              // model_id: null,
              // steering_wheel: null,
              // body_type_id: null,
              // year: null,
              // engine_capacity: null,
              // power: null,
              // fuel_id: null,
              // transmission_id: null,
              // drive_unit_id: null,
              // mileage: null,
              // sale_year: null,
              // main_img: null,
              // raiting: 0,
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => 
            (
            <div className='Form_wrap' >
              <form
                method='post'
                action='add-review'
                onSubmit={handleSubmit}
                
                >
                  
                <div className='User_info'>
                  <div>Информация о вас
                    <Link to='/my'><p>{user.name}</p></Link>
{/* 
                    <Field
                      name="user_id"
                      component="input"

                      checked
                      type="radio"
                      value={user.id}
                    /> */}


                  </div>
                </div>
                <div className='Brand_model_wrap'>
                  <div>
                    <h3>Марка<span className='Error'><Error name="brand_id" /></span></h3>
                    <Field 
                      name="brand_id" 
                      component="select" 
                      validate={required || checkOpton}
                      // placeholder="Выберете марку"
                      >
                      <option 
                        value="null" 
                        selected 
                        // disabled
                        >Выберете марку</option>
                      {
                      brands.map(brands =>
                      <option 
                        value={brands.id}
                      >
                        {brands.name}
                      </option>)
                      }                                        
                    </Field>                    
                  </div>
                  <div>
                  <h3>Модель<span className='Error'><Error name="model_id" /></span></h3>
                  <Field 
                    name="model_id" 
                    component="select"
                    validate={required || checkOpton}
                  >
                    <option 
                      value="null" 
                      // disabled 
                      selected>Выберете модель</option>
                    {models.map(models =>
                    <option 
                      value={models.id}
                    >
                      {models.name}
                    </option>)
                    }
                  </Field>
                  </div>           
                </div>
                <div className="Steering_wheel">
                  <h3>Руль
                    <span className='Error'><Error name="steering_wheel" /></span>
                  </h3>
                  <div className="Button_wrap">
                    <Field 
                      component="select"
                      validate={required || checkOpton}
                      name="steering_wheel"
                    >
                      <option value="null" selected>Руль</option>
                      <option value="left" >Левый</option>
                    <option value="right" >Правый</option>
                    </Field>
                  </div>                                
                </div>
                <div className="Steering_wheel">
                  <h3>Кузов
                    <span className='Error'><Error name="body_type_id" /></span>
                  </h3>
                    <div className="Button_wrap">
                      <Field 
                        name="body_type_id"
                        component="select"
                        validate={required || checkOpton}
                      >
                        <option value="null" selected>Выберете кузов</option>
                        {
                            body_type.map(body_type => 
                            <option 
                            value={body_type.id} 
                        >
                        {body_type.name}
                      </option>)
                        }
                      </Field>
                      
                    </div>
                    <h3>Год выпуска
                      <span className='Error'><Error name="year" /></span>
                    </h3>                    
                    <div className="Button_wrap">
                    <Field
                      name="year"
                      validate={composeValidators(required, mustBeNumber, minValue(1940), maxValue(2024))}
                    >
                      {({ input, meta }) => (
                        <div className="Button_wrap">
                          <input {...input} type="text" />
                          {meta.error && meta.touched }
                        </div>
                      )}
                    </Field>
                    </div>
                </div>
                <div className="Engine_trnsmission">
                  <div className="Engine">
                    <div>
                      <h3>Объем, см3
                        <span className='Error'><Error name="engine_capacity" /></span>
                      </h3>
                      <Field
                        name="engine_capacity"
                        validate={composeValidators(required, mustBeNumber)}
                      >
                      {({ input, meta }) => (
                        <div className="Button_wrap">
                          <input {...input} type="text" />
                          {meta.error && meta.touched }
                        </div>
                      )}
                      </Field>
                    </div>
                  <div>
                    <h3>Мощность, л.с.
                      <span className='Error'><Error name="power" /></span>
                    </h3>
                   <Field
                      name="power"
                      validate={composeValidators(required, mustBeNumber)}
                    >
                      {({ input, meta }) => (
                        <div className="Button_wrap">
                          <input {...input} type="text" />
                          {meta.error && meta.touched }
                        </div>
                      )}
                    </Field>
                  </div>
                  <div>
                    <h3>Тип топлива
                      <span className='Error'><Error name="fuel_id" /></span>
                    </h3>
                      <Field 
                        name="fuel_id"
                        component="select"
                        validate={required || checkOpton}
                      >
                        <option value="null" selected></option>
                          {
                            fuel.map(fuel => 
                            <option 
                              value={fuel.id} 
                            >
                            {fuel.name}
                            </option>)
                            }
                        </Field>
                      </div>
                    <div>
                      <h3>Трансмиссия
                        <span className='Error'><Error name="transmission_id" /></span>
                      </h3>
                      <Field 
                        name="transmission_id"
                        component="select"
                        validate={required || checkOpton}
                      >
                        <option value="null" selected>
                          </option>
                            {
                            transmission.map(transmission => 
                              <option  value={transmission.id} >
                                {transmission.name}
                              </option>)
                            }
                      </Field>
                    </div>
                    <div>
                      <h3>Привод
                        <span className='Error'><Error name="drive_unit_id" /></span>
                      </h3>
                      <Field 
                      name="drive_unit_id"
                      component="select"
                      validate={composeValidators(required, checkOpton)}
                      >
                        <option value="null" selected></option>
                        {
                          drive_unit.map(drive_unit =>
                            <option 
                            value={drive_unit.id}
                            >
                              {drive_unit.name}
                              </option>)
                              }
                        </Field>
                    </div>
                  </div>
                </div>
                <div className="My_review">
                  <h2>Мой отзыв</h2>
                  <div className="Engine">
                    <div>
                      <h3>Пробег, км
                        <span className='Error'><Error name="mileage" /></span>
                      </h3>
                      <Field
                          name="mileage"
                          validate={composeValidators(required, mustBeNumber)}
                        >
                        {({ input, meta }) => (
                          <div className="Button_wrap">
                            <input {...input} type="text" />
                            {meta.error && meta.touched }
                          </div>
                        )}
                        </Field>
                      </div>
                      <div>
                        <h3>Год приобретения
                          <span className='Error'><Error name="sale_year" /></span>
                        </h3>
                        <Field
                          name="sale_year"
                          validate={composeValidators(required, mustBeNumber, minValue(1940), maxValue(2024))}
                        >
                        {({ input, meta }) => (
                          <div className="Button_wrap">
                            <input {...input} type="text" />
                            {meta.error && meta.touched }
                          </div>
                        )}
                        </Field>
                      </div>
                      </div>
                      <div className="Review_text">
                        <h3>Отзыв
                          <span className='Error'><Error name="review" /></span>
                        </h3>
                        <Field 
                          validate={composeValidators(required)}
                          name="review" 
                          component="textarea"
                          rows="15" 
                          cols="220"/>
                        </div>
                    </div>


                <div className="Button_submit">
                  <button 
                    type="submit" disabled={submitting || pristine}
                    // onClick={onSubmit}     
                                 
                  >
                    Создать отзыв
                  </button>

                </div>
                {/* //предпросмотр удолить */}
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>
              </div>
            )}
          />
          </div>
          }

        </div>
    )
}