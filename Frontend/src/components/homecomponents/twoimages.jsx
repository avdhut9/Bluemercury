import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
let breakpoints3={
    sm: "center",
    md: "center",
    lg: "start",
    xl: "start",
    '2xl': "start",
  }
  let breakpoints1={
    base:"column",
    sm: "column",
    md: "column",
    lg: "row",
    xl: "row",
    '2xl': "row",
  }
export default function Twoimages(){
    return(
        <Box display="flex" gap="50px" w="90%" m="auto" mt="100px" mb="100px" flexDirection={breakpoints1} justifyContent="center">
            <Box color="rgb(18,40,76)" >
                <Image src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Vitablast_C_Side_by_Side.jpg?v=1675268804&width=832"/>
                <Stack  textAlign="start">
                    <Text fontSize={25} letterSpacing="2px">An advanced serum treatment</Text>
                    <Text>Reinforce the skin’s natural barrier to help protect against environmental stressors</Text>
                    <Text  fontWeight="bold" fontSize={16}><Link to="/shop">SHOP NOW</Link></Text>
                </Stack>
            </Box>
            <Box color="rgb(18,40,76)">
                <Image src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Tools_Side_by_Side.jpg?v=1675269228&width=832"/>
                <Stack  textAlign="start">
                    <Text fontSize={25} letterSpacing="2px">An advanced serum treatment</Text>
                    <Text>Reinforce the skin’s natural barrier to help protect against environmental stressors</Text>
                    <Text fontWeight="bold" fontSize={16}><Link to="/shop">SHOP NOW</Link></Text>
                </Stack>
            </Box>
        </Box>
    )
}