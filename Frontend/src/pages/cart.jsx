import { Box, Button, Grid, GridItem, Image, Skeleton, Text } from "@chakra-ui/react";
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
    
    const[loading,setloading]=useState(false)
    console.log(state)
    useEffect(()=>{
getdata(true)
    },[])
    async function getdata(def=false){
       if(def==false){
        setloading(false)
       }else{
        setloading(true)
       }
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
         setloading(false)
         if(data){
            setstate({...data})
         }
        }catch(e){
console.log(e.message)
        }
    }
    async function changeqty(val,id){
        setloading(false)
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
  getdata(false)
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
    return(loading?<Box pt="100px"><Text mb="50px" textAlign="center" color="rgb(114,127,148)">please Wait....</Text><Grid  w="90%" m="auto"  gap="20px"  justifyContent="space-around" templateColumns="repeat(1,1fr)">{Array(12).fill('')?.map((ele)=>
    <GridItem >
        <Skeleton
         height='50px'
         fadeDuration={4}
         startColor="gray.50"
       />
    </GridItem>
       )}</Grid></Box>:
        <Box pt="100px" pb="100px" m="auto" w="80%" fontSize="16px" color="rgb(114,127,148)">

{state?.cart?.map((ele)=>
<Box display="flex" alignItems="center" gap="20px" justifyContent="space-around" p="10px" border='1px' borderColor='gray.200' color="rgb(114,127,148)" flexDirection={breakpoints1} >
<Image w="100px" src={ele?.image}/>
<Text w="200px" m="auto">{ele?.name}</Text>
<Text w="200px" >$ {ele?.price}</Text>
<Box m="auto" display="flex" gap="2px" alignItems="center"><Button isDisabled={ele.qty==1} size="sm" onClick={()=>changeqty(-1,ele?._id)}>-</Button><Text>{ele?.qty}</Text><Button onClick={()=>changeqty(1,ele?._id)} size="sm" >+</Button></Box>
<Text w="200px">Total: $ {ele?.price*ele?.qty}</Text>
<Button size="sm">Remove</Button>
</Box>


)}
<Text textAlign="end" mt="20px" fontWeight="extrabold" fontSize={20}>Subtotal: $ {total()}</Text>
        </Box>
    )
}