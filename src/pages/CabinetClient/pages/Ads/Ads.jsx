import PreloaderSmall from "../../../../components/PreloaderSmall/PreloaderSmall";
import { useEffect } from "react";
import { request } from "../../../../Action/request";
import Header from "../../../../UI/Header/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import requestDataInToken from "../../../../Action/requestDataInToken";
import PostAdd from "../../../../UI/PostAdd/PostAdd";
import { Col, Container, Row } from "react-bootstrap";
import MenuCabinet from "../../components/MenuCabinet/MenuCabinet";
import TopCabinetClient from "../../components/TopCabinetClient/TopCabinetClient";
import style from "./Ads.module.sass";
import NewPost from "../../../../components/NewPost/NewPost";

export default function Ads(props){
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let select_user = useSelector(state => state.dataState.value.user);
  let user = select_user.data;

  useEffect(function(){
    requestDataInToken(navigate, dispatch, {url: 'ads', parametrs: {x: 13}});
  }, []);

  // request('post', '', (response) => {
  //   if (response.status === 200) {
  //   // dispatch(loaderSwitchBrands(false));
  //   // dispatch(reloadBrands(response.data));
  //   }
  // }, {}); 
  return (
    <div className={style.wrap}>
      <Header user={user}/>
      {
        (select_user.loader)? 
        <PreloaderSmall/>
        :
        <div className={style.wrap}> 
          <TopCabinetClient user={user}/>
          <Container>
            <Row>
                <Col  xs={9}>
                    <NewPost user={user}/>
                </Col>
                <Col  xs={2}>
                    <MenuCabinet />
                </Col>
            </Row>  
          </Container>

          
        </div>
      }
    </div>
  )
};
