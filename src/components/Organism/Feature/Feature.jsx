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

const FeaturesDetails = [
  {
    imageUrl: `https://ik.imagekit.io/thebugcommunity/bubble-gum-workflow_wk6qyr_YGuNhrc2d.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675100780986`,
    Title: 'Create Multiple Invoices',
    Description:
      'Invoices can be created multiple times, and account data can be used to create different invoices for different clients.',
    visit: '/features#multipleinvoice',
    icon: '📄',
    iconBg: 'yellow.100',
    iconColor: 'yellow.200',
  },
  {
    imageUrl: `https://ik.imagekit.io/thebugcommunity/bubble-gum-female-designer-working-on-laptop_uyccpu_0As2NTKh3U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675100781732`,
    Title: 'Better Designs & Templates',
    Description:
      "Your invoices will be completely customizable using the design panel. Choose a color that matches your company's style. Modify the spacing to accommodate the amount of information you want.",
    visit: '/features#design',
    icon: '🎨',
    iconBg: '#DEDFFE',
  },
  {
    imageUrl: `https://ik.imagekit.io/thebugcommunity/bubble-gum-programming_be2e9x_rcn_4xKOu_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675100781084`,
    Title: 'Easy to Use & Intuitive',
    Description:
      'Keep the data, but hide the content with a click. Easy toggle support allows you to put your best foot forward.',

    visit: '/features',
    icon: '🙌',
    iconBg: 'pink.100',
  },
];

const FeatureCard = ({
  text,
  icon,
  iconBg,

  active,
  setActive,
  cardNo,
}) => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <>
      <Stack
        direction={'row'}
        align={'center'}
        cursor={'pointer'}
        p={'5'}
        borderRadius={'xl'}
        rounded={'xl'}
        border={'2px solid'}
        borderColor={active === cardNo ? 'purple.400' : borderColor}
        onClick={() => {
          setActive(cardNo);
        }}
      >
        <Flex
          w={10}
          h={10}
          align={'center'}
          justify={'center'}
          rounded={'lg'}
          bg={iconBg}
          fontSize={'1.2rem'}
          me={2}
          boxSize={12}
        >
          {icon}
        </Flex>
        <Text
          align="start"
          fontWeight={600}
          fontSize={{ base: 'md', lg: 'lg' }}
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
              Learn More ~
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
            minH={{
              base: '200px',
              md: '550px',
            }}
          >
            <Square>
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
