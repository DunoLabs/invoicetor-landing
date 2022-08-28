import {
  Box,
  Flex,
  Heading,
  Container,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import Helmet from 'react-helmet';

import WaitlistForm from '../Molecules/WaitlistForm';

export default function JoinWaitlist() {
  return (
    <>
      <Helmet>
        <title>
          Join Waitlist | Build invoices for your business in no time.
        </title>
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
            <Text
              as={'span'}
              bgGradient="linear(to-l,purple.400, yellow.400)"
              bgClip="text"
              fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
            >
              Join the Waitlist
            </Text>
            <Text
              align="start"
              color={'gray.500'}
              fontSize={{ base: '18px', sm: '18px', lg: '24px' }}
              fontWeight={'normal'}
            >
              All the features of Invoicetor are available in the free version
              ✨
            </Text>
          </Heading>
          <Text
            fontSize={{ base: '18px', sm: '18px', lg: '24px' }}
            align="start"
          >
            Invoicetor is going to be open for all soon. We are currently in the
            process of building our first version. We will be releasing a new
            version soon.
          </Text>{' '}
          <Text
            fontSize={{ base: '18px', sm: '18px', lg: '24px' }}
            align="start"
          >
            In the meantime, you can join the waitlist to be notified when we
            release a new version. We will also be sending you a link to the
            beta version. Thank you for your patience 🌱
          </Text>
        </Stack>

        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{
            base: 5,
            md: 10,
          }}
          pb={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex flex={1} position={'relative'} w={'full'}>
            <Box
              position={'relative'}
              rounded={'3xl'}
              width={'full'}
              p={10}
              bg={'white'}
              boxShadow={'lg'}
            >
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                rounded={'2xl'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://res.cloudinary.com/invoicetor/image/upload/v1661564364/join-waitlist_vgjgt6.png'
                }
                loading={'lazy'}
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 8 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
              align="start"
            >
              <Text>Get early access !</Text>
            </Heading>
            <Text
              align="start"
              color={'gray.400'}
              fontSize={{ base: '14px', sm: '18px', lg: '18px' }}
            >
              We will be releasing a new version soon.
              <br /> Get early access to the beta version and limited edition
              templates for your business.
            </Text>
            <WaitlistForm />
          </Stack>
        </Stack>
        {/* <Connect /> */}
      </Container>
    </>
  );
}
