import style from './Curtain.module.sass';


export default function Curtain(props) {
    return (
        <div className={style.Curtain}>
            <div className={style.SectionLeft}></div>
            <div className={style.SectionRight}></div>
        </div>
    )
};
