import { Box, Flex, Image, Select, Spacer,Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {

  return (
   <Box p={5} bg="white" zIndex={5} position="fixed" w="100%" pb={7} >
     <Flex>
      <Box  w="15%"><Link to="/"><Image w="100%" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x@2x.png?v=1648743182"/></Link></Box>
      <Spacer/>
    <Box >  <Link to="/new"><Text pr={5}  color="rgb(114,127,148)" fontSize={20}>New</Text></Link></Box>
      {/* <Link to="/"><Text pr={5} color="rgb(18,40,76)" fontSize={20}>Home</Text></Link> */}
      <Link to="/"><Text pr={5}  color="rgb(114,127,148)" fontSize={20}>Brands</Text></Link>
      <Link to="/login"><Text pr={5}  color="rgb(114,127,148)" fontSize={20}>Login</Text></Link>
      <Link to="/wishlist"><Text pr={5} c color="rgb(114,127,148)" fontSize={20}>Wishlist</Text></Link>
      <Link to="/cart"><Text pr={5}  color="rgb(114,127,148)" fontSize={20}>Cart</Text></Link>
    </Flex>
   </Box>
  )
};

export default Navbar;
