import { Box, Heading, Container, Text, Stack, Link } from '@chakra-ui/react';
import Helmet from 'react-helmet';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Build invoices for your business in no time.</title>
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
              fontSize={{
                base: '2.5rem',
                md: '3.5rem',
              }}
            >
              About Us
            </Text>
          </Heading>
          <Text
            fontSize={'1.5rem'}
            align={'start'}
            mb={{
              base: 0,
              md: 15,
            }}
          >
            We are Sumit & Riya, the co-founders of Invoicetor. We come from the
            tech & creative backgrounds based in Indore. While software
            companies are working hard to achieve product-led growth, our
            pragmatic vision is to ensure that software products have great
            product adoption. We believe that the best software products are
            built by people who are passionate about what they do.
          </Text>
          {/* <Connect /> */}
          <Heading
            align="start"
            fontWeight={700}
            fontSize="3xl"
            style={{
              marginTop: '3rem',
            }}
          >
            Why are we building Invoicetor ?
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
            your business. We're currently working on a new features, and we're
            soon going to release first public version, so stay tuned!
          </Text>{' '}
          <Heading
            align="start"
            fontWeight={700}
            fontSize="3xl"
            style={{
              marginTop: '3rem',
            }}
          >
            Planning to get in touch with us?
          </Heading>
          <Text fontSize={'1.5rem'} align="start">
            You can email us at{' '}
            <Text
              as={'span'}
              bgGradient="linear(to-l,purple.400, yellow.400)"
              bgClip="text"
            >
              <Link
                href="mailto:sumikumar1608@gmail.com "
                target="_blank"
                rel="noopener noreferrer"
              >
                sumikumar1608@gmail.com
              </Link>
            </Text>
          </Text>
        </Stack>
        {/* <Connect /> */}
      </Container>
    </>
  );
}
