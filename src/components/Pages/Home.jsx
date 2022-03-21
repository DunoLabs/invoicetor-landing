import '../../css/global.scss';

import Hero from '../Organism/Hero/Hero';

import Feature from '../Organism/Feature/Feature';
import { Box, Grid } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh">
        <Hero />
        <Feature />
      </Grid>
    </Box>
  );
}
