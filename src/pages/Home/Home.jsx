import Header from "../../UI/Header/Header";
import CaruselWidget from "../../widgets/CaruselWidget/CaruselWidget";
import ReviewsOwnersWidget from "../../widgets/ReviewsOwnersWidget/ReviewsOwnersWidget";

import Filter from "../../components/Filter/Filter";

export default function Home(props) {
    return (
        <div>

            <Header />

            <Filter />

            <CaruselWidget />

            <ReviewsOwnersWidget />

        </div>
    )
};
