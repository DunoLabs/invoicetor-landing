import {
  Container,
  Stack,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Center,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
const Developers = [
  {
    name: 'Sumit Singh',
    image: `https://avatars.githubusercontent.com/u/76095902?v=4`,
    post: 'Developer & Desginer',
  },
  {
    name: 'Riya Nachwani',
    image: `https://avatars.githubusercontent.com/u/89143449?v=4`,
    post: 'Developer & Desginer',
  },
];

export default function Connect() {
  return (
    <>
      <Helmet>
        <title>Connect | Build invoices for your business in no time.</title>
      </Helmet>
      <Container
        maxW={'6xl'}
        my={{
          base: '10',
          md: '10',
        }}
        p={{ base: '1rem', md: '2rem' }}
        border={'1px solid'}
        borderWidth={'4px'}
        borderColor="gray.200"
        borderRadius={'3xl'}
      >
        <Stack as={Box} textAlign={'center'} spacing={{ base: 3, md: 2 }}>
          <Heading fontWeight={700} fontSize="4xl" id="connect">
            Team Behind Invoicetor ✨
          </Heading>
          <Text>Meet the team behind Invoicetor and get in touch with us.</Text>
        </Stack>
        <Center>
          <Stack as={Box} textAlign={'center'} spacing={{ base: 3, md: 10 }}>
            <SimpleGrid
              my={{
                base: '1rem',
                md: '2rem',
              }}
              templateColumns={{ sm: '1fr', md: '3fr 3fr ' }}
              spacing={8}
            >
              {Developers.map(developers => (
                <Flex
                  p={{
                    base: '1rem',
                    md: '2rem',
                  }}
                  borderWidth={'2px'}
                  style={{
                    borderRadius: '100px 40px 40px 100px',
                  }}
                >
                  <Image
                    border="4px solid"
                    borderColor={'gray.200'}
                    boxSize="70px"
                    borderRadius="full"
                    objectFit="cover"
                    src={developers.image}
                  />

                  <Text
                    fontWeight={600}
                    alignSelf="center"
                    align="start"
                    mx={5}
                  >
                    {developers.name}
                    <br />
                    <Text fontSize="sm" color="gray.500" align="start">
                      {developers.post}
                    </Text>
                    {/* <Text align="start" my="1">
                  <FaIcons.FaTwitter size={'1.2rem'} />
                </Text> */}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Stack>
        </Center>
      </Container>
    </>
  );
}
