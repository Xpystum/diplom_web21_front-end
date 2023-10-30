import Header from "../../UI/Header/Header";
import CaruselWidget from "../../widgets/CaruselWidget/CaruselWidget";
import ReviewsOwnersWidget from "../../widgets/ReviewsOwnersWidget/ReviewsOwnersWidget";

export default function Home(props){
  return (
    <div>
      <Header/>

      <CaruselWidget/>
      
      <ReviewsOwnersWidget/>
      home content
    </div>
  )
};
