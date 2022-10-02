import { Button, Container, Flex, FormControl, FormLabel, Heading, Input, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import axios from 'axios'

import { AuthContext } from "../HomeComponents/AuthContext/Authcontext";
import { Link, Navigate } from "react-router-dom";
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
  const{state,login}=useContext(AuthContext)
  const[Loading,setloading]=useState(false)
  console.log(state)
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
  const data=await axios.post('https://reqres.in/api/login',{
  email:formdata.email,
  password:formdata.password
})
if(data.data.token){
 login(data.data.token)
 setloading(false)
}else{
  alert("Something Went Wrong Please Refresh Page")
  setloading(false)
}
console.log(data.data)
}catch(error){

  alert("Something Went Wrong. please refresh")
  setloading(false)
}
}
if(state.isAuth){
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
  
      <Button mt={5} color="white" _hover="color:black" bgColor="rgb(18,40,76)" w="full" onClick={submit}>{Loading?<Spinner/>:"Login"}</Button>
<Flex justify="center" gap="20px"><Text>Don't have an account? <Link  to="/register">Create one</Link> </Text></Flex>
  </Container>
};

export default Login;

