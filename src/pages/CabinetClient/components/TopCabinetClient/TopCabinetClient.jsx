import { Col, Container, Row } from "react-bootstrap";
import style from "./TopCabinetClient.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { URL_IMG } from "../../../../config";
import Avatar from "react-avatar";

export default function TopCabinetClient(props){
    
    let user = props.user;
    const pathAvatar = user.pathAvatar.path.resource;

    return(
        <div className={style.top}>
            <Container className={style.top__wrap}>
                <div className={style.user__wrap}>
                    <div className={style.avatar}>
                        {
                            (user.name)? 
                                // <span className={style.avatar__name}>{user.name[0]}</span>
                                <Avatar name={user?.name} src={URL_IMG + pathAvatar} size='60' round={true}/> 
                                :
                                <FontAwesomeIcon className={style.avatar__icon} icon="fa-solid fa-user-tie"/>
                            
                        } 
                    </div>
                    <div className={style.user__content}>
                        <p className={style.user__name}>{(user.name)? user.name: "Гость"}</p>
                        <span className={style.user__city}>{user.city}</span> <Link className={style.user__setting} to="#"> Настройки </Link>
                    </div>
                        
                </div>
                <Row className={style.user__operation}>
                    <Col className={style.user__cash}>{new Intl.NumberFormat("ru-RU").format(user.cash)} &#8381;</Col>
                    <Col xs={2} className={style.pluse}><FontAwesomeIcon icon="fa-solid fa-plus" /></Col>
                    <Col xs={12}  className={style.user__setting__wrap}><Link className={style.user__setting} to="#">Отчеты по операциям</Link></Col>
                </Row>
                    
            </Container>
        </div>
    );
};

// TODO сделать  
//  настройки
//  Отчеты по операциям