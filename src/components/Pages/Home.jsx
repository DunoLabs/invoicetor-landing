import '../../css/global.scss';

import Hero from '../Organism/Hero/Hero';
import Connect from '../Organism/Connect/Connect';
import Feature from '../Organism/Feature/Feature';
import { Box, Grid } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh">
        <Hero />
        <Feature />
        <Connect />
      </Grid>
    </Box>
  );
}
