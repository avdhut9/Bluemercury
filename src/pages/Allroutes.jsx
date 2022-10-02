import { Heading } from "@chakra-ui/react"
import{Route,Routes} from "react-router-dom"
import PrivateRoute from "../cartContext/PrivateRoute"
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

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Signup/>}/>
<Route path="/new" element={<PrivateRoute><NewItems/></PrivateRoute>}/>
<Route path="/cart" element={<PrivateRoute><Cart1/></PrivateRoute>}/>
<Route path="/products/singleproduct/:id" element={<PrivateRoute><SingleProduct/></PrivateRoute>}/>
<Route/>
        </Routes>
    )
}