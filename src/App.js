import React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Home from './components/Pages/Home';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      900: '#1a202c',
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
