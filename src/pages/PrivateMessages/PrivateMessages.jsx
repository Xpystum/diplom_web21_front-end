
import style from "./PrivateMessages.module.sass";
import PrivateMessagesUser from "../../widgets/Chat/PrivateMessagesUser/PrivateMessagesUser";
import Header from "../../UI/Header/Header";



export default function PrivateMessages(props){
    return (
       <>
            <Header />
            <PrivateMessagesUser />
       </>
    )
};