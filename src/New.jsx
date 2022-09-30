import { Box, Flex, Heading, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Products from "./NewComponents/Products";
import Sidebar from "./NewComponents/sidebar";
const data1=[
    {
        "id":1,
        "name":"LUNE+ASTER",
        "des":"Dawn to Dusk Foundation Stick",
        "price":52,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-deepalmond-814309023086-1_235x.jpg?v=1663805161",
        "rating":3
    },
    {
        "id":2,
        "name":"REVITALASH",
        "des":"Revitabrow Advanced ",
        "price":58,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-005floz15ml-893689003826-1_235x.jpg?v=1663618246",
        "rating":4
    },
    {
        "id":3,
        "name":"RÉVIVE",
        "des":"Fermitif Neck Renewal ",
        "price":195,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-633222211079-1_235x.jpg?v=1662557663",
        "rating":4
    },
    {
        "id":4,
        "name":"RÉVIVE",
        "des":"Masque Des Yeux Instant ",
        "price":35,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-6treatments-633222213967-1_235x.jpg?v=1664208872",
        "rating":5
    },
    {
        "id":5,
        "name":"R+CO BLEU",
        "des":"F-Layer Deep Conditioning ",
        "price":64,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-810081492522-1_235x.jpg?v=1663939982",
        "rating":3
    },
    {
        "id":6,
        "name":"LIVING PROOF",
        "des":"Triple Bond Complex",
        "price":45,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-05floz15ml-840216931336-1_235x.jpg?v=1663618199",
        "rating":4
    },
    {
        "id":7,
        "name":"SANA JARDIN",
        "des":"Tiger By Her Side ",
        "price":225,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-17floz50ml-5060541430440-1_235x.jpg?v=1662538920",
        "rating":4
    },
    {
        "id":8,
        "name":"AUGUSTINUS BADER",
        "des":"The Neem Comb With Handle",
        "price":28,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060552904893-1_235x.jpg?v=1663862860",
        "rating":4
    },
    {
        "id":9,
        "name":"NEST NEW YORK",
        "des":"Indian Jasmine Perfume Oil",
        "price":95,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-6ml-840732118372-1_235x.jpg?v=1663175589",
        "rating":4.5
    },
    {
        "id":10,
        "name":"KEVYN AUCOIN",
        "des":"The Contour Eyeshadow Palette",
        "price":36,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-deep-810050680219-1_235x.jpg?v=1663939862",
        "rating":5
    },

    {
        "id":11,
        "name":"LUNE+ASTER",
        "des":"Dawn to Dusk Foundation Stick",
        "price":52,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309023185-1_235x.jpg?v=1663993184",
        "rating":4
    },
    {
        "id":12,
        "name":"BLUEMERCURY",
        "des":"The Fall Makeup Edit",
        "price":75,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-deepalmond-814309023086-1_235x.jpg?v=1663805161",
        "rating":4
    },

    {
        "id":13,
        "name":"ELTAMD",
        "des":"UV Clear Broad-Spectrum ",
        "price":39,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-390205025008-1_235x.jpg?v=1663250198",
        "rating":5
    },
    {
        "id":14,
        "name":"JANE IREDALE",
        "des":"Glow Time™ Blush Stick",
        "price":38,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-ember-670959117335-1_235x.jpg?v=1662653093",
        "rating":4
    },
    {
        "id":15,
        "name":"DYSON",
        "des":"Special Gift Edition Airwrap™ ",
        "price":599.99,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-885609030272-1_235x.jpg?v=1664294695",
        "rating":5
    },
    {
        "id":16,
        "name":"M-61",
        "des":"PowerGlow® Obsessed",
        "price":172,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011989-1_235x.jpg?v=1663217094",
        "rating":4
    },
    {
        "id":17,
        "name":"M-61",
        "des":"Hydraboost Home + Away Set",
        "price":86,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237012009-1_235x.jpg?v=1663217081",
        "rating":3
    },
    {
        "id":18,
        "name":"LUNE+ASTER",
        "des":"Mini Mascara Trio",
        "price":20,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309022966-1_235x.jpg?v=1663217039",
        "rating":4
    },
    {
        "id":19,
        "name":"LUNE+ASTER",
        "des":"The Perfect Lip Pair",
        "price":24,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309022942-1_235x.jpg?v=1663217071",
        "rating":4
    },
    {
        "id":20,
        "name":"LUNE+ASTER",
        "des":"Dawn to Dusk Foundation Stick",
        "price":52,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-deepalmond-814309023086-1_235x.jpg?v=1663805161",
        "rating":5
    },
    {
        "id":21,
        "name":"REVITALASH",
        "des":"Revitalash Advanced ",
        "price":150,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-0034floz1ml-893689003031-1_235x.jpg?v=1663459808",
        "rating":4
    },
    {
        "id":22,
        "name":"DYSON",
        "des":"Special Gift Edition Corrale™ ",
        "price":499.99,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-885609029559-1_235x.jpg?v=1664283525",
        "rating":4
    },
    {
        "id":23,
        "name":"ELLIS BROOKLYN",
        "des":"Vanilla Milk Eau de Parfum",
        "price":105,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-50ml-850039151019-2_235x.jpg?v=1662797548",
        "rating":4
    },
    {
        "id":24,
        "name":"DIPTYQUE",
        "des":"34 Boulevard Saint Germain",
        "price":220,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-212oz600g-3700431440853-1_235x.jpg?v=1663003918",
        "rating":4
    },
    {
        "id":25,
        "name":"DIPTYQUE",
        "des":"34 Boulevard Saint Germain ",
        "price":49,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431439024-1_235x.jpg?v=1663181548",
        "rating":4
    },
    {
        "id":26,
        "name":"TRISH MCEVOY",
        "des":"The Power of Makeup®",
        "price":298,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-deep-791222902349-1_235x.jpg?v=1662538945",
        "rating":3
    },
    {
        "id":27,
        "name":"BLUEMERCURY",
        "des":"The All-Star Edit",
        "price":99,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309023154-1_235x.jpg?v=1661976274",
        "rating":5
    },
    {
        "id":28,
        "name":"LA MER",
        "des":"The Glowing Hydration Duet",
        "price":549,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-747930142379-1_235x.jpg?v=1664223072",
        "rating":4
    },
    {
        "id":29,
        "name":"LA MER",
        "des":"The Crème de la Mer Duet",
        "price":380,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-747930142362-1_235x.jpg?v=1664223065",
        "rating":3.5
    },
    {
        "id":30,
        "name":"LUNE+ASTER",
        "des":"Kaleidoscopic Nudes Eyeshadow ",
        "price":62,
        "image":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309022812-1_235x.jpg?v=1663217030",
        "rating":3
    }
]
const breakouts={
    base:"12px",
    sm:"14px",
    md:"14px",
    lg:"16px"
}

export default function NewItems(){
    const[state,setstate]=useState(data1)
    function sorthigh(){
        
const update=state.sort((a,b)=>
b.price-a.price
)
console.log(update)
setstate([...update])
    }
    function sortlow(){
        const update1=state.sort((a,b)=>
        a.price-b.price
        )
        setstate([...update1])
    }
    return(
        <Box pb={100} pt={100} fontSize={breakouts}>
          <Box pr={10} pb={10}>  <Flex justify="flex-end">
            <Menu isLazy>
  <MenuButton>Sort By</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
  
    <MenuItem onClick={sortlow}>Price Low to High</MenuItem>
    <MenuItem onClick={sorthigh}>Price High to Low</MenuItem>
  </MenuList>
</Menu>
  
            </Flex></Box>
          <Flex>
                <Sidebar/>
                <Products data={state}/>
            </Flex>
        </Box>
    )
}