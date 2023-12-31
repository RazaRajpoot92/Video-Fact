import React from "react";

import {Button,Text,Avatar, Container, Heading, Input, VStack } from "@chakra-ui/react"
import {Link} from "react-router-dom"
const Login = ()=>{
    return(
        <Container maxW={"container.xl"} h={"100vh"} p={'16'}>

            <form>

            <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]}
            m={"auto"}
            my={"16"}
            >

                <Heading alignSelf={"center"}>Welcome Back</Heading>

                <Avatar alignSelf={"center"} boxSize={["32","40"]} />

                <Input type={"email"} placeholder={"Enter your email"} required
                focusBorderColor={"purple.500"}

                />

                <Input type={"password"} placeholder={"Enter your password"} required
                focusBorderColor={"purple.500"}

                />

                <Button variant={"link"} alignSelf={"flex-end"} >
                    <Link to={"/forgotpassowrd"}>Forgot Passowrd?</Link>
                </Button>

                <Button colorScheme="purple" type="submit">
                    Log in
                </Button>

                <Text textAlign={"right"}>

                    New user?{" "}
                    <Button variant={"link"}>
                        <Link to={"/signup"}>Sign Up</Link>
                    </Button>

                </Text>

            </VStack>


            </form>

        </Container>
    );
}

export default Login;