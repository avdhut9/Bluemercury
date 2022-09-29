import { Box, Button, ButtonGroup, Container, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import {StarIcon} from "@chakra-ui/icons"

const data=[{
    image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-solarflare-670959115386-1_235x235_crop_center.jpg?v=1658817362",
    title:"JANE IREDALE",
des:"PurePressed® Eye Shadow Palette"
},
{
    image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-sheer-670959116451-1_235x235_crop_center.jpg?v=1660185013",
    title:"JANE IREDALE",
des:"PurePressed® Eye Shadow Palette"
},
{
    image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-smolder-670959117373-1_235x235_crop_center.jpg?v=1662653102",
    title:"JANE IREDALE",
des:"PurePressed® Eye Shadow Palette"
}
]
const but="o"
export default function Info(){
    const[data1,setdata1]=useState(data[0])
    const[data2,setdata2]=useState(data[1])
    const[data3,setdata3]=useState(data[2])
    const[page,setpage]=useState(1)
    


    return(
        <Container>
    <VStack w="100%" bg="white" >
       {page==1? <VStack>
   <Image src={data1.image}/>
    <Text>{data1.title}</Text>
    <Text>{data1.des}</Text>
    </VStack>:page==2? <VStack>
   <Image src={data2.image}/>
    <Text>{data2.title}</Text>
    <Text>{data2.des}</Text>
    </VStack>: <VStack>
   <Image src={data3.image}/>
    <Text>{data3.title}</Text>
    <Text>{data3.des}</Text>
    </VStack>}
<Box pt={9}>
<Flex>{[0,1,2,3,4].map((ele)=>
<ButtonGroup size="lg" variant="ghost" >{ele==0?<Button onClick={()=>setpage(page-1)} disabled={page==1}>{"<"}</Button>:ele==4?<Button onClick={()=>setpage(page+1)} disabled={page==3}>{">"}</Button>:<Button>{but}</Button>}</ButtonGroup>
)}
</Flex>
</Box>
{/* <Box>{[1,2,3,4,5].map((ele,i)=>
    <StarIcon/>
)}</Box> */}
    </VStack>
    </Container>
    )
}
