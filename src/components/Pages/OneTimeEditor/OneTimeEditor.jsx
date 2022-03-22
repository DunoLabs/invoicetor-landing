import Editor from '../../Organism/Editor/Editor';
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
} from '@chakra-ui/react';
import * as FaIcons from 'react-icons/fa';
import Preview from '../../Organism/Preview/Preview';
import Share from '../../Organism/Share/Share';
import InvoiceProvider from '../../../core/InvoiceContext';
export default function OneTimeEditor() {
  return (
    <>
      <Helmet>
        <title>
          One Time Editor | Build invoices for your business in no time.
        </title>
      </Helmet>
      <InvoiceProvider>
        <Container maxW={'5xl'} mt={5}>
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
                One-Time Editor
              </Text>
            </Heading>
            <Text fontSize={'1.5rem'} align="start">
              This is a one time free editor for invoicetor. You can use it to
              create invoices and send them to your customers, for more features
              like this you have to sign up.
            </Text>{' '}
          </Stack>
        </Container>
        <Container maxW={'5xl'} mt={5}>
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab
                p={{
                  base: 0,
                  md: 3,
                }}
                mx={{ base: 'auto', md: 3 }}
                fontSize={'lg'}
                bg={useColorModeValue('gray.100', 'gray.700')}
                color={useColorModeValue('gray.800', 'gray.200')}
                _selected={{
                  bg: useColorModeValue('purple.100', 'purple.400'),
                  color: useColorModeValue('gray.800', 'gray.100'),
                }}
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
                  base: 0,
                  md: 3,
                }}
                mx={{ base: 'auto', md: 3 }}
                fontSize={'lg'}
                bg={useColorModeValue('gray.100', 'gray.700')}
                color={useColorModeValue('gray.800', 'gray.200')}
                _selected={{
                  bg: useColorModeValue('purple.100', 'purple.400'),
                  color: useColorModeValue('gray.800', 'gray.100'),
                }}
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
                  base: 0,
                  md: 3,
                }}
                mx={{ base: 'auto', md: 3 }}
                fontSize={'lg'}
                bg={useColorModeValue('gray.100', 'gray.700')}
                color={useColorModeValue('gray.800', 'gray.200')}
                _selected={{
                  bg: useColorModeValue('purple.100', 'purple.400'),
                  color: useColorModeValue('gray.800', 'gray.100'),
                }}
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
            <TabPanels>
              <TabPanel>
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
              </TabPanel>
              <TabPanel>
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
                  <Preview />
                </Box>
              </TabPanel>{' '}
              <TabPanel>
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
