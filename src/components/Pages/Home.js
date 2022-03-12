import React from 'react';
import Navbar from '../Organism/Navbar/Navbar';
import { Box, Grid } from '@chakra-ui/react';
export default function Home() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh">
        <Navbar />
      </Grid>
    </Box>
  );
}
