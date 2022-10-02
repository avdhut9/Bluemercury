import { Box, Container, HStack, Image, VStack } from "@chakra-ui/react";
const breakouts={
    base:"300px",
    sm:"250px",
    md:"300px",
    lg:"350px"
}
export default function GlowImage(){
    return(
        <Container w="100%">
            <Box  m="auto" w={breakouts} >
                <Image w="100%" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Nest_Indian_Jasmine_Shop_the_Collection_1200x1200_253904f9-535b-40f7-a1e2-e13a030f7a03_600x.progressive.jpg?v=1664387674"/>
                </Box>
        
        </Container>
    )
}