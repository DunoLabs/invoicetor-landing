import {
  Stack,
  Image,
  Flex,
  Text,
  Box,
  Spacer,
  Grid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Preview() {
  const [image, setImage] = useState('');
  const [imageSize, setImageSize] = useState('');
  const [invoice, setInvoice] = useState('');
  const [items, setItems] = useState([]);
  useEffect(() => {
    setImage(localStorage.getItem('image'));
    setImageSize(localStorage.getItem('imageSize'));
    setInvoice(JSON.parse(localStorage.getItem('invoice')));
    const items = JSON.parse(localStorage.getItem('items'))
      ? JSON.parse(localStorage.getItem('items'))
      : [];
    setItems(items);
    console.log(items);
  }, [items]);
  return (
    <>
      {/* Upload Company Logo Starts */}
      <Stack>
        <Flex>
          <Box>
            {image && (
              <Image
                src={image}
                alt="company logo"
                className="company-logo"
                style={{
                  borderRadius: '10px',
                  marginBottom: '10px',
                }}
                w={imageSize}
                h={imageSize}
              />
            )}
          </Box>
          <Spacer />
          <Box spacing={3}>
            <Text fontSize="6xl" align="end">
              Invoice
            </Text>
            <Text fontSize="2xl" align="end">
              {invoice.yourCompany}
            </Text>
            <Text align="end">{invoice.yourName}</Text>
            <Text align="end">{invoice.yourAddress}</Text>
            <Text align="end">{invoice.yourCity}</Text>
            <Text align="end">{invoice.yourWebsite}</Text>
          </Box>
        </Flex>
      </Stack>

      {/* Client Data  */}
      <Stack mt={10}>
        <Flex>
          <Box spacing={3}>
            <Text fontSize="2xl" fontWeight={'bold'} align="start">
              Bill To :{' '}
            </Text>
            <Text fontSize="2xl">{invoice.clientName}</Text>
            <Text>{invoice.clientAddress}</Text>
            <Text>{invoice.clientCity}</Text>
            <Text>{invoice.clientWebsite}</Text>
          </Box>

          <Spacer />

          <Box spacing={3}>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              <GridItem colSpan={2} h="10">
                <Text fontWeight={'bold'} align="start">
                  Invoice No :{' '}
                </Text>{' '}
                <Text fontWeight={'bold'} align="start">
                  Invoice Date :{' '}
                </Text>{' '}
                <Text fontWeight={'bold'} align="start">
                  Invoice Due-Date :{' '}
                </Text>
              </GridItem>
              <GridItem colStart={4} colEnd={6} h="10">
                <Text align="end">{invoice.invoiceNumber}</Text>
                <Text align="end">{invoice.invoiceDate}</Text>
                <Text align="end">{invoice.dueDate}</Text>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Stack>

      {/* Invoice Table */}
      <Stack mt={10}>
        <Table>
          <Thead>
            <Tr>
              <Th ps={0}>Item</Th>
              <Th ps={0}>Quantity</Th>
              <Th ps={0}>Price</Th>
              <Th pe={0} isNumeric>
                Total
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item, index) => (
              <Tr key={index}>
                <Td ps={0}>{item.itemName}</Td>
                <Td ps={0}>{item.itemQuantity}</Td>
                <Td ps={0}>{item.itemPrice}</Td>
                <Td pe={0} isNumeric>
                  {item.itemTotal}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Stack>
    </>
  );
}
