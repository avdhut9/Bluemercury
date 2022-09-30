import { Heading } from "@chakra-ui/react"
import{Route,Routes} from "react-router-dom"
import NewItems from "../New"
import New from "../New"

import Home from "./Home"
import Login from "./Login"
import Signup from "./signuppage"

export default function AllRoutes(){
    return(
        <Routes>
<Route path="/cart" element={<Heading>I am Cart</Heading>}/>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Signup/>}/>
<Route path="/new" element={<NewItems/>}/>
<Route/>
        </Routes>
    )
}