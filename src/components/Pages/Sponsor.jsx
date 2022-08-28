import Helmet from 'react-helmet';
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Link,
  Button,
  useColorModeValue,
  Flex,
  HStack,
  Highlight,
} from '@chakra-ui/react';

function Sponsor() {
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
              fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
            >
              Sponsor Invoicetor
            </Text>
          </Heading>
          <Text fontSize={'1.3rem'} align="start">
            <Highlight
              query="free"
              styles={{ px: '1', py: '1', bg: 'orange.100' }}
            >
              Invoicetor helps business holder to build their invoices in no
              time with a simple and easy to use platform, it's also free and we
              wish to keep it free, forever.
            </Highlight>
          </Text>{' '}
          <Text
            fontSize={'1.3rem'}
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
              <Link
                href="mailto:
                   dunolabs@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                fontWeight={'medium'}
              >
                dunolabs@gmail.com{' '}
              </Link>
            </Text>
          </Text>
          <HStack>
            <Button
              as={'a'}
              target="_blank"
              href="https://github.com/sponsors/wh0sumit"
              rounded={'xl'}
              size={'lg'}
              bg={'purple.400'}
              color={'white'}
              _hover={{
                bg: 'purple.500',
              }}
              _focus={{
                outline: 'none',
              }}
            >
              Buy us a coffee ☕
            </Button>
          </HStack>
        </Stack>
      </Container>
    </>
  );
}

function SponsorCard() {
  return (
    <Container maxW={'6xl'} my={'7rem'} rounded={'2xl'}>
      <Box
        bg={useColorModeValue('gray.900', 'gray.50')}
        p={10}
        borderRadius="20px"
      >
        <Heading
          align="start"
          mb={{
            base: '10',
            lg: '10',
          }}
          color={useColorModeValue('white', 'gray.900')}
        >
          Let’s do this together!
        </Heading>
        <Flex justifyContent={'start'} flexDir={'column'} alignItems={'sstart'}>
          <Text
            maxW={'4xl'}
            fontSize={'1.3rem'}
            mb={{
              base: 3,
              md: 18,
            }}
            color={useColorModeValue('white', 'gray.900')}
            align="start"
          >
            Invoicetor helps people to create invoices for their business in no
            time, it's also <Highlight color={'purple.400'}>free</Highlight> and
            we wish to keep it free, forever.
          </Text>
          <Text
            maxW={'4xl'}
            align="start"
            fontSize={'1.3rem'}
            mb={{
              base: 5,
              md: 18,
            }}
            color={useColorModeValue('white', 'gray.900')}
          >
            So, It'll be not possible without your support, we need your help to
            make Invoicetor a success. If you are a business owner or
            individual, and Invoicetor makes your life easier and if you are
            interested in sponsoring us, please contact us at{' '}
            <Text as={'span'} textDecoration={'underline'}>
              <Link
                href="mailto:
                   dunolabs@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                fontWeight={'medium'}
              >
                dunolabs@gmail.com{' '}
              </Link>
            </Text>
          </Text>
          <Text
            fontSize={'1.5rem'}
            align="start"
            bgGradient="linear(to-l,purple.400, yellow.400)"
            bgClip="text"
            fontWeight={'700'}
            mb={{
              base: 0,
              md: 15,
            }}
          >
            OR #
          </Text>
          <HStack>
            <Button
              my={'2'}
              as={'a'}
              target="_blank"
              href="https://github.com/sponsors/wh0sumit"
              rounded={'xl'}
              size={'lg'}
              bg={'purple.400'}
              color={'white'}
              _hover={{
                bg: 'purple.500',
              }}
              _focus={{
                outline: 'none',
              }}
            >
              Buy us a coffee ☕
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
}

export { Sponsor, SponsorCard };
