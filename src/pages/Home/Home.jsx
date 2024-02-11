import { Col, Container, Row } from "react-bootstrap";
import Header from "../../UI/Header/Header";
import CaruselWidget from "../../widgets/CaruselWidget/CaruselWidget";
import CheckBeforePurchaseWidget from "../../widgets/CheckBeforePurchaseWidget/CheckBeforePurchaseWidget";
import ReviewsOwnersWidget from "../../widgets/ReviewsOwnersWidget/ReviewsOwnersWidget";
import style from './Home.module.sass'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loaderSwitchWidgets, reloadWidgets } from "../../redux/dataState";
import { useEffect } from "react";
import { request } from "../../Action/request";


export default function Home(props) {

    let dispatch = useDispatch();
    let widgets = useSelector(state => state.dataState.value.widgets.data)
    useEffect(()=>{
          request('post', 'widgets', (response) => {
          if (response.status === 200) {
            dispatch(loaderSwitchWidgets(false));
            dispatch(reloadWidgets(response.data));
          }
        }, [{}]);
      },[]);
    
    let position = {};

    // Парсинг результатов и расстановка значений в объекте position
    widgets.forEach(widget => {
        let widgetPosition = widget.position;
        let widgetName = widget.name;

        switch (widgetPosition) {
            case 'top-content-one': position['top-content-one'] = widgetName; break;
            case 'top-content-two': position['top-content-two'] = widgetName; break;
            case 'top-panel-right': position['top-panel-right'] = widgetName; break;
            default: break;
        }
    });
    console.log(position);
    return (
        <div className={style.wrap}>
            <Header user={props.user}/>

            <div className={style.container}>
                <Link to="/category/auto" className={style.link}><h1 className={style.title}>Продажа авто в России</h1></Link>
                <div className={style.location}>
                    <a href="#" title="~ЗАГЛУШКА~">Нижегородская область</a>
                    <a href="#" title="~ЗАГЛУШКА~">Нижний Новгород</a>
                    <a href="#" title="~ЗАГЛУШКА~">Другой город...</a>
                    <span>~ЗАГЛУШКА~</span>
                </div>
            </div>
                { position['top-content-one'] }
                { position['top-content-two'] }
            
            <Container className={style.content}>
                <Row>
                    <Col xs={9}>
                        <ReviewsOwnersWidget />
                    </Col>
                    <Col xs={3}>
                        <CheckBeforePurchaseWidget/>
                    </Col>    
                </Row>
            </Container>
        </div>
    )
};
