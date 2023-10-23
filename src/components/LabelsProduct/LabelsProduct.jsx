import style from './LabelsProduct.module.sass';

export default function LabelsProduct(props) {
    return (
        <div className={style.LabelsProduct}>
            <div className={style.Condition}>
                <span>
                    новый
                </span>
            </div>

            <div className={style.Owner}>
                <img src="https://c.rdrom.ru/js/bundles/media/owner.b106d5d924e94d3fe555.svg" alt="" width="17" height="16" />
                <span>
                    от собственника
                </span>
            </div>

        </div>
    )
};
