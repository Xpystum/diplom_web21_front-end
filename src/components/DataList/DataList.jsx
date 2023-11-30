import style from './DataList.module.sass';

export default function ButtonPlus(props) {
    let placeholder = props.placeholder;
    let styleNameInput = props.styleNameInput ?? null;
    let styleNameWrapp = props.styleNameWrapp ?? null;

    let ListInput = props.ListInputName ?? "";
    let IdDataList = props.IdDataList ?? "";

    let arrItem = props.arrItem ?? [
        <option  value={"МАКСМ РАБОТАЙ"} />,
        <option  value={"МАКСМ РАБОТАЙ"} />,
        <option  value={"МАКСМ РАБОТАЙ"} />,
        <option  value={"МАКСМ РАБОТАЙ"} />,
        <option  value={"МАКСМ РАБОТАЙ"} />,
    ]

    return (
        <div className={style.wrapp_dataList + ((styleNameWrapp)? ' ' + style[styleNameWrapp] : "") }>
            <input className={style.inputDataList + ' ' + "form-control" +((styleNameInput)? (' ' + style[styleNameInput]) : "")} list={ListInput} id="exampleDataList" placeholder={placeholder} />
            <datalist id={IdDataList} >
                <option  value={"МАКСМ РАБОТАЙ"} />
                <option  value={"МАКСМ РАБОТАЙ"} />
                <option  value={"МАКСМ РАБОТАЙ"} />
                <option  value={"МАКСМ РАБОТАЙ"} />
                <option  value={"МАКСМ РАБОТАЙ"} />
            </datalist>
        </div>
    )
}
