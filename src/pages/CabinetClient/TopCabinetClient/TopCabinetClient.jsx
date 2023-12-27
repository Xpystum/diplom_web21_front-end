import { Col, Container, Row } from "react-bootstrap";
import style from "./TopCabinetClient.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function TopCabinetClient(props){
    
    let user = props.user;

    return(
        <div className={style.top}>
            <Container className={style.top__wrap}>
                <div className={style.user__wrap}>
                    <div className={style.avatar}>
                        <span className={style.avatar__name}>
                        {
                            (user.name)? 
                                <span className={style.avatar__name}>{user.name[0]}</span>
                                :
                                <FontAwesomeIcon className={style.avatar__icon} icon="fa-solid fa-user-tie"/>
                            
                        } 
                        </span>
                    </div>
                    <div className={style.user__content}>
                        <p className={style.user__name}>{(user.name)? user.name: "Гость"}</p>
                        <span className={style.user__city}>{user.city}</span> <Link className={style.user__setting} to="#"> Настройки </Link>
                    </div>
                        
                </div>
                <Row className={style.user__operation}>
                    <Col className={style.user__cash}>{new Intl.NumberFormat("ru-RU").format(user.cash)} &#8381;</Col>
                    <Col xs={2}className={style.pluse}><FontAwesomeIcon icon="fa-solid fa-plus" /></Col>
                    <Col xs={12}  className={style.user__setting__wrap}><Link className={style.user__setting} to="#">Отчеты по операциям</Link></Col>
                </Row>
                    
            </Container>
        </div>
    );
};