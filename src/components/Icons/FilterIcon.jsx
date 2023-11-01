import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

library.add(faFilter);

export function FilterIcon(){
return (        
  <FontAwesomeIcon icon={faFilter} />
)};