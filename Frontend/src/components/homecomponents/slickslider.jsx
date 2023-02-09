import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, Image, useBreakpointValue } from "@chakra-ui/react";



export default function Slickslider() {
  const pc = useBreakpointValue({ base: false,lg: true, md:false,sm:false})
    const settings = {
       dots: true,
      infinite: true,
      speed:3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000
    
    };
    return (
      <Box mb="100px" pt="52px">
      <Slider {...settings}>
        <Box>
 <Image src={pc?"https://cdn.shopify.com/s/files/1/0283/0185/2747/files/wide-awake-eyes-hero-des_1600x.jpg?v=1674755113":"https://cdn.shopify.com/s/files/1/0283/0185/2747/files/wide-awake-eyes-hero-mob_900x.jpg?v=1674755112"} />
</Box >
<Box >
<Image  src={pc?"https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bhm-2023-hp-hero-2_1600x.jpg?v=1675111193":"https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bhm-2023-hp-hero-mob-2.jpg?v=1675111193&width=900"}/>
</Box>
<Box >
<Image  src={pc?"https://cdn.shopify.com/s/files/1/0283/0185/2747/files/romantic-rendesvouz-hero-des_2bec8e25-a7cf-4496-b299-b6808566be42_1600x.jpg?v=1674755395":"https://cdn.shopify.com/s/files/1/0283/0185/2747/files/romantic-rendesvouz-hero-mob_900x.jpg?v=1674755395"}/>
</Box>
        </Slider>
      </Box>
    );
  }



