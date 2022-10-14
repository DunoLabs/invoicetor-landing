import 'css/global.scss';
import Helmet from 'react-helmet';
import Hero from 'components/Organism/Hero/Hero';
import Feature from 'components/Organism/Feature/Feature';
import { Box, Grid } from '@chakra-ui/react';
import { SponsorCard } from './Sponsor';
import Testimonials from 'components/Organism/Testimonials/Testimonials';

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
