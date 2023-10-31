import React from "react";
import {BiMenuAltLeft} from "react-icons/bi"

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,

  } from '@chakra-ui/react';
import { Link } from "react-router-dom";



const Header = ()=>{

    const {isOpen,onOpen,onClose,} = useDisclosure()

    return(
        <>
        <Button

        zIndex={"overlay"}
        p={"0"}
        colorScheme="purple"
        pos={"fixed"}
        top={"4"}
        left={"4"}
        borderRadius={"full"}
        onClick={onOpen} >

            <BiMenuAltLeft
            size={"20"}

             />

        </Button>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />

            <DrawerHeader>Videos Fact</DrawerHeader>

            <DrawerBody>
            <VStack alignItems={"flex-start"} >

                <Button onClick={onClose}  variant={"ghost"}  colorScheme="purple">
                    <Link to={"/"}>Home</Link>
                </Button>

                <Button onClick={onClose}  variant={"ghost"}  colorScheme="purple">
                    <Link to={"/videos"}>Videos</Link>
                </Button>

                <Button onClick={onClose}  variant={"ghost"}  colorScheme="purple">
                    <Link to={"/videos?category=free"}>Free Videos</Link>
                </Button>

                <Button onClick={onClose}  variant={"ghost"}  colorScheme="purple">
                    <Link to={"/upload"}>Upload Video</Link>
                </Button>

            </VStack>

            <HStack
                pos={"absolute"}
                bottom={"8"}
                left={"3"}
                spacing={"8"}
                w={"full"}
                justifyContent={"flex-start"}>

                <Button onClick={onClose} colorScheme="purple">
                    <Link to={"/login"}>Log in</Link>
                </Button>

                <Button onClick={onClose} variant={"outline"} colorScheme="purple">
                    <Link to={"/singup"}>Sign Up</Link>
                </Button>

            </HStack>
            </DrawerBody>


            </DrawerContent>


        </Drawer>

        </>
    );
}

export default Header;