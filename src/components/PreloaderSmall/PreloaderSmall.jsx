import style from './PreloaderSmall.module.sass';


export default function PreloaderSmall(props) {
  return (
    <div className={style.PreloaderSmall}>
      <span className={style.LoaderElement}></span>
      <span className={style.LoaderElement}></span>
      <span className={style.LoaderElement}></span>
    </div>
  )
};
