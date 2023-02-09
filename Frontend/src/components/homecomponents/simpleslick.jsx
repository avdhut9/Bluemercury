import { Box, Button, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import {FcNext,FcPrevious} from 'react-icons/fc'
import { getdata } from "../../redux/products/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box w="100%" display="flex" justifyContent="flex-end"  position="absolute" top="30%" zIndex={10}>
        <FcNext onClick={onClick} cursor="pointer" zIndex={10} fontSize="50px" />
    </Box>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
   <Box display="flex" justifyContent="flex-start" position="absolute" top="30%" zIndex={50}>
    <FcPrevious onClick={onClick} cursor="pointer" zIndex={50} fontSize="50px" />
   </Box>
  );
}

export default function Slickslider({name,page,limit}) {

 const dispatch=useDispatch();
 const{data,data1,data2,isloading,iserror}=useSelector((state)=>state.data)
 
useEffect(()=>{
if(!data?.products||!data1?.products||!data2?.products){
  dispatch(getdata(page,limit))
}
},[])

    const settings = {
      speed:1500,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll:4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },{
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
      ]
    };
   return (
    isloading?<Spinner/>:iserror?<Spinner/>:<Box  w="90%" m="auto" >
       <Text fontSize="30px" letterSpacing="3px" color="gray" mb='50px' textAlign="center">{name}
</Text>
    <Slider {...settings}>
      {(page==1?data:page==2?data1:data2).products?.map((ele)=>
      <Box  textAlign="center" >
      <Link to={`/productpage/${ele._id}`}>  <Image w="250px" m="auto" src={ele.image}/></Link>
        <Text fontSize="16px">{ele.name}</Text>
      
        <Text fontSize="16px">$ {ele.price}</Text>
      </Box>
      )}
    </Slider>
  </Box>
    );
  }
