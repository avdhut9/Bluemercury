import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, ButtonGroup, Container, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import {StarIcon} from "@chakra-ui/icons"
import Slider from "react-slick"

const data=[{
    image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-solarflare-670959115386-1_235x235_crop_center.jpg?v=1658817362",
    title:"JANE IREDALE",
des:"PurePressed® Eye Shadow Palette"
},
{
    image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-sheer-670959116451-1_235x235_crop_center.jpg?v=1660185013",
    title:"JANE IREDALE",
des:"PurePressed® Eye Shadow Palette"
},
{
    image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-smolder-670959117373-1_235x235_crop_center.jpg?v=1662653102",
    title:"JANE IREDALE",
des:"PurePressed® Eye Shadow Palette"
}
]

export default function Info(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        className: "center",
      
    
  
     
     
    }
    const breakouts={
        base:"300px",
        sm:"300px",
        md:"400px",
        lg:"600px"
    }
   return(
<Container w={breakouts}  bg="white" textAlign="center" color="rgb(114,127,148)" p={5}  >
    <Image m="auto" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-30ml-840732118327-1_235x235_crop_center.jpg?v=1663175595"/>
    <Text>NEST NEW YORK</Text>
    <Text m="auto" textAlign="center" w="60%">Indian Jasmine Perfume Oil
From $35</Text>
<VStack >
<HStack >
{[1,2,3,4,5].map((ele,i)=>
<StarIcon  color={i<4?"teal":"gray"}/>
)}
</HStack>
</VStack>
</Container>
   )
   
}
