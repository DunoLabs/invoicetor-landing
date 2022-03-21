import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';

import Connect from '../Organism/Connect/Connect';

export default function OpenSource() {
  return (
    <>
      <Container maxW={'6xl'} mt={5}>
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
            >
              About Us
            </Text>
          </Heading>
          <Text fontSize={'1.5rem'} align="start">
            Invoicetor is a platform that helps businesses to digitize their
            finances in an easy manner and create invoices in a simple way. Aim
            of this website is to avail a service that helps them to simplify
            their finances.
          </Text>{' '}
          <Text
            fontSize={'1.5rem'}
            align="start"
            mb={{
              base: 0,
              md: 15,
            }}
          >
            So, this is the idea behind Invoicetor, we are here to help you in
            your business. We're a team of developers who are passionate about
            creating software that helps businesses to do more with less effort.
          </Text>{' '}
          <Text
            fontSize={'1.5rem'}
            align="start"
            mb={{
              base: 0,
              md: 15,
            }}
          >
            we're currently working on a new features, and we're soon going to
            release first public version, so stay tuned!
          </Text>
        </Stack>
        <Connect />
      </Container>
    </>
  );
}
