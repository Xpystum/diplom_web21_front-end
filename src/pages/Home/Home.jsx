import Header from "../../UI/Header/Header";
import CaruselWidget from "../../widgets/CaruselWidget/CaruselWidget";
import ReviewsOwnersWidget from "../../widgets/ReviewsOwnersWidget/ReviewsOwnersWidget";

import RelevanceProductWidget from "../../widgets/RelevanceProductWidget/RelevanceProductWidget";

export default function Home(props) {
    return (
        <div>

            <Header />
            <h1>Продажа авто в России</h1>
            <CaruselWidget />

            <ReviewsOwnersWidget />

        </div>
    )
};
