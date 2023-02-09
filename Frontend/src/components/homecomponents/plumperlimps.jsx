import { Box, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const breakpoints = {
  base:"repeat(1,1fr)",
    sm: "repeat(1,1fr)",
    md: "repeat(1,1fr)",
    lg: "repeat(2,1fr)",
    xl: "repeat(2,1fr)",
    '2xl': "repeat(2,1fr)"
  }
 let breakpoints1={
  base:"center",
    sm: "center",
    md: "center",
    lg: "flex-start",
    xl: "flex-start",
    '2xl': "flex-start",
  }
  let breakpoints3={
    base:"center",
    sm: "center",
    md: "center",
    lg: "start",
    xl: "start",
    '2xl': "start",
  }
export default function Plumperlips({props}){
   const{img,text1,text2,text3,flex}=props
    return(
        <Grid w="85%" m="auto"  templateColumns={breakpoints} justifyContent={breakpoints1} mt="100px" alignItems="center" mb="50px"  >
<GridItem>
<Image m="auto"src={img}  />
</GridItem>
<GridItem ><Box textAlign={breakpoints3} p="50px" color="rgb(18,40,76)">
<Text p="5px" fontWeight="medium" fontSize="25px" letterSpacing="2px">{text1}</Text>
<Text  p="5px" fontSize="18px">{text2}</Text>
<Text p="5px" fontWeight="bold" fontSize="14px"><Link to="/shop">{text3}</Link></Text>
</Box></GridItem>
        </Grid>
    )
}