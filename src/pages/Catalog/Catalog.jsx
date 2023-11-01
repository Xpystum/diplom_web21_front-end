import Button from "../../UI/Button/Button"


export default function Catalog(){
    function redirectToAdvancedSearch(){
        window.location.href ='/catalog/advanced-search/'
    }
    return (
      <div>
        <Button method={redirectToAdvancedSearch} name_class='AdvancedSearch' name='Расширенный поиск' type="button"/>
      </div>
    )
  };