import { useRef, useContext } from 'react';
import { useReactToPrint } from 'react-to-print';
import Preview from '../../Organism/Preview/Preview';
import {
  Box,
  Center,
  useColorModeValue,
  Button,
  Stack,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';
import * as RiIcons from 'react-icons/ri';
import DownloadImg from '../../../assets/illustrations/download-1.png';

import { InvoiceContext } from '../../../core/InvoiceContext';

export default function Download() {
  const { invoice } = useContext(InvoiceContext);
  const componentRef = useRef();
  const companyName = invoice.clientCompany;
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: companyName,
  });

  return (
    <>
      <Stack
        style={{
          display: 'none',
        }}
        bg={useColorModeValue('gray.100', '#1A202C')}
      >
        <Box ref={componentRef} p={5} bg={useColorModeValue('#fff', '#1A202C')}>
          <Preview />
        </Box>
      </Stack>

      <Center
        p={{
          base: '1rem',
          md: '1rem',
        }}
      >
        <Box
          role={'group'}
          p={{
            base: '1rem',
            md: '1rem',
          }}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('gray.800', 'gray.200')}
          boxShadow={'md'}
          textAlign={'center'}
          rounded={'3xl'}
        >
          <Box>
            <Image
              height={230}
              width={282}
              objectFit={'cover'}
              src={DownloadImg}
              onClick={handlePrint}
            />
          </Box>

          <Box
            my={'2'}
            bg={useColorModeValue('gray.100', 'gray.800')}
            p={'3'}
            rounded={'3xl'}
            alignItems={'center'}
            onClick={handlePrint}
            style={{
              cursor: 'pointer',
            }}
          >
            <Text fontWeight={'600'}>Download</Text>
          </Box>
        </Box>
      </Center>

      <Box
        my={'10'}
        p={'10'}
        bg={useColorModeValue('gray.100', 'gray.200')}
        color={useColorModeValue('gray.800', 'gray.800')}
        rounded={'3xl'}
      >
        <Text fontSize="md" fontWeight="bold" align={'center'}>
          Hey there, If invoicetor really makes your life easier, you can share
          it on your Twitter or WhatsApp.
        </Text>
        <Flex flexWrap={'wrap'} justifyContent={'center'} my={'4'}>
          <Button
            color={'white'}
            bg={'purple.400'}
            m={'2'}
            _hover={{
              bg: 'purple.500',
            }}
            rounded={'3xl'}
            onClick={() => {
              window.open(
                `https://twitter.com/intent/tweet?text=Hey there, I really liked using Invoicetor 💜%0AIt really makes my life easier. You can use Invoicetor to create invoices🧾 no time.%0A&url=https://invoicetor.works`
              );
            }}
            _focus={{
              outline: 'none',
            }}
            rightIcon={<RiIcons.RiTwitterFill />}
          >
            Share on Twitter
          </Button>
          <Button
            border={'2px solid'}
            variant="outline"
            borderColor={useColorModeValue('gray.800', 'gray.800')}
            color={useColorModeValue('gray.800', 'gray.900')}
            _hover={{
              bg: useColorModeValue('gray.800', 'gray.900'),
              color: useColorModeValue('gray.100', 'gray.100'),
            }}
            m={'2'}
            _focus={{
              outline: 'none',
            }}
            rightIcon={<RiIcons.RiWhatsappFill />}
            rounded={'3xl'}
            onClick={() => {
              window.open(
                `https://wa.me/?text=Hey there, I really liked using Invoicetor %0AIt really makes my life easier. You can use Invoicetor to create invoices no time.%0A&url=https://invoicetor.works`
              );
            }}
          >
            Share on Whatsapp
          </Button>
        </Flex>
      </Box>
    </>
  );
}
