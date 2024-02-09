import { Col, Row } from "react-bootstrap";
import PostAdd from "../../UI/PostAdd/PostAdd";
import style from './NewPost.module.sass';

export default function NewPost(props){
    let user = props.user;
    return(
        <Row>
            <Col  xs={12} className={style.post__text}>
                В данный момент у вас нет объявлений
            </Col>
            <Col  xs={12} className={style.post__add}>
                <PostAdd user={user}/>
            </Col>
        </Row>   
    );
}