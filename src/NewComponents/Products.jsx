import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const breakouts={
    base:"repeat(1,1fr)",
    sm:"repeat(2,1fr)",
    md:"repeat(3,1fr)",
    lg:"repeat(4,1fr)"
}

export default function Products({data}){
    return(
        <Box w="80%"   color="rgb(114,127,148)">
<Grid templateColumns={breakouts} gap={10}>
    {data.map((ele,i)=>
  <GridItem>
   <VStack textAlign="center"> 
    <Link to={`/products/singleproduct/${ele.id}`}> <Image src={ele.image}/></Link>
      <Text>{ele.name}</Text>
      <Text>{ele.des}</Text>
      <Badge>{`$ ${ele.price}`}</Badge>
      <HStack>
        {[1,2,3,4,5].map((item,i)=>
      
        <StarIcon color={i<ele.rating?"teal.500":"gray.300"}/>
        )}
      </HStack>
      </VStack>
  </GridItem>
    )}
</Grid>
        </Box>
    )
}