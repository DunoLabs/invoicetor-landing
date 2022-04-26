import Helmet from 'react-helmet';
import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';

export default function Sponsor() {
  return (
    <>
      <Helmet>
        <title>Sponsor | Build invoices for your business in no time.</title>
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
              Sponsor Us !
            </Text>
          </Heading>
          <Text fontSize={'1.5rem'} align="start">
            Invoicetor helps every business holder to build their invoices in no
            time with a simple and easy to use platform, it's also free and we
            wish to keep it free, forever.
          </Text>{' '}
          <Text
            fontSize={'1.5rem'}
            align="start"
            mb={{
              base: 0,
              md: 15,
            }}
          >
            So, It'll be not possible without your support, we need your help to
            make Invoicetor a success. If you are a business owner or
            individual, and Invoicetor makes your life easier and if you are
            interested in sponsoring us, please contact us at{' '}
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
            </Text>
          </Text>
          <a
            href="https://www.buymeacoffee.com/wh0sumit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
              alt="Buy Me A Coffee"
              style={{ height: '60px', width: '217px', borderRadius: '15px' }}
            />
          </a>
        </Stack>
      </Container>
    </>
  );
}
