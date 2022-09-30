import { Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
const breakouts={
    sm:"16px",
    md:"18px",
    lg:"20px",
    base:"12px"
}
const breakout1={
    sm:"16px",
    md:"16px",
    lg:"18px",
    base:"12px"
}
export default function Three(){
    return(
       <Container maxW="95%">
         <Flex gap="20px">
            <VStack w="100%">
                <Image src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/samples-content_block_705x705.jpg?v=1614296349"/>
                <Text color="rgb(18,40,76)"  letterSpacing={2} fontSize={breakouts}>FREE GIFTS WITH PURCHASE</Text>
                <Text color="rgb(18,40,76)"  textAlign="center" w="85%" fontSize={breakout1}>Stock up on all your favorite brands, then try something new on us</Text>
            </VStack>
            <VStack  w="100%">
                <Image src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/store_events_navigation_705x705.jpg?v=1661983491"/>
                <Text color="rgb(18,40,76)"  letterSpacing={2} fontSize={breakouts}>FREE GIFTS WITH PURCHASE</Text>
                <Text color="rgb(18,40,76)"  textAlign="center" w="85%" fontSize={breakout1}>Stock up on all your favorite brands, then try something new on us</Text>
            </VStack>
            <VStack  w="100%">
                <Image src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/spa_menu_photo_705x705.jpg?v=1628018315"/>
                <Text color="rgb(18,40,76)"  letterSpacing={2} fontSize={breakouts}>FREE GIFTS WITH PURCHASE</Text>
                <Text color="rgb(18,40,76)"  textAlign="center" w="85%" fontSize={breakout1}>Stock up on all your favorite brands, then try something new on us</Text>
            </VStack>
        </Flex>
       </Container>
    )
}