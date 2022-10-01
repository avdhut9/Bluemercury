import { Heading } from "@chakra-ui/react"
import{Route,Routes} from "react-router-dom"
import NewItems from "../New"

import SingleProduct from "../NewComponents/single"
import Cart1 from "./cart"
import Cart from "./cart"

import Home from "./Home"
import Login from "./Login"
import Signup from "./signuppage"

export default function AllRoutes(){
    return(
        <Routes>
<Route path="/carter" element={<Heading>I am Cart</Heading>}/>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Signup/>}/>
<Route path="/new" element={<NewItems/>}/>
<Route path="/cart" element={<Cart1/>}/>
<Route path="/products/singleproduct/:id" element={<SingleProduct/>}/>
<Route/>
        </Routes>
    )
}