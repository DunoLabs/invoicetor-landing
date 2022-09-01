import { NavLink } from 'react-router-dom';
import {
  Container,
  Text,
  Box,
  Link,
  Center,
  Button,
  Image,
  VStack,
} from '@chakra-ui/react';
import { SponsorCard } from './Sponsor';

import { FiArrowLeft } from 'react-icons/fi';
export default function NotFound() {
  return (
    <Container maxW={'6xl'} mt={36}>
      <Center py="8" flexWrap={{ base: 'wrap-reverse', lg: 'nowrap' }}>
        <Box flexBasis="50%" alignItems="flex-start">
          <Text
            as="h1"
            fontSize={{ base: '4xl', lg: '6xl' }}
            fontWeight="bold"
            letterSpacing="tight"
            mb="2"
          >
            Not Found :(
          </Text>
          <Text fontSize={{ base: 'lg', lg: '2xl' }} fontWeight="medium" mb="8">
            Error 404: We could not find the page you were looking for.
          </Text>
          <Text mb="4" fontSize={{ base: 'sm', lg: 'md' }}>
            This may happen if the page you&lsquo;re looking for either does not
            exist or has been moved to a different location.
          </Text>

          <Button
            color="white"
            bg="purple.400"
            _hover={{
              bg: 'purple.500',
            }}
            leftIcon={<FiArrowLeft />}
            mb="8"
            as={NavLink}
            to="/"
          >
            Return Home
          </Button>

          <Text mb="4" fontSize={{ base: 'sm', lg: 'md' }}>
            If you think this is a bug, please{' '}
            <Link
              href="https://github.com/dunolabs/invoicetor-landing/issues/new"
              isExternal
              color="purple.400"
              _focus={{
                outline: 'none',
              }}
            >
              report it here
            </Link>
            .
          </Text>
        </Box>
        <Center flexBasis={{ md: '50%' }}>
          <VStack>
            <Image
              src="https://res.cloudinary.com/invoicetor/image/upload/v1661998439/search_pmblud.gif"
              alt="404 Not Found"
              boxSize={{ base: '183', md: '228', lg: '550' }}
            />
          </VStack>
        </Center>
      </Center>
      <SponsorCard />
    </Container>
  );
}
