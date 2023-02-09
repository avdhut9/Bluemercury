import { Box, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
let breakpoints1={
    base:"column",
    sm: "column",
    md: "column",
    lg: "row",
    xl: "row",
    '2xl': "row",
  }
export default function Cart(){
    let token=JSON.parse(localStorage.getItem("token"))
    const[state,setstate]=useState({});
    console.log(state)
    useEffect(()=>{
getdata()
    },[])
    async function getdata(){
        try{
            const res=await axios({
                method:'post',
                url:'https://avdhutblumercury.onrender.com/user/cartitems',
                data: {
                  user:token.userid,
               },
                headers:{
                     token:token.token
                }
              });
         const data=res.data
         if(data){
            setstate({...data})
         }
        }catch(e){
console.log(e.message)
        }
    }
    async function changeqty(val,id){
try{
    const res=await axios({
        method:'patch',
        url:`https://avdhutblumercury.onrender.com/user/productqty/${id}`,
        data: {
          user:token.userid,
          qty:val
         },
        headers:{
             token:token.token
        }
      });
      const data=res.data;
      console.log(data)
  getdata()
}catch(e){
console.log(e.message)
}
    }
    function total(){
let sum=0;
for(let i=0;i<=state?.cart?.length-1;i++){
    sum=sum+(state?.cart[i].price*state?.cart[i].qty)
};
return sum
    }
    return(
        <Box pt="100px" pb="100px" m="auto" w="80%" fontSize="16px" color="rgb(114,127,148)">

{state?.cart?.map((ele)=>
<Box display="flex" alignItems="center" gap="20px" justifyContent="space-around" p="10px" border='1px' borderColor='gray.200' color="rgb(114,127,148)" flexDirection={breakpoints1} >
<Image w="100px" src={ele?.image}/>
<Text w="200px" m="auto">{ele?.name}</Text>
<Text w="200px" >$ {ele?.price}</Text>
<Box m="auto" display="flex" gap="2px" alignItems="center"><Button size="sm" onClick={()=>changeqty(1,ele?._id)}>+</Button><Text>{ele?.qty}</Text><Button onClick={()=>changeqty(-1,ele?._id)} size="sm">-</Button></Box>
<Text w="200px">Total: $ {ele?.price*ele?.qty}</Text>
<Button size="sm">Remove</Button>
</Box>


)}
<Text textAlign="end" mt="20px" fontWeight="extrabold" fontSize={20}>Subtotal: $ {total()}</Text>
        </Box>
    )
}