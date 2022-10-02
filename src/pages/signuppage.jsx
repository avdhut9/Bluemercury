import { Container } from "@chakra-ui/react";
import { Button,  Flex, FormControl, FormLabel, Heading, Input, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import axios from 'axios'

import { RegisterContext } from "../HomeComponents/registerContext/registercontext";
import {  Navigate } from "react-router-dom";
const initial={
    email:"",
    password:""
  }
export default function Signup(){
    const[formdata,setformdata]=useState(initial)
    const{state,check}=useContext(RegisterContext)
    const[Loading,setloading]=useState(false)
    function change(e){
        const{name,value}=e.target
        console.log(value)
        setformdata({
          ...formdata,
          [name]:value
        })
        console.log(formdata)
          }
          async function submit(){
            setloading(true)
        try{
          const data=await axios.post('https://reqres.in/api/register',formdata)
        if(data.data.token){
        check()
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
        if(state){
          return<Navigate to="/login"/>
        }
          return <Container  pt={100} mb={200}  color="rgb(18,40,76)">
            <VStack>
                <VStack ><Heading letterSpacing={3} >REGISTER</Heading></VStack>
                <VStack><Text>Please enter your e-mail and password:</Text></VStack>
              <FormControl>
                <FormLabel>email</FormLabel>
                <Input value={formdata.email} onChange={change} placeholder="email" name="email" />
                <FormLabel>password</FormLabel>
                <Input value={formdata.password} onChange={change} placeholder="password" name="password" />
              </FormControl>
            </VStack>
          
              <Button mt={5} color="white" _hover="color:black" bgColor="rgb(18,40,76)" w="full" onClick={submit}>{Loading?<Spinner/>:"Register"}</Button>
       
          </Container>
    
}