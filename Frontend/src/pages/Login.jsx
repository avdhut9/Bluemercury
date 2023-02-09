import { Button, Container, Flex, FormControl, FormLabel, Heading, Input, Spinner, Text, VStack } from "@chakra-ui/react";
import React, {  useState } from "react";
import {logi,signu} from "../redux/auth/action"
import axios from 'axios'


import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const initial={
    email:"",
    password:""
  }
  const breakouts={
    sm:"20px",
    md:"30px",
    lg:"40px"
}
const breakout1={
    sm:"15px",
    md:"20px",
    lg:"30px"
}
const Login = () => {
  const[formdata,setformdata]=useState(initial)
  const {login}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()
const[loading,setloading]=useState(false)
  function change(e){
const{name,value}=e.target
console.log(name)
setformdata({
  ...formdata,
  [name]:value
})

  }
  async function submit(){
    setloading(true)
try{
  const data=await axios.post('https://avdhutblumercury.onrender.com/login',{
  email:formdata.email,
  password:formdata.password
})
if(data.data.token){
 dispatch(logi)
 setloading(false)
 localStorage.setItem("token",JSON.stringify(data.data))
}else{
  alert("Something Went Wrong Please Refresh Page")
  setloading(false)
}
console.log(data.data)
}catch(e){

  alert(e.message)
  setloading(false)
}
}
if(login){
  return<Navigate to="/"/>
}
  return <Container pt={100} mb={200}   color="rgb(114,127,148)">
    <VStack>
        <VStack ><Heading letterSpacing={3} >LOGIN</Heading></VStack>
        <VStack><Text>Please enter your e-mail and password:</Text></VStack>
      <FormControl>
        <FormLabel>email</FormLabel>
        <Input onChange={change} placeholder="email" name="email" />
        <FormLabel>password</FormLabel>
        <Input onChange={change} placeholder="password" name="password" />
      </FormControl>
    </VStack>
  
      <Button mt={5} color="white" _hover="color:black" bgColor="rgb(18,40,76)" w="full" onClick={submit}>{loading?<Spinner/>:"Login"}</Button>
<Flex justify="center" gap="20px"><Text>Don't have an account? <Link  to="/signup">Create one</Link> </Text></Flex>
  </Container>
};

export default Login;