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
              fontSize={{
                base: '2.5rem',
                md: '3.5rem',
              }}
            >
              Sponsor Us !
            </Text>
          </Heading>
          <Text fontSize={'1.5rem'} align="start">
            Invoicetor helps business holder to build their invoices in no time
            with a simple and easy to use platform, it's also free and we wish
            to keep it free, forever.
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
              <Link
                href="mailto:
                   dunolabs@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
               dunolabs@gmail.com{' '}
              </Link>
            </Text>
          </Text>
          <Link
            href="https://www.buymeacoffee.com/wh0sumit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
              alt="Buy Me A Coffee"
              style={{ height: '60px', width: '217px', borderRadius: '15px' }}
            />
          </Link>
        </Stack>
      </Container>
    </>
  );
}

function SponsorCard() {
  return (
    <Flex
      p={{
        base: 3,
        md: 10,
      }}
      m={{
        base: 3,
        md: 0,
      }}
      align={'center'}
      justify={'center'}
    >
      <Container
        maxW={{
          base: '6xl',
          sm: '8xl',
          lg: '6xl',
        }}
        bg={useColorModeValue('white', 'gray.50')}
        boxShadow={'lg'}
        rounded={'2xl'}
        p={10}
        direction={'column'}
      >
        <Heading
          textAlign={'center'}
          mb={{
            base: 3,
            lg: 18,
          }}
          color={'black'}
        >
          Sponsor Invoicetor 💜
        </Heading>

        <Flex
          justifyContent={'center'}
          flexDir={'column'}
          alignItems={'center'}
        >
          <Text
            maxW={'4xl'}
            fontSize={{ base: '16px', sm: '18px', lg: '20px' }}
            mb={{
              base: 3,
              md: 18,
            }}
            color={'black'}
          >
            Invoicetor helps every business holder to build their invoices in no
            time with a simple and easy to use platform, it's also free and we
            wish to keep it free, forever.
          </Text>
          <Text
            maxW={'4xl'}
            fontSize={{ base: '16px', sm: '18px', lg: '20px' }}
            mb={{
              base: 5,
              md: 18,
            }}
            color={'black'}
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
              as={'a'}
              target="_blank"
              href="https://www.buymeacoffee.com/wh0sumit"
              rounded={'lg'}
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
      </Container>
    </Flex>
  );
}

export { Sponsor, SponsorCard };
