import React from 'react';
import { ChakraProvider, Box, CircularProgress } from '@chakra-ui/react';
import 'css/global.scss';
import SideButton from 'components/Atoms/SideButton/SideButton';

import Navbar from 'components/Organism/Navbar';
import Footer from 'components/Organism/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from 'components/Pages/About';
import Features from 'components/Pages/Features';
import { Sponsor } from 'components/Pages/Sponsor';
import Releases from 'components/Pages/Release/Release';
import Help from 'components/Pages/Help';
import JoinWaitlist from 'components/Pages/JoinWaitlist';
import GoTop from 'components/Atoms/goTop/goTop';
import Thanks from 'components/Pages/Supporters/thanks';
import NotFound from 'components/Pages/404';

import Home from 'components/Pages/Home';
import OpenSource from 'components/Pages/OpenSource';
import FreeInvoicetor from 'components/Pages/FreeInvoicetor';

function App() {
  const Loading = () => (
    <Box display="flex" justifyContent="center" p={4}>
      <CircularProgress isIndeterminate color="green.300" />
    </Box>
  );

  return (
    <ChakraProvider>
      <React.Suspense fallback={Loading}>
        <SideButton />
        <GoTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={'opensource'} element={<OpenSource />} />
          <Route path={'free-invoicetor'} element={<FreeInvoicetor />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="sponsor" element={<Sponsor />} />
          <Route path="thanks" element={<Thanks />} />
          <Route path="releases" element={<Releases />} />
          <Route path="help-center" element={<Help />} />
          <Route path="join-waitlist" element={<JoinWaitlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </React.Suspense>
    </ChakraProvider>
  );
}

export default App;
