import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/Pages/Home';
import './css/global.scss';
import SideButton from './components/Atoms/SideButton/SideButton';
import OpenSource from './components/Pages/OpenSource';
import Contact from './components/Pages/Contact';
import Navbar from './components/Organism/Navbar/Navbar';
import Footer from './components/Organism/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <SideButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opensource" element={<OpenSource />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </ChakraProvider>
  );
}

export default App;
