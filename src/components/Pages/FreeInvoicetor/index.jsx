import Editor from 'components/Organism/Editor';
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
import Preview from 'components/Organism/Preview/Preview';
import Share from 'components/Organism/Share/Share';
import InvoiceProvider from 'core/InvoiceContext';
import Background from 'components/Molecules/Background/Background';
import Shortcuts from 'components/Molecules/Shortcuts';
export default function FreeInvoicetor() {
  const TabsComponent = [
    {
      name: 'Editor 📝',
      component: <Editor />,
    },
    {
      name: 'Preview 📄',
      component: <Preview />,
    },
    {
      name: 'Share 📤',
      component: <Share />,
    },
  ];

  const TabsTheme = {
    bg: useColorModeValue('gray.100', 'gray.700'),
    color: useColorModeValue('gray.700', 'gray.100'),
    hover: useColorModeValue('gray.200', 'gray.600'),
    _selectedBg: useColorModeValue('purple.200', 'purple.400'),
    _selectedColor: useColorModeValue('gray.700', 'gray.100'),
  };

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
                fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
              >
                Free Invoicetor 📝
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
            <TabList mb="1em" mx={'0'} p={0} display={'flex'} flexWrap={'wrap'}>
              {TabsComponent &&
                TabsComponent.map((tab, index) => (
                  <>
                    <Tab
                      key={index}
                      p={{
                        base: 1,
                        md: 3,
                      }}
                      fontWeight={'medium'}
                      mx={{ base: 1, md: 3 }}
                      fontSize={'lg'}
                      bg={TabsTheme.bg}
                      color={TabsTheme.color}
                      _selected={{
                        bg: TabsTheme._selectedBg,
                        color: TabsTheme._selectedColor,
                      }}
                      _focus={{
                        outline: 'none',
                      }}
                      rounded="lg"
                    >
                      {tab?.name}
                    </Tab>
                  </>
                ))}
            </TabList>
            <TabPanels p="2">
              {TabsComponent &&
                TabsComponent.map((tab, index) => (
                  <TabPanel padding={0} key={index}>
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
                      {tab?.component}
                    </Box>
                  </TabPanel>
                ))}
            </TabPanels>
          </Tabs>
        </Container>
      </InvoiceProvider>
    </>
  );
}
