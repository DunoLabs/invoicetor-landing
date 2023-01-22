import { Box, Heading, Container, Text, Stack, Button } from '@chakra-ui/react';
import Helmet from 'react-helmet';
import * as FaIcons from 'react-icons/fa';
export default function OpenSource({ title, description, ...props }) {
  return (
    <>
      <Helmet>
        <title>
          Open Source | Build invoices for your business in no time.
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
            <Text fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
              Open Source & Collaboration 🤝
            </Text>
          </Heading>
          <Text fontSize={'1.3rem'} align="start">
            We are open to collaboration and we are always looking for new ideas
            to improve our product, we share our code on Github, and if you have
            any suggestions, please feel free to reach out to us. we love open
            source and we know the value of collaboration.
          </Text>{' '}
          <Text
            fontSize={'1.3rem'}
            align="start"
            mb={{
              base: 0,
              md: 15,
            }}
          >
            We started this project with the goal of making invoicetor a free
            and open for everyone platform, It's a great way to create invoices
            for your business. We learnt a lot from the open source community
            and now it's our time to give something back to the community and to
            the world 💜
          </Text>
          <Stack
            direction={{
              sm: 'column',
              md: 'row',
            }}
            gap={3}
            spacing={4}
          >
            {' '}
            <Button
              rounded={'lg'}
              bg={'purple.400'}
              color={'white'}
              _hover={{ bg: 'purple.500' }}
              variant="solid"
              _focus={{
                outline: 'none',
              }}
              href="
              https://github.com/DunoLabs/invoicetor-landing"
              as="a"
              target="_blank"
              rightIcon={<FaIcons.FaGithub />}
            >
              Contribute
            </Button>{' '}
            <Button
              rounded={'lg'}
              colorScheme="purple"
              variant="outline"
              _focus={{
                outline: 'none',
              }}
              href="
              https://github.com/DunoLabs/invoicetor-landing"
              as="a"
              target="_blank"
              rightIcon={<FaIcons.FaStar />}
            >
              Star us on GitHub
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
