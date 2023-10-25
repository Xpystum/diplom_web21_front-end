import style from './PreloaderStartPage.module.sass';


export default function PreloaderStartPage(props) {
  return (
    <div className={style.PreloaderStartPage}>
      <div className={style.Loader}>
        <div className={style.Spiner}></div>
        <div className={style.Text}>
          <span data-letter-name="L" className={style.LettersLoading}>
            L
          </span>
          <span data-letter-name="O" className={style.LettersLoading}>
            O
          </span>
          <span data-letter-name="A" className={style.LettersLoading}>
            A
          </span>
          <span data-letter-name="D" className={style.LettersLoading}>
            D
          </span>
          <span data-letter-name="I" className={style.LettersLoading}>
            I
          </span>
          <span data-letter-name="N" className={style.LettersLoading}>
            N
          </span>
          <span data-letter-name="G" className={style.LettersLoading}>
            G
          </span>
        </div>
      </div>

      <div className={style.SectionLeft}></div>
      <div className={style.SectionRight}></div>
    </div>
  )
};
