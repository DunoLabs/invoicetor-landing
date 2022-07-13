import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';
import Helmet from 'react-helmet';
// import Connect from '../Organism/Connect/Connect';

export default function Releases() {
  return (
    <>
      <Helmet>
        <title>Releases | Build invoices for your business in no time.</title>
      </Helmet>
      <Container maxW={'5xl'} mt={5}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 3, md: 5 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            align="start"
            fontWeight={700}
            fontSize="6xl"
            my={{
              base: 0,
              md: 5,
            }}
          >
            <Text
              as={'span'}
              bgGradient="linear(to-l,purple.400, yellow.400)"
              bgClip="text"
              fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
            >
              Releases
            </Text>
          </Heading>
          <Text fontSize={'1.3rem'} align="start">
            We haven't released any version yet. But we are working on it and
            soon we will release a version with mulitple features that will help
            you to build invoices for your business in no time.
          </Text>{' '}
          <Text fontSize={'1.3rem'} align="start">
            Stay tuned for more updates.
          </Text>{' '}
        </Stack>
        {/* <Connect /> */}
      </Container>
    </>
  );
}
