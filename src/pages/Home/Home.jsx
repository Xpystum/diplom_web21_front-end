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

    };
      
    // Парсинг результатов и расстановка значений в объекте position
    widgets.forEach(widget => {
        let widgetPosition = widget.position_main;
        let widgetName = widget.name;
        let WidgetComponent = componentMap[widgetName];
        console.log
        // switch (widgetPosition) {
        //     case 'header-panel-left': position['header-panel-left'] = widgetName; break;
        //     case 'header-panel-center': position['header-panel-center'] = widgetName; break;
        //     case 'header-panel-right': position['header-panel-right'] = widgetName; break;
        //     case 'hero-top-one': position['hero-top-one'] = widgetName; break;
        //     case 'hero-top-two': position['hero-top-two'] = widgetName; break;
        //     case 'content-top-one': position['content-top-one'] = widgetName; break;
        //     case 'content-top-two': position['hero-top-one'] = widgetName; break;
        //     case 'content-top-three': position['hero-top-one'] = widgetName; break;
        //     case 'content-top-four': position['hero-top-one'] = widgetName; break;
        //     case 'content-main': position['hero-top-one'] = widgetName; break;
        //     case 'content-bottom-one': position['hero-top-one'] = widgetName; break;
        //     case 'content-bottom-two': position['hero-top-one'] = widgetName; break;
        //     case 'content-bottom-three': position['hero-top-one'] = widgetName; break;
        //     case 'content-bottom-four': position['hero-top-one'] = widgetName; break;

        //     case 'top-content-two': console.log('top-content-two\nname:',widgetName); break;
        //     case 'top-panel-right': console.log('top-panel-right\nname:',widgetName); break;
        //     case 'top-content-one': console.log('top-content-one\nname:',widgetName); break;
        //     case 'top-content-two': console.log('top-content-two\nname:',widgetName); break;
        //     case 'top-panel-right': console.log('top-panel-right\nname:',widgetName); break;
        //     default: break;
        // }


        
    //     function SomeComponent({ widgetName }){
    //     // выбираем компонент на основе значения widgetName из объекта componentMap

      
    //     // если нет подходящего компонента, выводим сообщение об ошибке или рендерим пустой блок
    //     if (!WidgetComponent) {
    //       return <p>Неизвестный виджет</p>;
    //     //   или return null;
    //     }
      
    //     // рендер выбранного компонента
    //     return <WidgetComponent />;
    //   };
    });

    return (
        <div className={style.wrap}>
            <Header user={props.user}/>
            {}
            {/* { position['hero-top-one'] } */}
            <LocalCityWidget />
            { position['hero-top-two'] }
            <CaruselWidget />
            
            <Container className={style.content}>
                <Row>
                    <Col xs={9}>
                        { position['content-top-one'] }
                        <ReviewsOwnersWidget />
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
                        <CheckBeforePurchaseWidget/>
                    </Col>    
                </Row>
            </Container>
        </div>
    )
};
