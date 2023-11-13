import style from './DataList.module.sass';

export default function ButtonPlus(props) {
    return (
        <>
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
            <datalist className={style.datalist} id="datalistOptions" >
                <option className={style.option} value="San Francisco" />
                <option className={style.option} value="New York" />
                <option className={style.option} value="Seattle" />
                <option className={style.option} value="Los Angeles" />
                <option className={style.option} value="Chicago" />
            </datalist>
        </>
    )
}
