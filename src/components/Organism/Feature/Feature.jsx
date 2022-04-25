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
  Link,
} from '@chakra-ui/react';
import DesignPNG from '../../../assets/illustrations/design.png';
import MultiplePNG from '../../../assets/illustrations/multiple.png';
import TogglePNG from '../../../assets/illustrations/toggle.png';
import oneTimePNG from '../../../assets/illustrations/one-time.png';
import ResizePNG from '../../../assets/illustrations/resize.png';
import { NavLink } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Features = [
  {
    imageUrl: `${MultiplePNG}`,
    Title: 'Create Multiple Invoices',
    Description:
      'Invoices can be created multiple times, and account data can be used to create different invoices for different clients.',
    visit: '#',
  },
  {
    imageUrl: `${oneTimePNG}`,
    Title: 'One Time Editor',
    Description:
      '   This is a one time free editor for invoicetor. You can use it to create invoices and download them as PDF.',
    visit: '/onetimeeditor',
  },
  {
    imageUrl: `${DesignPNG}`,
    Title: 'Better Design Control',
    Description:
      "Your invoices will be completely customizable using the design panel. Choose a color that matches your company's style. Modify the spacing to accommodate the amount of information you want.",
    visit: '#',
  },
  {
    imageUrl: `${TogglePNG}`,
    Title: 'Easy Toggle Control',
    Description:
      'Keep the data, but hide the content with a click. Easy toggle support allows you to put your best foot forward.',

    visit: '#',
  },
  {
    imageUrl: `${ResizePNG}`,
    Title: 'Resize Control With Slider',
    Description:
      'You can upload your company logo and use it in the invoice. You can easily change the logo size using the slider.',
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
          <Text
            maxW={'3xl'}
            fontSize={{ base: '16px', sm: '18px', lg: '20px' }}
            color={'gray.400'}
          >
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
          <Flex flex={1} position={'relative'} w={'full'}>
            <Box
              position={'relative'}
              rounded={'3xl'}
              width={'full'}
              p={10}
              boxShadow={'lg'}
              bg={'white'}
            >
              <Image
                alt={'Hero Image'}
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
              <Text>{feature.Title}</Text>
            </Heading>
            <Text
              align="start"
              color={'gray.400'}
              fontSize={{ base: '16px', sm: '18px', lg: '20px' }}
            >
              {feature.Description}
            </Text>
            <Stack direction="row" spacing={2} align="center">
              <Link
                as={NavLink}
                to={feature.visit}
                style={{
                  textDecoration: 'none',
                }}
              >
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="purple"
                  variant="outline"
                  borderRadius={'lg'}
                  size="sm"
                  as={'NavLink'}
                  to={feature.visit}
                >
                  Learn More
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Container>
  );
}
