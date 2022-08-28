import '../../css/global.scss';
import Helmet from 'react-helmet';
import Hero from '../Organism/Hero/Hero';

import Feature from '../Organism/Feature/Feature';
import { Box, Grid } from '@chakra-ui/react';
import { SponsorCard } from './Sponsor';
import Testimonials from '../Organism/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Invoicetor | Build invoices for your business in no time.</title>
        <meta
          name="description"
          content="Invoicetor is a free invoicing app for small businesses. Build invoices for your business in no time."
        />
      </Helmet>
      <Box textAlign="center">
        <Grid minH="100vh">
          <Hero />
          <Feature />
          <Testimonials />
          <SponsorCard />
        </Grid>
      </Box>
    </>
  );
}
