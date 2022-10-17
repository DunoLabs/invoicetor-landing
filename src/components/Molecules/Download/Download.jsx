import { useRef, useContext } from 'react';
import { useReactToPrint } from 'react-to-print';
import Preview from 'components/Organism/Preview/Preview';
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

import { InvoiceContext } from 'core/InvoiceContext';

export default function Download() {
  const { invoice } = useContext(InvoiceContext);
  const componentRef = useRef();
  const companyName = invoice.clientDetails?.clientCompany || 'Invoice ';
  const handlePrint = useReactToPrint({
    content: () => {
      const previewComponent = componentRef.current.cloneNode(true);
      const PrintElem = document.createElement('div');
      const header = `<div class="page-footer"> Build with 
        <a class="link" href="https://invoicetor.works">@Invoicetor</a>
        </div>`;
      PrintElem.innerHTML = header;
      PrintElem.appendChild(previewComponent);
      return PrintElem;

      return previewComponent.append();
    },
    documentTitle: companyName,

    pageStyle: `
    @media print {
    
      div.page-footer {
        position: fixed;
        z-index: 10;
        bottom: 0;
        width: 100%;
        height: 50px;
        font-size: 15px;
        text-align: left;
        margin-top: 50px;
        display:block;
        opacity: 0.5;
        page-break-after: always;
      }
      .link{
        color: #9F7AEA;
        font-weight: bold;
      }

    }`,

      
  });

  return (
    <>
      <Stack
        style={{
          display: 'none',
        }}
        bg={'white'}
      >
        <Box ref={componentRef} p={5} color={'gray.800'}>
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
              src={
                'https://res.cloudinary.com/invoicetor/image/upload/v1661564364/download-1_wppnvr.png'
              }
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
                `https://twitter.com/intent/tweet?text=Hey there 👋🏻 %0a%0aInvoicetor is a great tool for creating invoices. I recently used it and found it very useful. You can use Invoicetor to create invoices🧾 in no time.%0a%0aTry 👇🏻%0ahttps://invoicetor.works %0a%0a&hashtags=invoicetor,dunolabs`
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
                `https://wa.me/?text=Hey there,%0a%0aInvoicetor is a great tool for creating invoices. I recently used it and found it very useful. You can use Invoicetor to create invoices in no time.%0a%0aTry : %0ahttps://invoicetor.works`
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

// `<img src="${invoice.yourLogo.image}" alt="" class="watermark"/>` +
