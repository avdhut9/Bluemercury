import { json } from "react-router-dom"
import {log,signup,logout}from "./type"
var token = JSON.parse(localStorage.getItem("token"));

const initialstate={
    login:!!token,
    issignup:false
   
}

export default function reducer(state=initialstate,action){
switch(action.type){
    case log:
        return{
            ...state,login:true
        }
        case signup:
            return{
                ...state,issignup:true
            }
            case logout:return{
                ...state,login:false
            }
  default:
        return state
}
}