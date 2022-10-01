import { Box, Image } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useState } from "react";
const data=[{
image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/files/fall-makeup-edit-hero-des_2000x.jpg?v=1663186054%201300w",

},{
    image:"https:cdn.shopify.com/s/files/1/0283/0185/2747/files/routines-romantic-rendezvous-hero-des_2000x.jpg?v=1663616571 1300w",

},{
    image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hhm-our-brands-hp-hero-poster_2000x.jpg?v=1663273340 1600w"
}]
export default function Sliding(){
   const[count,setcount]=useState(0)
   const ref=useRef(null)
   useEffect(()=>{

ref.current=setInterval(()=>{
 
    
setcount((pre)=>{
   
    console.log(pre)
if(pre==data.length-1){
    pre=0
}
else{
    pre=pre+1
}
return pre
})
return(()=>

clearInterval(ref.current)
)
},5000)
   },[])
    return(
        <Box pt={100}>
<Image src={data[count].image}/>
        </Box>
    )
}
