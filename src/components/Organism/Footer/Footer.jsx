import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import * as FaIcons from 'react-icons/fa';
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('purple.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
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
              Create invoices for your business in no time.
            </Text>
          </Stack>
          <Stack
            align={{
              sm: 'center',
              md: 'start',
            }}
          >
            <ListHeader align={'start'}>Product</ListHeader>
            <Link href={'about'}>About Us</Link>
            <Link href={'features'}>Features</Link>
            <Link href={'releases'}>Releases</Link>
            <Link href={'sponsor'}>Sponsor</Link>
          </Stack>

          <Stack
            align={{
              sm: 'center',
              md: 'start',
            }}
          >
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
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
              spacing={2}
            >
              {' '}
              <Button
                borderRadius={'lg'}
                bg={'purple.400'}
                color={'white'}
                _hover={{ bg: 'purple.500' }}
                variant="solid"
                size="sm"
                href="
              #"
                rightIcon={<FaIcons.FaGithub />}
              >
                Contribute
              </Button>{' '}
              <Button
                borderRadius={'lg'}
                colorScheme="purple"
                variant="outline"
                size="sm"
                href="
              #"
                rightIcon={<FaIcons.FaStar />}
              >
                Star us on GitHub
              </Button>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
