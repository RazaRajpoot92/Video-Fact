import { Box, Button, HStack, Heading, Input, Stack, Text, VStack, } from "@chakra-ui/react";
import React from "react";
import {AiOutlineSend} from "react-icons/ai"



const Footer = ()=>{
    return(
       <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>

        <Stack direction={["column","row"]}>
            <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                <Heading size={"md"} textAlign={["center","left"]}>Subscribe to get update</Heading>

                <HStack borderBottom={"2px soild white"} p={"2"}>

                    <Input placeholder="Enter your email here"
                    border={"none"}
                    borderRadius={"none"}
                    outline={"none"}
                    focusBorderColor={""}
                    width={"50%"}
                    />

                    <Button ml={"-2"}
                    borderRadius={""}
                    colorScheme="purple" p={"0"}>

                    <AiOutlineSend size={"20"} />
                    </Button>

                </HStack>
            </VStack>

            <VStack w={"full"}
            borderLeft={['none',"1px solid white"]}
            borderRight={['none',"1px solid white"]}
            >
                <Heading >Videos Fact</Heading>
                <Text>All right reserved</Text>
            </VStack>

            <VStack w={"full"}

            >
                <Heading size={"md"} >Social Media</Heading>

                <Button variant={"link"} colorScheme="purple">
                    <a href="#">Youtube</a>
                </Button>
                <Button variant={"link"} colorScheme="purple">
                    <a href="#">Instagram</a>
                </Button>
                <Button variant={"link"} colorScheme="purple">
                    <a href="#">GitHub</a>
                </Button>

            </VStack>

        </Stack>




       </Box>
    );
}

export default Footer;