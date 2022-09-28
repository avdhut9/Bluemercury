import { Heading } from "@chakra-ui/react"
import{Route,Routes} from "react-router-dom"
import Home from "./Home"

export default function AllRoutes(){
    return(
        <Routes>
<Route path="/cart" element={<Heading>I am Cart</Heading>}/>
<Route path="/" element={<Home/>}/>
<Route/>
<Route/>
<Route/>
<Route/>
        </Routes>
    )
}