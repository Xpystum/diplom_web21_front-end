import Chat from "./Chat/Chat";
import style from "./ChatMainComponent.module.sass";

export default function ChatMainComponent(){
    return (
      <div className={style.ExternalWrapp_chatMainComponent}>
        <div className={style.Internal_chatMainComponent}>
          <Chat />
        </div>
      </div>
    )
  };
  