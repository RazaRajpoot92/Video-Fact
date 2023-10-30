import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import { ColorModeSwitcher } from './ColorModeSwitcher';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>

    <ColorModeScript />
    
    <ChakraProvider theme={theme}>
<<<<<<< HEAD
      <ColorModeSwitcher />
=======
    <ColorModeSwitcher  />
>>>>>>> e605233fc71846ae80336a1a6c77e5d053037647
    <App />
    </ChakraProvider>

  </StrictMode>
);


