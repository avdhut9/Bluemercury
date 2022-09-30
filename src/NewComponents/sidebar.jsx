import { Box, Select, Text, MenuOptionGroup, Menu, MenuButton, Portal, MenuList, MenuItem, Grid, GridItem } from "@chakra-ui/react";
const breakouts={
    base:"8px",
    sm:"12px",
    md:"14px",
    lg:"16px"
}
export default function Sidebar(){
    function ok(){
        alert("ok")
    }
    return(
        <Box w="300px" color="rgb(114,127,148)" pl={10} fontSize={breakouts} >

    <Text> New Arrivals Category</Text>
    <Text>Bath & Baby</Text>
    <Text>Fragrance</Text>
<Text>Hair Care</Text>
<Text>MakeUp</Text>
<Text>Skin Care</Text>
<Text>Tools & Accessories</Text>
<Box pt={10} pb={5}>
<Text>Filter New Arrivals By</Text>
</Box>
<Box pb={5}><Menu>
  <MenuButton>Type</MenuButton>
  <Portal>
    <MenuList >
      <Grid 
       templateColumns="repeat(5,1fr)">
   
 <GridItem colSpan={5}><MenuItem >Anti Aging Devices</MenuItem></GridItem>   
 
 <GridItem colSpan={5}><MenuItem>Bath Oil</MenuItem></GridItem>  
  <GridItem colSpan={5}>    <MenuItem >Blush</MenuItem></GridItem>
      </Grid>
      
    </MenuList>
  </Portal>
</Menu></Box>

<Box pb={5}>
<Menu>
  <MenuButton>Brand</MenuButton>
  <Portal>
    <MenuList >
      <Grid 
       templateColumns="repeat(5,1fr)">
   
 <GridItem colSpan={5}><MenuItem >Alo</MenuItem></GridItem>   
 
 <GridItem colSpan={5}><MenuItem>Blue Mercury</MenuItem></GridItem>  
  <GridItem colSpan={5}>    <MenuItem >Bobby Brown</MenuItem></GridItem>
      </Grid>
      
    </MenuList>
  </Portal>
</Menu>
</Box>

<Box pb={5}>
<Menu>
  <MenuButton>Benefit</MenuButton>
  <Portal>
    <MenuList >
      <Grid 
       templateColumns="repeat(5,1fr)">
   
 <GridItem colSpan={5}><MenuItem >Active Lifestyle</MenuItem></GridItem>   
 
 <GridItem colSpan={5}><MenuItem>Anti Aging</MenuItem></GridItem>  
  <GridItem colSpan={5}>    <MenuItem >Anti Pollution</MenuItem></GridItem>
      </Grid>
      
    </MenuList>
  </Portal>
</Menu>
</Box>

<Box pb={5}><Menu>
  <MenuButton>Concern</MenuButton>
  <Portal>
    <MenuList >
      <Grid 
       templateColumns="repeat(5,1fr)">
   
 <GridItem colSpan={5}><MenuItem >Acne</MenuItem></GridItem>   
 
 <GridItem colSpan={5}><MenuItem>Bath Oil</MenuItem></GridItem>  
  <GridItem colSpan={5}>    <MenuItem >Circulation</MenuItem></GridItem>
      </Grid>
      
    </MenuList>
  </Portal>
</Menu></Box>

        </Box>
    )
}