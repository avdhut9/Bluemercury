import { Route, Routes } from "react-router-dom";
import Cart from "../pages/cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductPage from "../pages/productpage";
import Shop from "../pages/shop";
import Signup from "../pages/signup";
import PrivateRoute from "./privateroute";

export default function Allroutes(){
    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/productpage/:id" element={<PrivateRoute><ProductPage/></PrivateRoute>}/>
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
    </Routes>
    )
}