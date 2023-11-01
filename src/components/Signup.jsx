import React from "react";

import {Button, Avatar , Text, Container, Heading, Input, VStack } from "@chakra-ui/react"
import {Link} from "react-router-dom"
const Signup = ()=>{
    return(
        <Container maxW={"container.xl"} h={"100vh"} p={'16'}>

            <form>

            <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]}
            m={"auto"}
            my={"16"}
            >

                <Heading alignSelf={"center"}>Let's Get Start</Heading>

                <Avatar  alignSelf={"center"} boxSize={["32","40"]} />

                 <Input type={"text"} placeholder={"Enter your name"} required
                focusBorderColor={"purple.500"}

                />

                <Input type={"email"} placeholder={"Enter your email"} required
                focusBorderColor={"purple.500"}

                />

                <Input type={"password"} placeholder={"Enter your password"} required
                focusBorderColor={"purple.500"}

                />

                <Input type={"password"} placeholder={"Retype your password"} required
                    focusBorderColor={"purple.500"}

                />


                <Button colorScheme="purple" type="submit">
                    Sign Up
                </Button>

                <Text textAlign={"right"}>

                    Already have an account?{" "}
                    <Button variant={"link"}>
                        <Link to={"/login"}>Log in</Link>
                    </Button>

                </Text>

            </VStack>


            </form>

        </Container>
    );
}

export default Signup;