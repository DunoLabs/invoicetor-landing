import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  Link,
  Square,
} from '@chakra-ui/react';

import * as RiIcons from 'react-icons/ri';

const FeaturesDetails = [
  {
    imageUrl: `https://res.cloudinary.com/invoicetor/image/upload/v1661990336/bubble-gum-workflow_wk6qyr.png`,
    Title: 'Create Multiple Invoices',
    Description:
      'Invoices can be created multiple times, and account data can be used to create different invoices for different clients.',
    visit: '/features#multipleinvoice',
    icon: <RiIcons.RiLayoutGridFill />,
    iconBg: 'yellow.100',
    iconColor: 'yellow.500',
  },
  {
    imageUrl: `https://res.cloudinary.com/invoicetor/image/upload/v1661990634/bubble-gum-female-designer-working-on-laptop_uyccpu.png`,
    Title: 'Better Designs & Templates',
    Description:
      "Your invoices will be completely customizable using the design panel. Choose a color that matches your company's style. Modify the spacing to accommodate the amount of information you want.",
    visit: '/features#design',
    icon: <RiIcons.RiPaletteLine />,
    iconBg: '#e5ecff',
    iconColor: '#00aaff',
  },
  {
    imageUrl: `https://res.cloudinary.com/invoicetor/image/upload/v1661990547/bubble-gum-programming_be2e9x.png`,
    Title: 'Easy Control',
    Description:
      'Keep the data, but hide the content with a click. Easy toggle support allows you to put your best foot forward.',

    visit: '/features',
    icon: <RiIcons.RiShapeFill />,
    iconBg: 'red.100',
    iconColor: 'red.500',
  },
];

const FeatureCard = ({
  text,
  icon,
  iconBg,
  iconColor,
  active,
  setActive,
  cardNo,
}) => {
  const color1 = useColorModeValue('gray.900', 'gray.700');
  const activeColor = active === cardNo ? color1 : 'gray.500';
  return (
    <>
      <Stack
        direction={'row'}
        align={'center'}
        cursor={'pointer'}
        bg={active === cardNo ? 'purple.50' : 'transparent'}
        p={'5'}
        rounded={'xl'}
        onClick={() => {
          setActive(cardNo);
        }}
      >
        <Flex
          w={10}
          h={10}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}
          color={iconColor}
          fontSize={'1.2rem'}
          me={2}
        >
          {icon}
        </Flex>
        <Text
          align="start"
          fontWeight={600}
          fontSize={{ base: 'md', lg: 'lg' }}
          color={activeColor}
        >
          {text}
        </Text>
      </Stack>
    </>
  );
};

export default function Feature() {
  const [active, setActive] = useState(0);
  return (
    <Container maxW={'6xl'} my={'7rem'}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        alignItems={'center'}
      >
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'purple.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('purple.50', 'purple.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Features
          </Text>
          <Heading
            align="start"
            fontSize={{
              base: '1.5rem',
              md: '2.3rem',
            }}
          >
            {' '}
            Build Better, Faster & Beautiful Invoices in Minutes ⚡
          </Heading>

          <Text
            align="start"
            color={'gray.400'}
            fontSize={{
              base: '16px',
              sm: '18px',
            }}
          >
            Invoicetor helps you to create better, faster and beautiful invoices
            in minutes.
          </Text>

          <Stack spacing={4} my={4}>
            {FeaturesDetails.map((item, index) => {
              return (
                <>
                  <FeatureCard
                    key={index}
                    text={item.Title}
                    active={active}
                    cardNo={index}
                    setActive={setActive}
                    icon={item.icon}
                    iconBg={item.iconBg}
                    iconColor={item.iconColor}
                  />
                </>
              );
            })}
            <Link
              as={NavLink}
              to={'/features'}
              align="start"
              mt={'2'}
              fontSize={{
                base: '16px',
                sm: '18px',
              }}
              color={useColorModeValue('purple.500', 'purple.200')}
              _focus={{
                outline: 'none',
              }}
            >
              Learn More...
            </Link>
          </Stack>
        </Stack>
        <Flex display={'block'} alignItems={'center'}>
          <Box
            rounded={'3xl'}
            boxShadow={'sm'}
            bg={'white'}
            border={'6px solid'}
            borderColor={'purple.200'}
            transition={'all 0.3s ease-in-out'}
            h="100%"
          >
            <Square size={'lg'} color="white">
              {/* show active content image   */}
              {FeaturesDetails.map((item, index) => {
                return (
                  <Image
                    alt={'feature image'}
                    src={active === index && item.imageUrl}
                    display={active === index ? 'block' : 'none'}
                    loading={'eager'}
                  />
                );
              })}
            </Square>
          </Box>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
