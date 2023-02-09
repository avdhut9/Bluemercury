import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}){
    const{login}=useSelector((state)=>state.auth)
    
    if(!login){
        return <Navigate to="/login"/>
    }
    return children
}