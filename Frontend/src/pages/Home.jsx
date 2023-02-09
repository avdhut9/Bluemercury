import { Box, Image } from "@chakra-ui/react";
import { useRef } from "react";
import Plumperlips from "../components/homecomponents/plumperlimps";
import Simpleslick from "../components/homecomponents/simpleslick";
import Slickslider from "../components/homecomponents/slickslider";
import Twoimages from "../components/homecomponents/twoimages";
let plumerlips1={
    img:"https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Lip_Plumping_Full_2022-12-20_11-02-57_A_R8_S4_1_x650.jpg?v=1675266785",
    text1:"Get plumper lips now",
    text2:"Wait till you see what these formulas can do",
    text3:"SHOP NOW"
}
let plumerlips2={
    img:"https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Fragrance_Gifts_Full_Blue_Mercury_2302_Alford_0367_x650.jpg?v=1675267641",
    text1:"Say It With Fragrance",
    text2:"You really can't go wrong with perfume, or cologne",
    text3:"SHOP NOW",
    flex:"reverse"
}
export default function Home(){
   
    
    return(
        <Box>
<Slickslider/>
<Simpleslick name={"BLACK-OWNED BRANDS"} page={1} />
<Plumperlips props={plumerlips1}/>
<Simpleslick name={"BESTSELLERS"} page={2} limit={12}/>
<Plumperlips props={plumerlips2}/>
<Simpleslick name={"NEW ARRIVALS"} page={3} limit={12}/>
<Twoimages/>
        </Box>
    )
}