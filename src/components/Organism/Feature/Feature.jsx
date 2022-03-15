import {
  Container,
  Stack,
  Center,
  Flex,
  Box,
  Heading,
  Button,
  Text,
  Image,
} from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';

const Features = [
  {
    imageUrl: 'http://via.placeholder.com/640x360',
    Title: 'Create Multiple Invoices',
    Description:
      'Invoices can be created multiple times, and account data can be used to create different invoices for different clients.',
    visit: '#',
  },
  {
    imageUrl: 'http://via.placeholder.com/640x360',
    Title: 'More & Better Design Control',
    Description:
      "Your invoices will be completely customizable using the design panel. Choose a color that matches your company's style. Modify the spacing to accommodate the amount of information you want.",
    visit: '#',
  },
  {
    imageUrl: 'http://via.placeholder.com/640x360',
    Title: 'Toggle Control',
    Description:
      'By using the easy toggle feature, you can hide and show content according to your needs!',
    visit: '#',
  },
];

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'6xl'} mt={1}>
      <Stack as={Box} textAlign={'center'} spacing={{ base: 3, md: 5 }}>
        <Heading fontWeight={700} fontSize="4xl" id="features">
          Here are some of the important features of invoicetor
        </Heading>
        <Center>
          <Text maxW={'3xl'}>
            Invoicetor is a no-code platform where business owners can create
            invoices for their business in no time.
          </Text>
        </Center>
      </Stack>

      {Features.map(feature => (
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Box
              position={'relative'}
              rounded={'3xl'}
              width={'full'}
              overflow={'hidden'}
              borderWidth={'4px'}
              borderColor="gray.200"
              p={10}
              bgGradient="linear(to-l,purple.400, yellow.400)"
            >
              <Image
                alt={'Hero Image'}
                boxShadow={'3xl'}
                fit={'cover'}
                align={'center'}
                rounded={'2xl'}
                w={'100%'}
                h={'100%'}
                src={feature.imageUrl}
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 8 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
              align="start"
            >
              <Text
                as={'span'}
                bgGradient="linear(to-l, yellow.400,purple.400)"
                bgClip="text"
              >
                {feature.Title}
              </Text>
            </Heading>
            <Text align="start" color={'gray.500'}>
              {feature.Description}
            </Text>
            <Stack direction="row" spacing={2} align="center">
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="purple"
                variant="outline"
                borderRadius={'lg'}
                size="sm"
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Container>
  );
}
