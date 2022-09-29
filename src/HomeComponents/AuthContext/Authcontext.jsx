import { createContext, useState } from "react";

export const AuthContext=createContext()
export function AuthContextProvider({children}){
    const[state,dispatch]=useState({isAuth:false,token:null})
    function login(value){
        dispatch(
            {
                ...state,
                isAuth:true,
                token:value
            }
        )
    }
    function logout(){
        dispatch({
            ...state,
            isAuth:false,
            token:null
        })
    }
return(
    <AuthContext.Provider value={{state,login,logout}}>
        {children}
    </AuthContext.Provider>
)
}