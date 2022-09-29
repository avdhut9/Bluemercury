import { Box, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Combine from "../HomeComponents/combine";
import Glowtime from "../HomeComponents/glowtime";
import Sliding from "../HomeComponents/sliding";
import Three from "../HomeComponents/threeitems";

export default function Home(){
    return(
       <Container maxW="container.2xl" p="0px" mb={10}>
       
         <Sliding/>
         <Glowtime/>
     <Combine/>
     <Three/>
       </Container>
       
    )
}