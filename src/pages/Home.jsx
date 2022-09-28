import { Box, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Glowtime from "../HomeComponents/glowtime";
import Sliding from "../HomeComponents/sliding";

export default function Home(){
    return(
       <Container maxW="100%">
       
         <Sliding/>
         <Glowtime/>
       </Container>
    )
}