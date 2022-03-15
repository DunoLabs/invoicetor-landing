import Editor from '../../Organism/Editor/Editor';
import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';
export default function OneTimeEditor() {
  return (
    <>
      <Container maxW={'4xl'} mt={5}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 3, md: 5 }}
          pt={{ base: 20, md: 36 }}
          pb={{
            base: 20,
            md: 30,
          }}
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
            >
              One-Time Free Editor
            </Text>
          </Heading>
          <Text fontSize={'1.5rem'} align="start">
            This is a one time free editor for invoicetor. You can use it to
            create invoices and send them to your customers, for more features
            like this you have to sign up.
          </Text>{' '}
        </Stack>
      </Container>
      <Container maxW={'6xl'} my={5}>
        <Box
          as={'div'}
          p={{
            base: 5,
            md: 10,
          }}
          border={'1px solid'}
          borderWidth={'4px'}
          borderColor="gray.200"
          borderRadius={'3xl'}
        >
          <Editor />
        </Box>
      </Container>
    </>
  );
}
