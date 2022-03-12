import '../../css/global.scss';
import Navbar from '../Organism/Navbar/Navbar';
import Hero from '../Organism/Hero/Hero';
import Feature from '../Organism/Feature/Feature';
import { Box, Grid } from '@chakra-ui/react';
import SideButton from '../Atoms/SideButton/SideButton';
export default function Home() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh">
        <SideButton />
        <Navbar />
        <Hero />
        <Feature />
      </Grid>
    </Box>
  );
}
