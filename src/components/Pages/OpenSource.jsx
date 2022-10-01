import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Button,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import Helmet from 'react-helmet';
import * as FaIcons from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
export default function OpenSource() {
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
            <Text
              bgGradient="linear(to-l, yellow.400, purple.400)"
              bgClip="text"
              fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
            >
              Open Source & Collaboration
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
          <Text
            align="start"
            bg={useColorModeValue('purple.50', 'purple.900')}
            color={useColorModeValue('purple.400', 'purple.100')}
            p="4"
            rounded="xl"
            my="5"
            fontSize={'lg'}
          >
            we are participating in{' '}
            <span>
              <Link
                target={'_blank'}
                href="https://hacktoberfest.digitalocean.com/"
                isExternal
                _focus={{
                  outline: 'none',
                }}
                color={useColorModeValue('yellow.400', 'yellow.200')}
              >
                Hacktoberfest 2022
              </Link>
            </span>{' '}
            contribute to our codebases and help us build a better product for
            everyone.
            <br />
            <Button
              as={NavLink}
              to="/hacktoberfest"
              rounded={'lg'}
              bg={useColorModeValue('gray.900', 'white') || 'gray.200'}
              color={useColorModeValue('gray.100', 'gray.800')}
              _hover={{
                bg: useColorModeValue('gray.800', 'gray.100'),
              }}
              _focus={{
                outline: 'none',
              }}
              mt="4"
            >
              Hacktoberfest 2022 💛
            </Button>
          </Text>{' '}
        </Stack>
      </Container>
    </>
  );
}
