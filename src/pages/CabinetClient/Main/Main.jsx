import { Link } from "react-router-dom";
import style from "./Main.module.sass";
import moment from 'moment/moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import { URL_IMG } from "../../../config";
import TopCabinetClient from "../TopCabinetClient/TopCabinetClient";

export default function Main(props){
    let user = props.user;
    let time = props.time;

    return (
        <div className={style.wrap}>
            <Container>
                
                <main className={style.main}>
                    <Row>
                        <Col>
                            <article>
                                <section>
                                    <div>
                                        <p>Почта: {user.email}</p>
                                        <p>Статус: {user.status}</p>
                                        <p>Регистрация: {moment(time, "YYYYMMDD").format('LL')}</p>    
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon="fa-solid fa-user" />
                                    </div>
                                </section>
                                <section>
                                    <div>
                                        <h2>Пакеты услуг</h2>
                                        <p>Экономьте на размещении и продвижении от 10% до 60%</p>
                                        <button>Выбрать скидку</button>    
                                    </div>
                                    <div>
                                        <img src={URL_IMG + 'cabinetclient/services-pack1.svg'} alt="" />
                                    </div>
                                </section>
                                <section>
                                    <div>
                                        <h2>Проверка по VIN</h2>
                                        <p>Пробеги, цены, фотографии, ремонты, обслуживание, ДТП, залоги и другое!</p>
                                        <button>Проверить авто</button>    
                                    </div>
                                    <div>
                                        <img src={URL_IMG + 'cabinetclient/services-pack2.svg'} alt="" />
                                    </div>
                                </section>
                                <section>
                                    <div>
                                        <h2>Карточка продавца</h2>
                                        <p>Продажа автомобилей - ваш бизнес? С карточкой продавца управлять объявлениями проще</p>
                                        <button>Создать карточку</button>    
                                    </div>
                                    <div>
                                        <img src={URL_IMG + 'cabinetclient/services-pack3.svg'} alt="" />
                                    </div>
                                </section>
                            </article>
                        </Col>
                        <Col>
                            <aside>
                                <nav>
                                    <ul>
                                        <li><Link to="/my" className="active"><FontAwesomeIcon icon="fa-solid fa-circle-user" /> <span>Личный кабинет</span></Link></li>
                                        <li><Link to="/my/ads"><FontAwesomeIcon icon="fa-solid fa-car-side" /> <span>Объявления</span></Link></li>
                                        <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-comment" /> <span>Сообщения</span></Link></li>
                                        <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-star" /> <span>Избранное</span></Link></li>
                                        <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-bell" /> <span>Подписки</span></Link></li>
                                        <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-chart-simple" /> <span>Статистика</span></Link></li>
                                        <li><Link to="#"><FontAwesomeIcon icon="fa-solid fa-gauge-simple-high" /> <span>Отчеты по VIN</span></Link></li>
                                    </ul>
                                </nav>
                            </aside>
                        </Col>
                        
                    </Row>
                </main>
            </Container>
        </div>
    )
};