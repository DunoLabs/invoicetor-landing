import {
  Box,
  Button,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Circle,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import * as FaIcons from 'react-icons/fa';
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, href }) => {
  return (
    <Circle
      bg={useColorModeValue('gray.800', 'gray.200')}
      color={useColorModeValue('gray.100', 'gray.700')}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('gray.700', 'gray.100'),
      }}
      target={'_blank'}
    >
      {children}
    </Circle>
  );
};

export default function Footer() {
  return (
    <>
      <Box
        bg={useColorModeValue('purple.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        mt={{
          base: 4,
          md: 10,
        }}
      >
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}
          >
            <Stack
              spacing={2}
              align={{
                sm: 'center',
                md: 'start',
              }}
            >
              <Text fontSize={'4xl'}>Invoicetor</Text>
              <Text fontSize={'sm'}>
                Build invoices for your business in no time.
              </Text>
            </Stack>
            <Stack
              align={{
                sm: 'center',
                md: 'start',
              }}
            >
              <ListHeader align={'start'}>Product</ListHeader>
              <Link
                as={NavLink}
                to="about"
                _focus={{
                  outline: 'none',
                }}
              >
                About Us
              </Link>
              <Link
                as={NavLink}
                to="features#features"
                _focus={{
                  outline: 'none',
                }}
              >
                Features
              </Link>
              <Link
                as={NavLink}
                to={'releases'}
                _focus={{
                  outline: 'none',
                }}
              >
                Releases
              </Link>
              <Link
                as={NavLink}
                to={'sponsor'}
                _focus={{
                  outline: 'none',
                }}
              >
                Donate
              </Link>{' '}
              <Link
                as={NavLink}
                to={'thanks'}
                _focus={{
                  outline: 'none',
                }}
              >
                Supporters
              </Link>
            </Stack>

            <Stack
              align={{
                sm: 'center',
                md: 'start',
              }}
            >
              <ListHeader>Support</ListHeader>
              <Link
                as={NavLink}
                to={'help-center'}
                _focus={{
                  outline: 'none',
                }}
              >
                Help Center
              </Link>

              {/* <Link
                href={'#'}
                _focus={{
                  outline: 'none',
                }}
              >
                Terms of Service
              </Link>
              <Link
                href={'#'}
                _focus={{
                  outline: 'none',
                }}
              >
                Legal
              </Link>
              <Link
                href={'#'}
                _focus={{
                  outline: 'none',
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href={'#'}
                _focus={{
                  outline: 'none',
                }}
              >
                Status
              </Link> */}
            </Stack>

            <Stack
              align={{
                sm: 'center',
                md: 'start',
              }}
            >
              <ListHeader>Community</ListHeader>
              <Stack
                direction={{
                  sm: 'column',
                  md: 'row',
                }}
                gap={2}
                spacing={2}
              >
                {' '}
                <Button
                  rounded={'xl'}
                  bg={'purple.400'}
                  color={'white'}
                  _hover={{ bg: 'purple.500' }}
                  variant="solid"
                  size="sm"
                  as={'a'}
                  target="_blank"
                  href="https://github.com/dunolabs/invoicetor-landing"
                  rightIcon={<FaIcons.FaGithub />}
                >
                  Contribute
                </Button>{' '}
                <Button
                  rounded={'xl'}
                  colorScheme="purple"
                  variant="outline"
                  size="sm"
                  as={'a'}
                  target="_blank"
                  href="https://github.com/dunolabs/invoicetor-landing"
                  rightIcon={<FaIcons.FaStar />}
                >
                  Star us on GitHub
                </Button>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}
          >
            <Text>
              © 2022{' '}
              <Link
                target={'_blank'}
                href="https://github.com/dunolabs"
                fontWeight={'bold'}
                _focus={{
                  outline: 'none',
                }}
              >
                @Dunolabs{' '}
              </Link>
              | open-source software.
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton href={'https://github.com/dunolabs'}>
                <FaIcons.FaGithub />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
