import {
  Box,
  Link,
  useColorModeValue,
  Container,
  Text,
  Stack,
  Button,
  Image,
} from '@chakra-ui/react';
import * as FaIcons from 'react-icons/fa';
import Helmet from 'react-helmet';
export default function Hf() {
  return (
    <>
      <Helmet>
        <title>
          Hacktoberfest | Build invoices for your business in no time.
        </title>
        <meta
          name="description"
          content="Invoicetor is a free invoicing app for small businesses. Build invoices for your business in no time."
        />
      </Helmet>
      <Container maxW={'6xl'} mt={20}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 3, md: 5 }}
          py={{ base: 20 }}
        >
          <Link
            href="https://hacktoberfest.digitalocean.com/"
            target="_blank"
            mb={'3rem'}
            p={{
              base: '1rem',
              md: '2rem',
            }}
            rounded={{
              base: '2xl',
              md: '3xl',
            }}
            bgGradient="linear(to-l, yellow.100, purple.100)"
          >
            <Image
              src="https://res.cloudinary.com/invoicetor/image/upload/v1664524768/HF_djskfy.png"
              rounded={{
                base: '2xl',
                md: '3xl',
              }}
              _hover={{
                shadow: 'md',
              }}
            />
          </Link>
          <Text fontSize={'1.3rem'} align="start">
            Join us at Hacktoberfest 2022, hosted by{' '}
            <span>
              <Link
                target={'_blank'}
                href="https://digitalocean.com/"
                textDecor={'underline'}
                color={useColorModeValue('purple.500', 'purple.200')}
              >
                Digital Ocean
              </Link>
            </span>
            . Become a contributor to our codebase and earn your PR towards
            completing the Hacktoberfest challenge.
          </Text>{' '}
          <Text
            fontSize={'1.3rem'}
            align="start"
            my={{
              base: 0,
              md: '3rem',
            }}
          >
            Team{' '}
            <span>
              <Link
                target={'_blank'}
                textDecor={'underline'}
                href="https://hekors.tech"
                color={useColorModeValue('purple.500', 'purple.200')}
              >
                HEKORS
              </Link>
            </span>{' '}
            will guide you if you're a complete beginner and need some help with
            your first PR or any other issue related to the project. We will
            also be giving out some cool swags to the top contributors.
          </Text>
          <Stack
            direction={{
              sm: 'column',
              md: 'row',
            }}
            gap={3}
            my={'5'}
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
              bg={useColorModeValue('gray.900', 'white') || 'gray.200'}
              color={useColorModeValue('gray.100', 'gray.800')}
              _hover={{
                bg: useColorModeValue('gray.800', 'gray.100'),
              }}
              _focus={{
                outline: 'none',
              }}
              variant="outline"
              href="
              https://discord.gg/keG3d5F478"
              as="a"
              target="_blank"
              rightIcon={<FaIcons.FaDiscord />}
            >
              Join Team HEKORS
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
