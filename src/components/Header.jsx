import {
    Drawer,
    DrawerBody,
    DrawerHeader,
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
    );
}

export default Header;