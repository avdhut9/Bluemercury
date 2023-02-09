import{loading,error,success,success1,success2} from "./type";
import axios from "axios"
export const load={type:loading};
export const err={type:error};
export const succ=(payload)=>{
    return{type:success,payload:payload}
}
export const succ1=(payload)=>{
    return{type:success1,payload:payload}
}
export const succ2=(payload)=>{
    return{type:success2,payload:payload}
}


export const getdata=(page=1,limit=12)=>async(dispatch)=>{
    console.log("ok")
try{
    dispatch(load)
const res=await axios.get(`https://avdhutblumercury.onrender.com/products?page=${page}&limit=${limit}`)
const data=res.data;


if(page==1){
    dispatch(succ(data))
}else if(page==2){
    dispatch(succ1(data))
}else if(page==3){
    dispatch(succ2(data))
}
return data
    }catch(e){
 dispatch(err)
 return e.message
    }
}
export const getdata1=(page=1,limit=12)=>async(dispatch)=>{
    console.log("ok")
try{
    dispatch(load)
const res=await axios.get(`https://avdhutblumercury.onrender.com/products?page=${page}&limit=${limit}`)
const data=res.data;

dispatch(succ(data))

return data
    }catch(e){
 dispatch(err)
 return e.message
    }
}