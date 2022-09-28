import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import GlowImage from "./glowtimecompo/image";
import Info from "./glowtimecompo/info";

export default function Glowtime(){
    return(
       <Container maxW="100%" bg="pink.50" mt={20}>
        <VStack>
            <Text fontSize={30} color="gray.600" letterSpacing={5}>GLOW TIME</Text >
            <Text color="gray.500" >Nourishing, ultra-hydrating formulas for limitless looks.</Text>
        </VStack>
         <Container maxW="65%" mt={5}>
            <Flex gap={10} justifyContent="center">
            <GlowImage/>
            <Info/>
            </Flex>
        </Container>
       </Container>
    )
}