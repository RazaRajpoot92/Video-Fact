<<<<<<< HEAD
import React from "react";

=======
>>>>>>> e605233fc71846ae80336a1a6c77e5d053037647
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
<<<<<<< HEAD
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    Button,

  } from '@chakra-ui/react';



const Header = ()=>{
    return(
        <h1>Header</h1>
=======
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,  
    
    } from '@chakra-ui/react';

import { Link } from 'react-router-dom';  

import {BiMenuAltLeft} from "react-icons/bi"

const Header = ()=>{
    return(
        <>
        <Button 
        pos={"fixed"}
        top={"3"}
        left={"3"}
        size={"sm"}
        colorScheme='purple'
        w={"8"}
        h={"8"}
        borderRadius={"full"}
        p={"0"}
        >
            <BiMenuAltLeft size={"20"} />
        </Button>
        
        </>
>>>>>>> e605233fc71846ae80336a1a6c77e5d053037647
    );
}

export default Header;