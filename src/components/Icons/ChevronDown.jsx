import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown);

export function ChevronDown(){
return(
    <FontAwesomeIcon icon={faChevronDown} />
)};