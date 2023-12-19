import Carousel from "nuka-carousel"
import Header from "../../UI/Header/Header"
import ReviewsBrandsList from "../../components/ReviewsBrandsList/ReviewsBrandsList"


export default function Reviews(props){

    return(
        <div className="ReviewWrap"/*{style.ReviewWrap}*/>
            <Header/>
            <ReviewsBrandsList/>
            <Carousel></Carousel>
        </div>
    )
} 