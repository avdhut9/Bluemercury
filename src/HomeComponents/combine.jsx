import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const breakouts={
    sm:"20px",
    md:"30px",
    lg:"30px"
}
const breakout1={
    sm:"15px",
    md:"20px",
    lg:"25px"
}
export default function Combine(){
    return(
        <Container maxW="90%" p={0}>
            <Flex gap="30px">
                <VStack w="100%" align="flex-start"><Image src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/LA_Holiday_SidebySide_1000x625_39833a0d-90bf-469b-891a-d999f340709b_640x.jpg?v=1664387328"/>
                <Text letterSpacing={3} color="rgb(18,40,76)" fontSize={breakouts}>These sets are a steal!</Text>
                <Text color="gray.500" letterSpacing={1} fontSize={breakout1}>Stock up on lipsticks, mascara and more </Text>
                <Text color="gray.500" letterSpacing={1} pt="-30px" fontSize={breakout1}>(for less!) with these limited-edition sets</Text>
                <Text  letterSpacing={3} color="rgb(18,40,76)" fontSize={breakout1}>SHOP LUNE+ASTER</Text>
                </VStack>
                <VStack w="100%" align="flex-start"><Image src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/eltamd_SidebySide_1000x625_0e0e002d-9432-494d-af5b-3eee1d07a210_640x.jpg?v=1664307480"/>
                <Text letterSpacing={3} color="rgb(18,40,76)" fontSize={breakouts}>Sensitive Skin Protection</Text>
                <Text color="gray.500" w="100%" letterSpacing={1} fontSize={breakout1}>Oil-free EltaMD UV Clear helps calm and protect sensitive skin types prone to discoloration and breakouts associated to acne and rosacea.</Text>
                <Text  letterSpacing={3} color="rgb(18,40,76)" fontSize={breakout1}>SHOP NOW</Text>
                </VStack>
                </Flex>
        </Container>
    )
}