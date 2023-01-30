import Helmet from 'react-helmet';
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Link,
  Flex,
} from '@chakra-ui/react';
import SupporterCard from 'Molecules/SupportesCard';
import { MonthlySupporters, YearlySupporters } from 'data/SupportersData';
export default function Thanks() {
  return (
    <>
      <Helmet>
        <title>Supporters | Build invoices for your business in no time.</title>
        <meta
          name="description"
          content="Invoicetor is a free invoicing app for small businesses. Build invoices for your business in no time."
        />
      </Helmet>
      <Container maxW={'5xl'} mt={5}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 3, md: 5 }}
          pt={{ base: 20, md: 36 }}
          pb={{ base: 10, md: 33 }}
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
            <Text as={'span'} fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
              Thank you 💗
            </Text>
          </Heading>
        </Stack>

        <Stack flex={1} spacing={{ base: 5, md: 8 }}>
          <Text fontSize={'1.3rem'} align="start">
            We are truly grateful to all the wonderful humans and companies for
            supporting our open source work on {''}
            <Link
              href="https://github.com/sponsors/wh0sumit"
              target={'_blank'}
              rel={'noopener noreferrer'}
              bgGradient="linear(to-l, yellow.400, purple.400)"
              bgClip="text"
              _focus={{
                outline: 'none',
              }}
              fontWeight={500}
            >
              Github Sponsors.
            </Link>{' '}
            Become a sponsor and support us to keep Invoicetor free and open
            source forever.
          </Text>{' '}
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            align="start"
            fontSize={'1.3rem'}
          >
            <Text>Monthly Top Supporters 🐱‍👤</Text>
          </Heading>
          <Flex>
            <Box rounded={'md'} my={2}>
              {MonthlySupporters.length > 1
                ? MonthlySupporters.map(supporter => (
                    <SupporterCard
                      key={supporter.name}
                      name={supporter.name}
                      profile={supporter.profile}
                      github={supporter.github}
                    />
                  ))
                : 'Support us to become a monthly top supporter 🤝'}
            </Box>
          </Flex>{' '}
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            align="start"
            fontSize={'1.3rem'}
          >
            <Text>Yearly Top Supporters 🦄</Text>
          </Heading>
          <Flex>
            <Box rounded={'md'} my={3}>
              {YearlySupporters.length > 0
                ? YearlySupporters.map(supporter => (
                    <SupporterCard
                      key={supporter.name}
                      name={supporter.name}
                      profile={supporter.profile}
                      github={supporter.github}
                    />
                  ))
                : 'Support us to become a yearly top supporter ⭐'}
            </Box>
          </Flex>
        </Stack>
        {/* <Connect /> */}
      </Container>
    </>
  );
}
