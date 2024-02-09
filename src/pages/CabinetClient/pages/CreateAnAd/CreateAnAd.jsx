import { Col, Container, Form, Row } from "react-bootstrap";
import style from './CreateAnAd.module.sass';
import './select.css';
import Header from "../../../../UI/Header/Header";
import CustomDataList from "../../../../components/CustomDataList/CustomDataList";
import { useDispatch, useSelector } from "react-redux";
import { loaderSwitchBrands, loaderUser, reloadBrands, reloadFuel, reloadModels, reloadUser } from "../../../../redux/dataState";
import { useNavigate } from "react-router-dom";
import { request } from "../../../../Action/request";
import { useEffect, useState } from "react";
import Select from "react-select";

export default function CreateAnAd(props){
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let user = useSelector(state => state.dataState.value.user.data);
    let resetState = props.resetState;
    let index = props.index;
    let brands = useSelector(state => state.dataState.value.brands);
    let models = useSelector(state => state.dataState.value.models.data);
    let fuels = useSelector(state => state.dataState.value.fuel.data);
    if(brands.loader){
        request('post', 'brands', (response) => {
            if (response.status === 200) {
            dispatch(loaderSwitchBrands(false));
            dispatch(reloadBrands(response.data));
            }
        }, {}); 
        request('post', 'models', (response) => {
            if (response.status === 200) {
                dispatch(reloadModels(response.data));
            }
        }, {});
        request('post', 'fuel', (response) => {
            if (response.status === 200) {
                dispatch(reloadFuel(response.data));
            }
        }, {});
        // request('post', 'color', (response) => {
        //     if (response.status === 200) {
        //         dispatch(reloadColor(response.data));
        //     }
        // }, {});
    }     
    
    useEffect(()=>{
        dispatch(loaderUser(true));
        request('post', 'user', (response) => {
            if (response.status === 200) {
                dispatch(loaderUser(false));
                dispatch(reloadUser(response.data));
            }
        }, {'my_token': localStorage.getItem("my_token")})
    },[]);
    
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    let userId = user.id;
    const [color, setColor] = useState('');
    const [fuel, setFuel] = useState('');
    const [power, setPower] = useState('');
    const [status, setStatus] = useState(3);
    let brandAll= [];
    let modelAll= [];
    let yearAll= [];
    let fuelAll = [];

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {brand, model, year, price, userId, fuel, power, status}
        request('post', 'addproduct', () => {}, data);
    };


    brands.data.map((brand)=> {
        brandAll.push({'label':brand.name, 'value': brand.id});
    } )
    fuels.map((fuel)=> {
        fuelAll.push({'label':fuel.name, 'value': fuel.id});
    })
    models.map((model)=> {
        if(brand == model.brand_id){
            modelAll.push({'label':model.name, 'value': model.id});
        }
    })
    for(let i = 2024; i >= 1940; i--){
        yearAll.push({'label':i, 'value': i});
    }
    return(
        <div className={style.wrap}>
            <Header />
            <Container>

                <form onSubmit={handleSubmit} method="POST" action="/addproduct">

                    <Row className="justify-content-center">
                        <Col  xs={7} className="m-4">
                            <Row className="align-items-center justify-content-center">
                                <Col xs={4}>
                                    Марка:
                                </Col>
                                <Col xs={4}>
                                    <Select classNamePrefix='select' onChange={(brand) => setBrand(brand.value)} className='select' options={brandAll} placeholder={'Марка'} isSearchable={true}/>
                                </Col>
                            </Row>
                        </Col>{/* Марка */}
                        <Col  xs={7} className="m-4">
                            <Row className="align-items-center justify-content-center">
                                <Col xs={4}>
                                    Модель:
                                </Col>
                                <Col xs={4}>
                                    <Select classNamePrefix='select' onChange={(model) => setModel(model.value)} className='select' options={modelAll} placeholder={'Модель'} isSearchable={true} isDisabled={!brand}/>
                                </Col>  
                            </Row>  
                        </Col> {/* Модель */}
                        <Col  xs={7} className="m-4">
                            <Row className="align-items-center justify-content-center">
                                <Col xs={4} gap={2}>
                                    Цена:
                                </Col>
                                <Col xs={4}>
                                <input type="text" className={style.input} value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Цена" />
                                    {/* <Select classNamePrefix='select' onChange={(model) => setModel(model.value)} className='select' style={'neutral30'} options={modelAll} placeholder={'Модель'} isSearchable={true} isDisabled={(!brand)? true:false} /> */}
                                </Col>    
                            </Row>  
                        </Col> {/* Цена */}
                        <Col  xs={7} className="m-4">
                            <Row className="align-items-center justify-content-center">
                                <Col xs={4}>
                                    Год выпуска:
                                </Col>
                                <Col xs={4}>
                                    <Select classNamePrefix='select' onChange={(year) => setYear(year.value)} className='select' style={'neutral30'} options={yearAll} placeholder={'Год'} isSearchable={true} />
                                </Col>    
                            </Row>  
                        </Col>{/* Год выпуска */}
                        <Col  xs={7} className="m-4">
                            <Row className="align-items-center justify-content-center">
                                <Col xs={4}>
                                    Мощность:
                                </Col>
                                <Col xs={4}>
                                <input type="text" className={style.input} value={power} onChange={(e) => setPower(e.target.value)} placeholder="л.с" />
                                    {/* <Select classNamePrefix='select' onChange={(model) => setModel(model.value)} className='select' options={modelAll} placeholder={'Модель'} isSearchable={true} isDisabled={(!brand)? true:false} /> */}
                                </Col>    
                            </Row>  
                        </Col> {/* Мощность */}
                        <Col  xs={7} className="m-4">
                            <Row className="align-items-center justify-content-center">
                                <Col xs={4}>
                                    Тип топлива:
                                </Col>
                                <Col xs={4}>
                                    <Select classNamePrefix='select' onChange={(fuel) => setFuel(fuel.value)} className='select' options={fuelAll} placeholder={'Вид топливо'} isSearchable={true} />
                                </Col>    
                            </Row>
                        </Col> {/* Тип топлива */}
                        <Col  xs={12} className="m-4">
                            <Row className="align-items-center justify-content-center">
                                <Col xs={12}>
                                    Описание:
                                </Col>
                                <Col xs={12}>
                                <textarea />
                                </Col>    
                            </Row>  
                        </Col> {/* Описание */}  
                        <Col xs={7} className="m-4">
                            <button type="submit">Отправить</button>
                        </Col>
                    </Row>    
                </form>     
            </Container>
                {/* <form onSubmit={handleSubmit} method="POST" action="/addproduct">
                    <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Марка" />
                    <input type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Модель" />
                    <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Год выпуска" />
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Цена" />
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Цвет" />
                    <input type="text" value={fuel} onChange={(e) => setFuel(e.target.value)} placeholder="Топливо" />
                    <input type="text" value={power} onChange={(e) => setPower(e.target.value)} placeholder="Мощность" />
                    <button type="submit">Отправить</button>
                </form> */}
        </div>     
    );
}