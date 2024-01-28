import { useEffect } from "react";
import Header from "../../UI/Header/Header";
import FormSign from "../../components/FormSign/FormSign";
import { useNavigate } from "react-router-dom";

export default function Sign(props){
  const navigate = useNavigate();

  useEffect(()=>{
    
    const my_token = localStorage.getItem("my_token");
    if(my_token){
      navigate('/my')
    }
  }, []);

    return (
      <div>
  
        <Header/>
        <FormSign />

      </div>
    )
  };
  