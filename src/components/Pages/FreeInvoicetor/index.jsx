import Editor from 'components/Organism/Editor/Editor';
import Helmet from 'react-helmet';
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import * as FaIcons from 'react-icons/fa';
import Preview from 'components/Organism/Preview/Preview';
import Share from 'components/Organism/Share/Share';
import InvoiceProvider from 'core/InvoiceContext';
import Background from 'components/Molecules/Background/Background';
import Shortcuts from 'components/Molecules/Shortcuts';
export default function FreeInvoicetor() {
  return (
    <>
      <Helmet>
        <title>
          Free Invoicetor | Build invoices for your business in no time.
        </title>
      </Helmet>
      <InvoiceProvider>
        <Container maxW={'5xl'} mt={2}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 3, md: 5 }}
            pt={{ base: 20, md: 36 }}
            pb={{
              base: 10,
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
                bgGradient="linear(to-l, yellow.400, purple.400)"
                bgClip="text"
                fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
              >
                Free Invoicetor
              </Text>
            </Heading>
            <Text
              fontSize={{
                base: '1.2rem',
                lg: '1.3rem',
              }}
              align="start"
            >
              This is a one time free editor for invoicetor. You can use it to
              create invoices and send them to your customers, for more features
              like this you have to sign up.
            </Text>{' '}
          </Stack>
          <Flex justifyContent={'space-between'}>
            <Background />
            <Shortcuts />
          </Flex>
        </Container>
        <Container
          maxW={'5xl'}
          mt={{
            base: 2,
            md: 5,
          }}
        >
          <Tabs isFitted variant={'unstyled'}>
            <TabList mb="1em" mx={'0'}>
              <Tab
                p={{
                  base: 1,
                  md: 3,
                }}
                mx={{ base: 1, md: 3 }}
                fontSize={'lg'}
                bg={useColorModeValue('gray.100', 'gray.700')}
                color={useColorModeValue('gray.800', 'gray.200')}
                _selected={{
                  bg: useColorModeValue('purple.100', 'purple.400'),
                  color: useColorModeValue('gray.800', 'gray.100'),
                }}
                _focus={{
                  outline: 'none',
                }}
                rounded="lg"
              >
                Editor
                <FaIcons.FaEdit
                  style={{
                    fontSize: '1rem',
                    marginLeft: '1em',
                  }}
                />
              </Tab>

              <Tab
                p={{
                  base: 1,
                  md: 3,
                }}
                mx={{ base: 1, md: 3 }}
                fontSize={'lg'}
                bg={useColorModeValue('gray.100', 'gray.700')}
                color={useColorModeValue('gray.800', 'gray.200')}
                _selected={{
                  bg: useColorModeValue('purple.100', 'purple.400'),
                  color: useColorModeValue('gray.800', 'gray.100'),
                }}
                _focus={{
                  outline: 'none',
                }}
                rounded="lg"
              >
                Preview
                <FaIcons.FaEye
                  style={{
                    fontSize: '1.2rem',
                    marginLeft: '1em',
                  }}
                />
              </Tab>
              <Tab
                p={{
                  base: 1,
                  md: 3,
                }}
                mx={{ base: 1, md: 3 }}
                fontSize={'lg'}
                bg={useColorModeValue('gray.100', 'gray.700')}
                color={useColorModeValue('gray.800', 'gray.200')}
                _selected={{
                  bg: useColorModeValue('purple.100', 'purple.400'),
                  color: useColorModeValue('gray.800', 'gray.100'),
                }}
                _focus={{
                  outline: 'none',
                }}
                rounded="lg"
              >
                Share
                <FaIcons.FaShare
                  style={{
                    fontSize: '1.2rem',
                    marginLeft: '1em',
                  }}
                />
              </Tab>
            </TabList>
            <TabPanels p="2">
              <TabPanel padding={0}>
                <Box
                  as={'div'}
                  p={{
                    base: 5,
                    md: 10,
                  }}
                  border={'1px solid'}
                  borderWidth={'4px'}
                  borderColor="gray.100"
                  borderRadius={'3xl'}
                >
                  <Editor />
                </Box>
              </TabPanel>
              <TabPanel padding={0}>
                <Box
                  as={'div'}
                  p={{
                    base: 5,
                    md: 10,
                  }}
                  border={'1px solid'}
                  borderWidth={'4px'}
                  borderColor="gray.100"
                  borderRadius={'3xl'}
                  bg={'white'}
                  color={'gray.800'}
                >
                  <Preview />
                </Box>
              </TabPanel>{' '}
              <TabPanel padding={0}>
                <Box
                  as={'div'}
                  p={{
                    base: 5,
                    md: 10,
                  }}
                  border={'1px solid'}
                  borderWidth={'4px'}
                  borderColor="gray.100"
                  borderRadius={'3xl'}
                >
                  <Share />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </InvoiceProvider>
    </>
  );
}
