import style from './LabelsProduct.module.sass';


export default function LabelsProduct(props) {
  let car = props.car
  return (
    <div className={style.LabelsProduct}>
      
        {(car.mileage <= 1000)?
        <div className={style.Condition}>
          <span>
            новый
          </span>
        </div>
        :
        ""}
      {/* Времяночка нет данных о собственике зацепился за положение руля */}
      {(car.steering_wheel == "правый")?
      <div className={style.Owner}>
        <img src="https://c.rdrom.ru/js/bundles/media/owner.b106d5d924e94d3fe555.svg" alt="" width="17" height="16" />
        <span>
          от собственника
        </span>
      </div>
      :
      ""
    }

    </div>
  )
};
