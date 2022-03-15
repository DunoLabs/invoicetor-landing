import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/Pages/Home';
import './css/global.scss';
import SideButton from './components/Atoms/SideButton/SideButton';
import OpenSource from './components/Pages/OpenSource';

import Navbar from './components/Organism/Navbar/Navbar';
import Footer from './components/Organism/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import OneTimeEditor from './components/Pages/OneTimeEditor/OneTimeEditor';

function App() {
  return (
    <ChakraProvider>
      <SideButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opensource" element={<OpenSource />} />
        <Route path="/onetimeeditor" element={<OneTimeEditor />} />
      </Routes>

      <Footer />
    </ChakraProvider>
  );
}

export default App;
