import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/Pages/Home';
import Footer from './components/Organism/Footer/Footer';

function App() {
  return (
    <ChakraProvider>
      <Home />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
