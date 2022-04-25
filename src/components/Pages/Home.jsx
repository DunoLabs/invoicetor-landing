import '../../css/global.scss';
import Helmet from 'react-helmet';
import Hero from '../Organism/Hero/Hero';

import Feature from '../Organism/Feature/Feature';
import { Box, Grid } from '@chakra-ui/react';
import Testimonials from '../Organism/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Invoicetor | Build invoices for your business in no time.</title>
      </Helmet>
      <Box textAlign="center">
        <Grid minH="100vh">
          <Hero />
          <Feature />
          <Testimonials />
        </Grid>
      </Box>
    </>
  );
}
