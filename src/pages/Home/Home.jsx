import Header from "../../UI/Header/Header";
import CaruselWidget from "../../widgets/CaruselWidget/CaruselWidget";

import RelevanceProductWidget from "../../widgets/RelevanceProductWidget/RelevanceProductWidget";

export default function Home(props){
  return (
    <div>

      <Header/>

      <CaruselWidget/>
      home content

      <RelevanceProductWidget />
    </div>
  )
};
