import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
<<<<<<< HEAD
      size="md"
      pos={"fixed"}
      top={"4"}
      right={"4"}

      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      
=======

      variant="ghost"
      color="current" 
      pos={"fixed"}
      top={"3"}
      right={"3"}
>>>>>>> e605233fc71846ae80336a1a6c77e5d053037647
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
