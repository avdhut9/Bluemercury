import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/Navabr';
import Home from './pages/Home';
import Allroutes from './route/Allroutes';
import { Footer } from './components/footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl"  >
       <Navbar/>
     <Allroutes/>
     <Footer/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
