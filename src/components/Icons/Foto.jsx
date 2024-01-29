import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

library.add(faCamera);

export function Foto(){
return (        
  <FontAwesomeIcon icon={faCamera} size="2xl"/>
)};