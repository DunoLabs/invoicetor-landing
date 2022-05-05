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
  Link,
} from '@chakra-ui/react';

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
      <Container
        maxW={'6xl'}
        style={{
          marginTop: '2rem',
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
          <Text fontSize={'1.3rem'}>Sumit & Riya</Text>
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
                >
                  <Link
                    href="https://www.linkedin.com/in/wh0sumit"
                    target="_blank"
                    _focus={{
                      outline: 'none',
                    }}
                  >
                    <Image
                      border="4px solid"
                      borderColor="gray.200"
                      boxShadow={'lg'}
                      boxSize={'18rem'}
                      objectFit="cover"
                      src={developers.image}
                      borderRadius={'3xl'}
                    />
                  </Link>
                </Flex>
              ))}
            </SimpleGrid>
          </Stack>
        </Center>
      </Container>
    </>
  );
}
