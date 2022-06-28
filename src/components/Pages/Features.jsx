import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Divider,
} from '@chakra-ui/react';

export default function OpenSource() {
  const featuresDetails = [
    {
      title: 'One-Time-Editor',
      description: `   Invoices plays an important part in the day to day operations of any
      business and is generally termed as bills. This feature can assist
      companies to create them in not only correct format but also with
      all the essential elements.`,
    },
    {
      title: 'Invoice Format In PDF',
      description: `  In form of pdf invoices can be generated which will help in
      documenting the details of every transaction and make tax filing
      easier.`,
    },
    {
      title: ' Branding invoices with logo',
      description: `   While creating invoice, companies can add their business logo,
      client information and items as they wish such as products with
      fixed prices.`,
    },
    {
      title: ' Digital Signature',
      description: `            Invoices can be digitally signed by companies and company can also
      add seal of approval to the invoice. Digital Signature is important
      in the day to day operations of any business and is generally termed
      as bills. This feature can assist companies to create them in not
      only correct format but also with all the essential elements.`,
    },
    {
      title: 'Create Multiple Invoices',
      description: `        Users can create multiple invoices for the same client and multiple
      clients, which will help in creating a more efficient and efficient
      way of dealing with the clients.`,
    },
    {
      title: '    Mutiple Invoice Templates & Designs',
      description: `      Users can create multiple invoice templates and designs and choose
      from them while creating invoices. This will help in creating
      different invoice designs for different clients.`,
    },
  ];

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
          {featuresDetails.map((feature, index) => (
            <>
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
                {feature.title}
              </Text>{' '}
              <Text
                fontSize={'1.5rem'}
                align="start"
                mb={{
                  base: 0,
                  md: 15,
                }}
              >
                {feature.description}
              </Text>
              <Divider borderColor={'gray.400'} borderStyle={'solid'} />{' '}
            </>
          ))}
        </Stack>
      </Container>
    </>
  );
}
