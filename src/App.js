import logo from './logo.svg';
import './App.css';
import { Box, Container, Image } from '@chakra-ui/react';
import Home from './pages/Home';
import AllRoutes from './pages/Allroutes';
import Navbar from './Navbar/Navbar';
import { Footer } from './footer';

function App() {
  return (
   <Container maxW="100%" p={0}>
    <Navbar/>
<AllRoutes/>
<Footer/>
   </Container>
  );
}

export default App;
