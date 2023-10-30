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

  } from '@chakra-ui/react';



const Header = ()=>{
    return(
        <Button

        p={"0"}
        colorScheme="purple"
        pos={"fixed"}
        top={"4"}
        left={"4"}
        borderRadius={"full"} >

            <BiMenuAltLeft
            size={"20"}

             />

        </Button>
    );
}

export default Header;