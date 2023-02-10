import { Container } from "@chakra-ui/react";
import { Button,  Flex, FormControl, FormLabel, Heading, Input, Spinner, Text, VStack } from "@chakra-ui/react";
import React, {  useState } from "react";
import axios from 'axios'
import {signu} from "../redux/auth/action"

import {  Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const initial={
    name:"",
    email:"",
    password:""
  }
export default function Signup(){
    const[formdata,setformdata]=useState(initial)
   const {issignup}=useSelector((state)=>state.auth)
   const dispatch=useDispatch()
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
          const data=await axios.post('https://avdhutblumercury.onrender.com/signup',formdata)
        if(data.data.message="user signed up successfully"){
     dispatch(signu)
         setloading(false)
        }else{
          alert("Something Went Wrong Please Refresh Page or You already have a account")
          setloading(false)
        }
        console.log(data.data)
        }catch(error){
        
          alert("Something Went Wrong Please Refresh Page or You already have a account")
          setloading(false)
        }
        }
        if(issignup){
          return<Navigate to="/login"/>
        }
          return <Container  pt={100} mb={200}   color="rgb(114,127,148)">
            <VStack>
                <VStack ><Heading letterSpacing={3} >SIGNUP</Heading></VStack>
                <VStack><Text>Please enter your credentials</Text></VStack>
              <FormControl>
              <FormLabel>name</FormLabel>
                <Input value={formdata.name} onChange={change} placeholder="name" name="name" />
                <FormLabel>email</FormLabel>
                <Input value={formdata.email} onChange={change} placeholder="email" name="email" />
                <FormLabel>password</FormLabel>
                <Input value={formdata.password} onChange={change} placeholder="password" name="password" />
              </FormControl>
            </VStack>
          
              <Button mt={5} color="white" _hover="color:black" bgColor="rgb(18,40,76)" w="full" onClick={submit}>{Loading?<Spinner/>:"Signup"}</Button>
       
          </Container>
    
}