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
import LocalCityWidget from "../../widgets/LocalCityWidget/LocalCityWidget";
import LocationWidget from "../../widgets/LocationWidget/LocationWidget";
import MenuWidget from "../../widgets/MenuWidget/MenuWidget";
import BrandColumnWidget from "../../widgets/BrandColumnWidget/BrandColumnWidget";
import RelevanceProductWidget from "../../widgets/RelevanceProductWidget/RelevanceProductWidget";
import LoginRegisterWidget from "../../widgets/LoginRegisterWidget/LoginRegisterWidget";

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
    let componentMap = {
        CaruselWidget: CaruselWidget,
        LocalCityWidget: LocalCityWidget,
        ReviewsOwnersWidget: ReviewsOwnersWidget,
        RelevanceProductWidget: RelevanceProductWidget,
        MenuWidget: MenuWidget,
        LocationWidget: LocationWidget,
        BrandColumnWidget: BrandColumnWidget,
        CheckBeforePurchaseWidget: CheckBeforePurchaseWidget,
        LoginRegisterWidget:LoginRegisterWidget,
    };
      
    // Парсинг результатов и расстановка значений в объекте position
    widgets.forEach(widget => {
        let widgetPosition = widget.position_main;
        let widgetName = widget.name;
        let WidgetComponent = componentMap[widgetName];

        switch (widgetPosition) {
            case 'header-panel-left': position['header-panel-left'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'header-panel-center': position['header-panel-center'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'header-panel-right': position['header-panel-right'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;

            case 'hero-top-one': position['hero-top-one'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'hero-top-two': position['hero-top-two'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;

            case 'content-top-one': position['content-top-one'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'content-top-two': position['content-top-two'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'content-top-three': position['content-top-three'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'content-top-four': position['content-top-four'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'content-main': position['content-main'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'content-bottom-one': position['content-bottom-one'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'content-bottom-two': position['content-bottom-two'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'content-bottom-three': position['content-bottom-three'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'content-bottom-four': position['content-bottom-four'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;

            case 'extra-top-one': position['extra-top-one'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'extra-top-two': position['extra-top-two'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'extra-bottom-one': position['extra-bottom-one'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;
            case 'extra-bottom-two': position['extra-bottom-two'] = (widget.status_main != null)? <WidgetComponent/> : ''; break;

            default: break;
        }
    });

    return (
        <div className={style.wrap}>
            <Header user={props.user} />
            { position['hero-top-one'] }
            { position['hero-top-two'] }
            
            <Container className={style.content}>
                <Row>
                    <Col xs={9}>
                        { position['content-top-one'] }
                        { position['content-top-two'] }
                        { position['content-top-three'] }
                        { position['content-top-four'] }
                        { position['content-main'] }
                        { position['content-bottom-one'] }
                        { position['content-bottom-two'] }
                        { position['content-bottom-three'] }
                        { position['content-bottom-four'] }
                    </Col>
                    <Col xs={3}>
                        { position['extra-top-one'] }
                        { position['extra-top-two'] }
                        { position['extra-bottom-one'] }
                        { position['extra-bottom-two'] }
                    </Col>    
                </Row>
            </Container>
        </div>
    )
};
