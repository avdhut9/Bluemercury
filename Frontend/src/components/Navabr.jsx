import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    IconButton,
    Image,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Select,
    Spacer,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
    VStack,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { GoLocation } from 'react-icons/go';
import {AiOutlineHeart } from 'react-icons/ai';
import {FiSearch } from 'react-icons/fi';
import {CgProfile } from 'react-icons/cg';
import {BiShoppingBag} from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import{logi,logo} from "../redux/auth/action"
   const Navbar= () => {

    const pc = useBreakpointValue({ base: false, lg: true, md:false,sm:false})
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch=useDispatch()
    const {login}=useSelector((state)=>state.auth)
    const btnRef = React.useRef()
    function logout(){
      localStorage.removeItem("token");
dispatch(logo)
onClose()
    }
    return (
      
        <Box   borderColor='red' as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')} bgColor="white" height="50px" display="flex" justifyContent={{lg:"center"}} alignItems="center" position="fixed" zIndex={1000} w="100%"  >
       
        {pc ? (
                <Box textDecoration="none" textAlign="center" display="flex"  w="100%" color="rgb(114,127,148)" p="10px" >
              <Link to="/" m="auto" textDecoration="none">  <Image w="150px" h="35px" m="auto" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x@2x.png?v=1648743182"/></Link>
                <Spacer/>
                  <ButtonGroup  variant="link" display="flex" gap="10px" >
                  <Button variant="ghost"   _hover={{bgColor:"white"}}><Link textDecoration="none" to={`/shop`}>SHOP</Link></Button>
                  <Button variant="ghost"   _hover={{bgColor:"white"}}><Link textDecoration="none" to={`/new`}>NEW</Link></Button>
                  <Button variant="ghost"   _hover={{bgColor:"white"}}><Link textDecoration="none" to={`/brands`}>BRANDS</Link></Button>
                  
                  <Button variant="ghost"   _hover={{bgColor:"white"}}><Link textDecoration="none" to={`/explore`}>EXPLORE</Link></Button>
              
              
                  <Button variant="ghost"   _hover={{bgColor:"white"}}><Link textDecoration="none" to={`/events`}>EVENTS</Link></Button>
                  <Button variant="ghost"   _hover={{bgColor:"white"}}><Link textDecoration="none" to={`/new`}>BLUEWARDS</Link></Button>
                
                  <Button variant="ghost" _hover={{bgColor:"white"}}  textDecoration="none" ><Link textDecoration="none" to={`/routinereboot`}>ROUTINE REBOOT</Link></Button>

                 
                  </ButtonGroup>
                  <Spacer/>
                 <Box  m="auto" display="flex" gap="40px"> 
                
                
                 <Menu border="1px">
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} variant="ghost" _hover={{bgColor:"white"}}>
        {isOpen ? <CgProfile cursor="pointer" fontSize="20px"  /> : <CgProfile  cursor="pointer" fontSize="20px" />}
      </MenuButton>
      <MenuList>
      <Link to="/login"> <MenuItem onClick={()=>logout()} ><CgProfile   cursor="pointer"  />{login?"logout":"login"}</MenuItem></Link>
      </MenuList>
    </>
  )}
</Menu> 
   <Box  m="auto">   <Link to="/cart">  <BiShoppingBag /></Link></Box>
                 </Box>
               
                </Box>
              ) : (
               <Box color="rgb(114,127,148)" display="flex" justifyContent="space-between" w="100%" >
                 <IconButton
                onClick={onOpen}
                  icon={<FiMenu fontSize="1.25rem"  _hover={{bgColor:"white"}} />}
                  aria-label="Open Menu"
                  placement='left'
                  _hover={{bgColor:"white"}}
                  variant="ghost"
                  bgColor="white"
          
            
                />
                 <Link to="/"><Image w="150px" h="30px" alignItems="center" m="auto" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x@2x.png?v=1648743182"/></Link> 
                  
               </Box>
               
              )}
            
   
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          
          
         
        >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton   _hover={{bgColor:"white"}} />
           
          
            <DrawerBody  >
              <VStack alignItems="flex-start">
           
           
            <Button variant="ghost" onClick={onClose}  _hover={{bgColor:"white"}}><Link textDecoration="none" to={`/shop`}>SHOP</Link></Button>
                  <Button variant="ghost" onClick={onClose}   _hover={{bgColor:"white"}}><Link textDecoration="none" to={`/new`}>NEW</Link></Button>
                  <Button variant="ghost"  onClick={onClose}  _hover={{bgColor:"white"}}><Link textDecoration="none" to={`/brands`}>BRANDS</Link></Button>
                  
                  <Button variant="ghost"onClick={onClose}   _hover={{bgColor:"white"}}><Link textDecoration="none" to={`/explore`}>EXPLORE</Link></Button>
              
              
                  <Button variant="ghost" onClick={onClose}  _hover={{bgColor:"white"}}><Link textDecoration="none" to={`/events`}>EVENTS</Link></Button>
                  <Button variant="ghost" onClick={onClose}  _hover={{bgColor:"white"}}><Link textDecoration="none" to={`/new`}>BLUEWARDS</Link></Button>
                
                  <Button variant="ghost" onClick={onClose} _hover={{bgColor:"white"}}  textDecoration="none" ><Link textDecoration="none" to={`/routinereboot`}>ROUTINE REBOOT</Link></Button>
                  
                
               
                
               
                  <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} variant="ghost" _hover={{bgColor:"white"}} >
        {isOpen ? <CgProfile cursor="pointer"  fontSize="30px"/> : <CgProfile  cursor="pointer"  fontSize="30px"/>}
      </MenuButton>
      <MenuList>
      <Link to="/login"> <MenuItem onClick={()=>logout()} ><CgProfile   cursor="pointer"  fontSize="30px"/>{login?"logout":"login"}</MenuItem></Link>
      </MenuList>
    </>
  )}
</Menu> 
           <Box pl="15px">  <Link to="/cart">  <BiShoppingBag onClick={onClose} fontSize="30px"/></Link></Box>
           
             </VStack>
            </DrawerBody>
  
           
          </DrawerContent>
        </Drawer>
         
        </Box>
      
    )
  }
  export default Navbar