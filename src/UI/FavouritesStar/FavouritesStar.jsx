import style from './FavouritesStar.module.sass';

export default function FavouritesStar(props) {
  return (
    <div className={style.FavouritesStar}>

      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.606.973a1.485 1.485 0 0 1 2.788 0l3.043 7.653c.217.547.709.92 1.273.968l7.9.662c1.337.112 1.88 1.86.86 2.773l-6.018 5.393c-.43.385-.618.989-.486 1.565l1.838 8.063c.312 1.366-1.109 2.446-2.255 1.714l-6.762-4.321a1.453 1.453 0 0 0-1.574 0l-6.763 4.32c-1.145.733-2.566-.347-2.255-1.713l1.84-8.063a1.623 1.623 0 0 0-.487-1.565L.53 13.029c-1.02-.914-.477-2.66.86-2.773l7.9-.662a1.517 1.517 0 0 0 1.273-.968L13.606.973Z" fill="currentColor" />
      </svg>

    </div>
  )
};
