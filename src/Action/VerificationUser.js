import { useDispatch, useSelector } from "react-redux";
import { authToken } from "../redux/dataState";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function VerificationUser(){
    let dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(function(){
        
        
        if(!localStorage.getItem("my_token")){
            navigate('/sign');
        }
        dispatch(authToken(localStorage.getItem("my_token")));
        console.log(1);
    },[]);
}