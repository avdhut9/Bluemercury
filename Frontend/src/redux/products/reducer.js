import {loading,error,success,success1,success2}from "./type"

const initialstate={
    isloading:false,
    iserror:false,
    data:{},
    data1:{},
    data2:{}
   
}

export default function productsreducer(state=initialstate,action){
switch(action.type){
    case loading:
        return{
            ...state,isloading:true
        }
        case error:
            return{
                ...state,isloading:false,iserror:true
            }
            case success:
                console.log("success")
                return{
                    ...state,isloading:false,iserror:false,data:{...action.payload}
                }
                case success1:
                console.log("success1")
                return{
                    ...state,isloading:false,iserror:false,data1:{...action.payload}
                }
                case success2:
                console.log("success2")
                return{
                    ...state,isloading:false,iserror:false,data2:{...action.payload}
                }
  default:
        return state
}
}