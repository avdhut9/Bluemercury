import { Badge, Box, Grid, GridItem, HStack, Image, Skeleton, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../components/pagination";
import { getdata, getdata1 } from "../redux/products/action";
import ProductPage from "./productpage";
import { StarIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";
const breakpoints = {
    base:"repeat(1,1fr)",
    sm: "repeat(2,1fr)",
    md: "repeat(3,1fr)",
    lg: "repeat(4,1fr)",
    xl: "repeat(4,1fr)",
    '2xl': "repeat(4,1fr)"
  }
export default function Shop(){
    const {data,isloading,iserror}=useSelector((state)=>state.data)
    console.log(isloading)
    let [searchParams, setSearchParams] = useSearchParams(1);
let x=searchParams.get("page")||1
console.log(x)
    
    const[page,setpage]=useState(x)
  console.log(page)
  
   
  
    
    const dispatch=useDispatch();

  useEffect(()=>{
setSearchParams({page})
  },[page])
  useEffect(()=>{
    dispatch(getdata1(page))
        },[page])
    function changepage(value){
        console.log(value)
        setpage(value)
    }
    return(isloading?<Grid pt="100px" w="90%" m="auto"  gap="50px"  justifyContent="space-around" templateColumns={breakpoints}>{Array(12).fill('')?.map((ele)=>
   <GridItem >
       <Skeleton
        height='300px'
        fadeDuration={4}
        startColor="rgb(114,147,146)"
      />
   </GridItem>
      )}</Grid>:
        <Box pt="100px" mb="100px" color="rgb(114,127,148)">
<Grid templateColumns={breakpoints} gap="50px" p="20px" justifyContent="center" >
    {data?.products?.map((ele)=>
    <GridItem  >
       <Box  m='auto' >
     <Link to={`/productpage/${ele._id}`}>   <Image w="250px" m="auto" src={ele.image}/></Link>
        <Text fontSize="16px">{ele.name}</Text>
        <Badge color="teal" fontSize="16px">$ {ele.price}</Badge>
        <Box display='flex' mt='2' justifyContent='center' gap="3px" >
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i <ele.reviews ? 'teal.500' : 'gray.300'}
              />
            ))}
          
        </Box>
      </Box>
    </GridItem>
    )}
</Grid>
<Pagination changepage={changepage} totalpages={data.totalpages} page={page}/>
        </Box>
    )}
    