import { Box, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Combine from "../HomeComponents/combine";
import Glowtime from "../HomeComponents/glowtime";
import Sliding from "../HomeComponents/sliding";
import Three from "../HomeComponents/threeitems";
import { Slidee } from "../Slidercarosal";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ButtonSlider from "../buttonslider";
import ButtonSlider1 from "../buttonslider1";
export default function Home(){
  
    return(
       <Container maxW="container.2xl" p="0px" mb={10}>
       
       <Slidee/>
       <ButtonSlider1/>
         <Glowtime/>
     <Combine/>
     <Three/>
    <ButtonSlider/>
       </Container>
       
    )
}