import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';
import Helmet from 'react-helmet';
// import Connect from '../Organism/Connect/Connect';

export default function Help() {
  return (
    <>
      <Helmet>
        <title>
          Help-Center | Build invoices for your business in no time.
        </title>
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
            >
              Help & Support
            </Text>
          </Heading>
          <Text fontSize={'1.5rem'} align="start">
            Invoicetor is proudly a community-driven web app, we created this to
            help small business owners and entrepreneurs alike, manage their
            invoices and keep track of their business.
          </Text>{' '}
          <Text
            fontSize={'1.5rem'}
            align="start"
            mb={{
              base: 0,
              md: 15,
            }}
          >
            Currently we haven't created any kind of chat and call support, but
            we are working on it. But But But... we have a classic support
            system, you can email us at{' '}
            <Text
              as={'span'}
              bgGradient="linear(to-l,purple.400, yellow.400)"
              bgClip="text"
            >
              <a
                href="mailto:
                    sumikumar1608@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                sumikumar1608@gmail.com{' '}
              </a>
            </Text>{' '}
            and we plan on adding more channels in the future.
          </Text>{' '}
        </Stack>
        {/* <Connect /> */}
      </Container>
    </>
  );
}
