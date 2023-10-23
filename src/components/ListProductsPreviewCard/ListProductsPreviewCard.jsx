import style from './ListProductsPreviewCard.module.sass';

import ProductPreviewCard from "../ProductPreviewCard/ProductPreviewCard";

export default function ListProductsPreviewCard(props) {
    return (
        <div className={style.ListProductsPreviewCard}>

            <ProductPreviewCard />

        </div>
    )
};
