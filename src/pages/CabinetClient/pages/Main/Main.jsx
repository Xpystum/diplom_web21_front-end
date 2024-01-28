import { Link } from "react-router-dom";
import style from "./Main.module.sass";
import moment from 'moment/moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import { URL_IMG } from "../../../../config";

export default function Main(props){
    let user = props.user;
    let time = props.time;

    return (
        <div className={style.wrap}>
            <Container>
                
                <main className={style.main}>
                <article>
                        <section>
                            <Row>
                                <Col xs={9}>
                                    <p>Почта: {user.email}</p>
                                    <p>Статус: {user.status}</p>
                                    <p>Регистрация: {moment(time, "YYYYMMDD").format('LL')}</p>    
                                </Col>
                                <Col xs={3}>
                                    <FontAwesomeIcon icon="fa-solid fa-user" />
                                </Col>    
                            </Row>
                            
                        </section>
                        <section>
                            <Row>
                                <Col xs={9}>
                                    <h2>Пакеты услуг</h2>
                                    <p>Экономьте на размещении и продвижении от 10% до 60%</p>
                                    <button>Выбрать скидку</button>    
                                </Col>
                                <Col xs={3}>
                                    <img src={URL_IMG + 'cabinetclient/services-pack1.svg'} alt="" />
                                </Col>    
                            </Row>
                        </section>
                        <section>
                            <Row>
                                <Col xs={9}>
                                    <h2>Проверка по VIN</h2>
                                    <p>Пробеги, цены, фотографии, ремонты, обслуживание, ДТП, залоги и другое!</p>
                                    <button>Проверить авто</button>    
                                </Col>
                                <Col xs={3}>
                                    <img src={URL_IMG + 'cabinetclient/services-pack2.svg'} alt="" />
                                </Col>    
                            </Row>
                        </section>
                        <section>
                            <Row>
                                <Col xs={9}>
                                    <h2>Карточка продавца</h2>
                                    <p>Продажа автомобилей - ваш бизнес? С карточкой продавца управлять объявлениями проще</p>
                                    <button>Создать карточку</button> 
                                </Col>
                                <Col xs={3}>
                                    <img src={URL_IMG + 'cabinetclient/services-pack3.svg'} alt="" />
                                </Col>   
                            </Row>
                        </section>
                    </article>
                </main>
            </Container>
        </div>
    )
};