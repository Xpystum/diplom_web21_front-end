import { Form, Field } from 'react-final-form'
import { Link } from 'react-router-dom'
import { request } from '../../Action/request'
import { batch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'


export default function AddReviewCard(props){
    let user = props.user
    let brands = props.brands
    let models = props.models
    let body_type = props.body_type    
    let fuel = props.fuel
    let transmission = props.transmission
    let drive_unit = props.drive_unit
    let [files, setFiles] = useState([]);
    let reviews = useSelector(state => state.dataState.value.reviews.data)
    let reviewId = [user.id] + [reviews.length] 

    console.log(reviewId)
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    const onSubmit = async values => {//функция кнопки
      await sleep(300)
      console.log(values)

      
      
      let review = {
              'id': reviewId,
              'user_id': user.id, 
              'brand_id': values.brand_id, 
              'model_id': values.model_id,
              'steering_wheel': values.steering_wheel,
              'body_type_id': values.body_type_id,
              'year': values.year,
              'engine_capacity': values.engine_capacity,
              'power': values.power,
              'fuel_id': values.fuel_id,
              'transmission_id': values.transmission_id,
              'drive_unit_id': values.drive_unit_id,
              'mileage': values.mileage,
              'sale_year': values.sale_year,
              'main_img': 'reviews/audi1_1.jpg',//TODO имя файла
              'review': values.review,
              'raiting': 0,
      }
      
      request('post', 'add-review', 
      (response) => {
        if (response.status === 200) {
          console.log(review)

        }
      }, review)


      //TODO зациклить на длинну массива
      let imgId = [reviewId] + [files.length]

      let foto = {
        'id': imgId,
        'review_id': reviewId,
        'resource': 'reviews/audi1_2.jpg',
      }
/*
      request('post', 'add-review-img', 
      (response) => {
        if (response.status === 200) {
          console.log(files)
          
        }
      }, foto)

        // console.log(files.map(file =>(file.name)))

      request('post', 'save-img', 
          (response) => {
            if (response.status === 200) {
              console.log('save')
        }
      }, files)
*/
      files.forEach((file) => 
      
          request('post', 'add-review-img', 
          (response) => {
            if (response.status === 200) {
              console.log(files)
              console.log(file)
              request('post', 'save-img', 
              (response) => {
                if (response.status === 200) {
                  console.log('save')
                }
              }, file)
            }
      }, foto),
      )
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

//добавление фоток
      
      const {getRootProps, getInputProps} = useDropzone({
        accept: {
          'image/*': []
        },
        onDrop: acceptedFiles => {
          
          setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        },
        value: files.name
      });
    
    
      const thumbs = files.map(file => (
        <div key={file.name}>
          <div>
            <img
              src={file.preview}
              
              onLoad={() => { URL.revokeObjectURL(file.preview) }}
            />
          </div>
        </div>
      ));
    
      useEffect(() => {

        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
      }, []);


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
            onSubmit={onSubmit}
            initialValues={{}}
            render={({ handleSubmit, form, submitting, pristine, values }) => 
            (
            <div className='Form_wrap' >
              
              <form
                id='review'
                onSubmit={handleSubmit}                
                >
                  
                <div className='User_info'>
                  <div>Информация о вас
                    <Link to='/my'><p>{user.name}</p></Link>
                  </div>
                </div>
                <div className='Brand_model_wrap'>
                  <div>
                    <h3>Марка<span className='Error'><Error name="brand_id" /></span></h3>
                    <Field 
                      name="brand_id" 
                      component="select" 
                      validate={required || checkOpton}
                      >
                      <option 
                        value="null" 
                        selected 
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

                  <div className='Foto_wrap'>                    
                    <section className="container">
                      <div {...getRootProps({className: 'dropzone'})}>
                        <input {...getInputProps()} 
                        />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                      </div>
                      <aside className='Foto_preview'>
                        {thumbs}                      
                      </aside>
                    </section>                    
                  </div>

                <div className="Button_submit">
                  <button 
                    type="submit" 
                    onClick={() => {
                      document.getElementById('review')
                      .dispatchEvent(new Event('submit', { cancelable: true, bubbles:true }))
                    }}                                 
                  >
                    Создать отзыв
                  </button>
                </div>
              </form>
              </div>
            )}

          />
          </div>
          }
            
        </div>
    )
}