import { createContext, useState } from "react";

export const RegisterContext=createContext()
export default function RegisterContextProvider({children}){
    const[state,setstate]=useState(false)
    function check(){
setstate(true)
    }
    return(
<RegisterContext.Provider value={{state,check}}>
    {children}
</RegisterContext.Provider>
    )
}