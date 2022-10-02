import { Box, Button, Container, Heading, Image, Table, Tbody, Td, Tfoot, Th, Tr } from "@chakra-ui/react";
import { useContext } from "react";
import { Cartcontext } from "../cartContext/cartContext";
function remove(value){
return({
    type:"remove",
    payload:value
})
}

export default function Cart1(){
    const{state,dispatch}=useContext(Cartcontext)
    console.log(state)
    function add(id){
const update=state.map((ele)=>{
    if(ele.id==id){
        ele.qty=ele.qty+1
    }
    return ele
}

)
dispatch({type:"increase",payload:update})

    }
    function minus(id){
        const update1=state.map((ele)=>{
            if(ele.id==id){
                ele.qty=ele.qty-1
            }
            return ele
        }
        
        )
        dispatch({type:"increase",payload:update1})
    }
    function kadh(id){
        const ok=state.filter((ele)=>
        ele.id!=id
        )
        dispatch(remove(ok))
    }
    function total(){
        let sum=0
        for(let i=0;i<=state.length-1;i++){
sum=sum+state[i].price*state[i].qty
        }
        return sum
    }
    return(
        <Container maxW="container.xl" pt={100} mb={100} color="rgb(114,127,148)">
           {state.length==0?<Container ><Image src="http://sastamadda.com/Img/emptycart.png"/></Container>: <Table>
                <Tr>
                    <Th>Sr.No</Th>
                    <Th>Name</Th>
                    <Th>price</Th>
                    <Th>Qty</Th>
                    <Th>Remove</Th>
                </Tr>
                <Tbody>
              {state.map((ele,i)=>
                <Tr>
                <Td>{i+1}</Td>
                <Td>{ele.name}</Td>
                <Td>{ele.price*ele.qty}</Td>
                <Td>
                    <Button onClick={()=>add(ele.id)} bg="white" bgColor="white" size="sm">+</Button>  {ele.qty}  <Button disabled={ele.qty==1} onClick={()=>minus(ele.id)} bg="white" size="sm">-</Button>
                </Td>
                <Td><Button onClick={()=>kadh(ele.id)}>Remove</Button></Td>
            </Tr>
              )}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Td>Total</Td>
                        <Td></Td>
                        <Td>{total()}</Td>

                    </Tr>
                </Tfoot>
            </Table>}
        </Container>
    )
}