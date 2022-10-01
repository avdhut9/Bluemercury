import { createContext, useReducer } from "react";

export const Cartcontext=createContext()

function reducer(state,action){
switch(action.type){
    case "add":return([...state,action.payload]);
    case "remove":return(action.payload);
    case "increase":return(action.payload)
    default:
        return(state)
}
}

export function Cart({children}){
    const[state,dispatch]=useReducer(reducer,[])
    return(
        <Cartcontext.Provider value={{state,dispatch}}>
{children}
        </Cartcontext.Provider>
    )
}