import style from './DataList.module.sass';

export default function ButtonPlus(props) {
    let placeholder = props.placeholder;
    let styleName = props.styleName ?? null;

    let ListInput = props.ListInputName;
    let IdDataList = props.IdDataList;

    return (
        <>
            <input className={style.inputDataList + ' ' + "form-control" + ' ' + style[styleName]} list={ListInput} id="exampleDataList" placeholder={placeholder} />
            <datalist id={IdDataList} >
                <option  value={"МАКСМ РАБОТАЙ" + " " + IdDataList} />
                <option  value={"МАКСМ РАБОТАЙ" + " " + IdDataList} />
                <option  value={"МАКСМ РАБОТАЙ" + " " + IdDataList} />
                <option  value={"МАКСМ РАБОТАЙ" + " " + IdDataList} />
                <option  value={"МАКСМ РАБОТАЙ" + " " + IdDataList} />
            </datalist>
        </>
    )
}
