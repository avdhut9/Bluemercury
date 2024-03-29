import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Grid, GridItem, Heading, Image, Skeleton, Spinner, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {logo} from "../redux/auth/action"
let breakpoints1={
    base:"column",
    sm: "column",
    md: "row",
    lg: "row",
    xl: "row",
    '2xl': "row",
  }
  const breakpoints = {
    base:"repeat(1,1fr)",
    sm: "repeat(1,1fr)",
    md: "repeat(1,1fr)",
    lg: "repeat(2,1fr)",
    xl: "repeat(2,1fr)",
    '2xl': "repeat(2,1fr)"
  }
export default function ProductPage(){
    const token=JSON.parse(localStorage.getItem("token"))
    const {id}=useParams();
    console.log(id)
    const[state,setstate]=useState({})
    const[loading,setloading]=useState(false)
    const toast = useToast()
    const dispatch=useDispatch()
   useEffect(()=>{
getdata()
   },[])
   async function getdata(){
    setloading(true)
try{
const res=await axios.get(`https://avdhutblumercury.onrender.com/products/${id}`);
const data=res.data;
setstate({...data})
setloading(false)
}catch(e){
alert("something went wrong")
}
   }
   console.log(state)
   async function checkforproductincart(){
   
    try{
const res=await axios({
    method:'post',
    url:`https://avdhutblumercury.onrender.com/user/productid/${id}`,
    data: {
      user:token.userid,
      },
    headers:{
         token:token.token
    }
  });
 
  console.log(res.data)
  if(res.data=="unauthorized"){
    localStorage.removeItem("token")
    dispatch(logo)
   
 }
  else if(res.data=="already in the cart"){
    toast({
        title: `${res.data}`,
         duration: 9000,
        isClosable: true,
        status: 'error',
      })
     
  }else{
    addtocart()
  }
    }catch(e){
console.log(e.message)
    }
   }
   async function addtocart(){
    console.log("ok")
  

try{
const res=await axios({
    method:'post',
    url:'https://avdhutblumercury.onrender.com/user/cart',
    data: {
      user:token.userid,
      cart:{productid:id}
    },
    headers:{
         token:token.token
    }
  });
 console.log(res.data)
 if(res.data=="unauthorized"){
    localStorage.removeItem("token");
    dispatch(logo)
 }
 toast({
    title:`product added successfully`,
    status: 'success',
     duration: 9000,
    isClosable: true,
  })
}catch(e){
    
console.log(e.message)
}
   }
    return(loading?<Grid pt="100px" mb="100px" w="60%" m="auto" gap="10px"  justifyContent="space-around" templateColumns={breakpoints}>{Array(2).fill('')?.map((ele)=>
    <GridItem w="300px" h="300px">
     <Skeleton
        height='300px'
        fadeDuration={4}
        bg='blue.500'
        color='white'
      />
    </GridItem>
       )}</Grid>:
        <Box bgColor="rgb(247,250,252)" pb="100px" display="flex" m="auto"  pt="150px" justifyContent="center" gap="50px" flexDirection={breakpoints1} alignItems="center" mb="100px" color="rgb(18,40,76)">
<Image  w="400px" src={state?.image}/>
<VStack    >
    <Heading color="rgb(114,127,148)" fontSize="40px">{state.name}</Heading>
    <Badge alignItems="flex-start" textAlign="start" mt="20px" fontSize="30px" colorScheme='purple' color="teal" mb="50px" >Price $ {state.price}</Badge>
    <Box display='flex' pt='10px'pb="10px" justifyContent='center' gap="3px" >
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i <state.reviews ? 'teal.500' : 'gray.300'}
              />
            ))}
          
        </Box>
    <Button onClick={()=>checkforproductincart()} display="block" mt="-20px" w="200px"  bgColor="rgb(18,40,76)" color="white">Add to Cart</Button>
  
</VStack>
        </Box>
    )
}