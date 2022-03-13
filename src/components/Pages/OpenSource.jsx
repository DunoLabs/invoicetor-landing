import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';

export default function OpenSource() {
  return (
    <>
      <Container maxW={'4xl'} mt={10}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 3, md: 5 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading fontWeight={700} fontSize="6xl">
            <Text
              as={'span'}
              bgGradient="linear(to-l,purple.400, yellow.400)"
              bgClip="text"
            >
              Community & Collaboration
            </Text>
            <Text fontWeight={'normal'} my="1rem" fontSize={'lg'}>
              Invoicetor is a no-code platform where business owners can create
            </Text>
          </Heading>

          <Text fontSize={'lg'} align="start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            nesciunt aspernatur eligendi consequuntur vero veritatis consequatur
            recusandae omnis, iste, pariatur facere id ipsam reiciendis laborum.
            Non accusamus eveniet ratione eum, ab sequi! Distinctio deleniti
            nobis possimus quisquam impedit provident sed numquam officia
            laborum amet pariatur qui culpa molestias aliquid natus aut nulla
            laboriosam, necessitatibus accusantium, recusandae cum repellat
            error ullam. Voluptatibus, maiores magnam consequuntur rerum,
            molestiae quo, hic pariatur possimus adipisci nemo recusandae
            expedita! Excepturi omnis similique magni expedita neque itaque
            saepe ipsa quia laborum accusantium vitae placeat accusamus sit
            delectus iste nemo quidem, natus ullam adipisci. Accusamus, placeat
            ab.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
