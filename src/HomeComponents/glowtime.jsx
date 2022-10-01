import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import GlowImage from "./glowtimecompo/image";
import Info from "./glowtimecompo/info";

export default function Glowtime(){
    return(
       <Container maxW="100%" bg="pink.50" mt={20} pb={50} >
        <VStack>
            <Text fontSize={30} color="gray.600" pt={10} letterSpacing={5}>GLOW TIME</Text >
            <Text color="gray.500" pb={10}>Nourishing, ultra-hydrating formulas for limitless looks.</Text>
        </VStack>
         <Box maxW="65%" mt={5} m="auto">
            <Flex gap={10} justifyContent="center" direction={{sm:"column",md:"column",lg:"row"}}>
            <GlowImage/>
            <Info/>
            </Flex>
        </Box>
       </Container>
    )
}