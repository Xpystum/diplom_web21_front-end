import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronUp);

export function ChevronUp(){
return(
    <FontAwesomeIcon icon={faChevronUp} />
)};