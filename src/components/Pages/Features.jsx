import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Divider,
} from '@chakra-ui/react';

export default function OpenSource() {
  return (
    <>
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
              as={'span'}
              bgGradient="linear(to-l,purple.400, yellow.400)"
              bgClip="text"
              id="features"
            >
              Features
            </Text>
            <Text
              align="start"
              color={'gray.400'}
              fontSize={{ base: '16px', sm: '18px', lg: '20px' }}
              fontWeight={'normal'}
            >
              All the features of Invoicetor are available in the free version
              ✨
            </Text>
          </Heading>
          <Text
            id="one-time-editor"
            fontSize={'1.9rem'}
            fontWeight={600}
            align="start"
          >
            <Text
              as="span"
              fontWeight={'900'}
              bgGradient="linear(to-l,purple.400, yellow.400)"
              bgClip="text"
            >
              #
            </Text>{' '}
            One-Time-Editor{' '}
          </Text>{' '}
          <Text
            fontSize={'1.5rem'}
            align="start"
            mb={{
              base: 0,
              md: 15,
            }}
          >
            Invoices plays an important part in the day to day operations of any
            business and is generally termed as bills. This feature can assist
            companies to create them in not only correct format but also with
            all the essential elements.
          </Text>
          <Divider borderColor={'gray.400'} borderStyle={'solid'} />
          <Text fontSize={'1.9rem'} fontWeight={600} align="start">
            <Text
              as="span"
              fontWeight={'900'}
              bgGradient="linear(to-l,purple.400, yellow.400)"
              bgClip="text"
            >
              #
            </Text>{' '}
            Invoice Format In PDF
          </Text>{' '}
          <Text
            fontSize={'1.5rem'}
            align="start"
            mb={{
              base: 0,
              md: 15,
            }}
          >
            In form of pdf invoices can be generated which will help in
            documenting the details of every transaction and make tax filing
            easier.
          </Text>
          <Divider borderColor={'gray.400'} borderStyle={'solid'} />
          <Text fontSize={'1.9rem'} fontWeight={600} align="start">
            <Text
              as="span"
              fontWeight={'900'}
              bgGradient="linear(to-l,purple.400, yellow.400)"
              bgClip="text"
            >
              #
            </Text>{' '}
            Branding invoices with logo
          </Text>{' '}
          <Text
            fontSize={'1.5rem'}
            align="start"
            mb={{
              base: 0,
              md: 15,
            }}
          >
            While creating invoice, companies can add their business logo,
            client information and items as they wish such as products with
            fixed prices.
          </Text>
          <Divider borderColor={'gray.400'} borderStyle={'solid'} />
          <Text
            fontSize={'1.9rem'}
            fontWeight={600}
            align="start"
            id="multipleinvoice"
          >
            <Text
              as="span"
              fontWeight={'900'}
              bgGradient="linear(to-l,purple.400, yellow.400)"
              bgClip="text"
            >
              #
            </Text>{' '}
            Create Multiple Invoices
          </Text>{' '}
          <Text
            fontSize={'1.5rem'}
            align="start"
            mb={{
              base: 0,
              md: 15,
            }}
          >
            Users can create multiple invoices for the same client and multiple
            clients, which will help in creating a more efficient and efficient
            way of dealing with the clients.
          </Text>
          <Divider borderColor={'gray.400'} borderStyle={'solid'} />
          <Text fontSize={'1.9rem'} fontWeight={600} align="start" id="design">
            <Text
              as="span"
              fontWeight={'900'}
              bgGradient="linear(to-l,purple.400, yellow.400)"
              bgClip="text"
            >
              #
            </Text>{' '}
            Mutiple Invoice Templates & Designs
          </Text>{' '}
          <Text
            fontSize={'1.5rem'}
            align="start"
            mb={{
              base: 0,
              md: 15,
            }}
          >
            Users can create multiple invoice templates and designs and choose
            from them while creating invoices. This will help in creating
            different invoice designs for different clients.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
