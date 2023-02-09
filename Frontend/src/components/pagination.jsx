import { Box, Button } from "@chakra-ui/react";
function total(n){
    let arr=[]
for(let i=1;i<=n;i++){
arr.push(i)
}
return arr
}
export default function Pagination({changepage,totalpages,page}){
    function ok1(ele){
changepage(ele)
    }
  function ok(){
    let pages=total(totalpages).map((ele)=>{
        return <Button isDisabled={ele==page} onClick={()=>ok1(ele)}>{ele}</Button>
            })
            return pages
  }
    return(
        <Box mt="100px">
{ok()}
        </Box>
    )
}