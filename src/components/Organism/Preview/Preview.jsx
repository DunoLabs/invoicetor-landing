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
  TableContainer,
  Divider,
  SkeletonText,
} from '@chakra-ui/react';
import { useContext } from 'react';

import { InvoiceContext } from '../../../core/InvoiceContext';
import { checkEmpty } from './check-empty';

export default function Preview() {
  const { invoice } = useContext(InvoiceContext);
  const invoiceItems = invoice.items;
  const subTotal = invoiceItems.reduce((acc, item) => {
    return acc + item.itemQuantity * item.itemPrice;
  }, 0);

  const tax = invoice.tax;

  // find total using tax
  const total = subTotal + (subTotal * tax) / 100;

  // check if invoice details are empty
  const isEmpty = checkEmpty(invoice);

  return (
    isEmpty 
    ? <Stack>
      <span style={{textAlign: 'center', marginBottom: '10px'}}>Please enter details in the Editor tab to preview the invoice.</span>
      <SkeletonText mt='4' noOfLines={4} spacing='4' />
    </Stack>
    : <>
      <Stack
        // bg={useColorModeValue('#fff', '#1A202C')}
        // color={useColorModeValue('gray.800', 'gray.200')}
        style={{
          pageBreakAfter:
            invoice.items.length > 3 &&
            !invoice.notes.noteToggle &&
            !invoice.terms.termsToggle
              ? 'always'
              : 'auto',
        }}
      >
        <Stack spacing={10}>
          <Flex>
            <Box>
              {invoice.yourLogo?.image && (
                <Image
                  src={invoice.yourLogo?.image}
                  alt="company logo"
                  className="company-logo"
                  style={{
                    borderRadius: '10px',
                    marginBottom: '10px',
                  }}
                  w={invoice.yourLogo.imageSize}
                  h={invoice.yourLogo.imageSize}
                />
              )}
            </Box>
            <Spacer />
            <Box spacing={3}>
              <Text
                fontSize="6xl"
                align="end"
                color={invoice?.backgroundColor + '.400'}
              >
                Invoice
              </Text>
              <Text fontSize="2xl" align="end">
                {invoice.yourDetails.yourCompany}
              </Text>
              <Text align="end">{invoice.yourDetails.yourName}</Text>
              <Text align="end">{invoice.yourDetails.yourAddress}</Text>
              <Text align="end">{invoice.yourDetails.yourCity}</Text>
              <Text align="end">{invoice.yourDetails.yourWebsite}</Text>
            </Box>
          </Flex>
        </Stack>
        {/* Client Data  */}
        <Stack my={15} spacing={10}>
          <Flex>
            <Box spacing={3} mt={10}>
              <Text
                as="h3"
                fontWeight={'bold'}
                align="start"
                color={invoice?.backgroundColor + '.400'}
              >
                Bill To :{' '}
              </Text>
              <Text fontSize="2xl">{invoice.clientDetails.clientName}</Text>
              <Text>{invoice.clientDetails.clientAddress}</Text>
              <Text>{invoice.clientDetails.clientCity}</Text>
              <Text>{invoice.clientDetails.clientWebsite}</Text>
            </Box>

            <Spacer />

            <Box mt={10}>
              <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                <GridItem colSpan={2} h="10">
                  <Text
                    fontWeight={'bold'}
                    align="start"
                    color={invoice?.backgroundColor + '.400'}
                  >
                    Invoice No :{' '}
                  </Text>{' '}
                  <Text
                    fontWeight={'bold'}
                    align="start"
                    color={invoice?.backgroundColor + '.400'}
                  >
                    Invoice Date :{' '}
                  </Text>{' '}
                  <Text
                    fontWeight={'bold'}
                    align="start"
                    color={invoice?.backgroundColor + '.400'}
                  >
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

        <TableContainer>
          <Table mt={10}>
            <Thead>
              <Tr bg={invoice?.backgroundColor + '.100'}>
                <Th color={invoice?.backgroundColor + '.400'}>Item</Th>
                <Th color={invoice?.backgroundColor + '.400'}>Quantity</Th>
                <Th color={invoice?.backgroundColor + '.400'}>Price</Th>
                <Th color={invoice?.backgroundColor + '.400'} isNumeric>
                  Amount
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {invoice.items.map((item, index) => (
                <Tr
                  key={index}
                  bg={
                    index % 2 !== 0 ? invoice?.backgroundColor + '.50' : 'white'
                  }
                >
                  <Td>{item.itemName}</Td>
                  <Td>{item.itemQuantity}</Td>
                  <Td>
                    {item.itemCurrency} {item.itemPrice}
                  </Td>
                  <Td isNumeric>
                    {' '}
                    {item.itemCurrency} {item.itemTotal}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex>
          <Spacer />
          <Box align="end" pt={5} spacing={10}>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              <GridItem colSpan={2} h="10">
                <Text
                  fontWeight={'bold'}
                  align="start"
                  color={invoice?.backgroundColor + '.400'}
                >
                  Sub Total :{' '}
                </Text>{' '}
                <Text
                  fontWeight={'bold'}
                  align="start"
                  color={invoice?.backgroundColor + '.400'}
                >
                  Tax :{' '}
                </Text>{' '}
                <Divider
                  borderBottom={`4px solid ${
                    invoice?.backgroundColor + '.400'
                  }`}
                  borderColor={invoice?.backgroundColor + '.400'}
                />
                <Text
                  fontWeight={'bold'}
                  align="start"
                  color={invoice?.backgroundColor + '.400'}
                >
                  Total :{' '}
                </Text>
              </GridItem>
              <GridItem colStart={4} colEnd={6} h="10">
                <Text align="end">
                  {subTotal
                    ? invoice.items[0].itemCurrency + `${subTotal}`
                    : '-'}
                </Text>
                <Text align="end">{tax ? tax + '%' : 0}</Text>
                <Divider
                  borderBottom={`4px solid ${
                    invoice?.backgroundColor + '.400'
                  }`}
                  borderColor={invoice?.backgroundColor + '.400'}
                />
                <Text align="end">
                  {total ? invoice.items[0].itemCurrency + `${total}` : '-'}
                </Text>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Stack>
      <Stack mt={8} spacing={3}>
        {invoice.notes.noteToggle ? null : (
          <Box>
            <Text
              as="h3"
              fontWeight={'bold'}
              align="start"
              color={invoice?.backgroundColor + '.400'}
            >
              Notes :
            </Text>
            <Text>{invoice.notes.note}</Text>
          </Box>
        )}
      </Stack>{' '}
      <Stack mt={8} spacing={3}>
        {invoice.terms.termToggle ? null : (
          <Box>
            <Text
              as="h3"
              fontWeight={'bold'}
              align="start"
              color={invoice?.backgroundColor + '.400'}
            >
              Terms & Condition
            </Text>
            <Text>{invoice.terms.term}</Text>
          </Box>
        )}
      </Stack>
      {invoice.digitalSignature.signatureToggle && (
        <Stack
          mt={{
            base: '20px',
            md: '20px',
          }}
          spacing={3}
        >
          <Flex justifyContent={'flex-end'}>
            {invoice.yourDetails.yourCompany && (
              <Box
                className="stamp is-nope"
                borderWidth="0.5rem"
                borderStyle="double"
                borderRadius="10px"
                color={invoice.digitalSignature.sealColor}
                borderColor={invoice.digitalSignature.sealColor}
              >
                {invoice.yourDetails.yourCompany} <br /> RN:
                {invoice.yourDetails.yourRegistrationNumber}
              </Box>
            )}
          </Flex>
          {invoice.digitalSignature.signature && (
            <Flex justifyContent={'flex-end'}>
              <Image
                className="signature"
                src={invoice.digitalSignature.signature}
                alt="signature"
                width={invoice.digitalSignature.signatureSize}
                height={invoice.digitalSignature.signatureSize}
              />
            </Flex>
          )}
          <Box>
            <Text
              align="end"
              fontWeight={'500'}
              color={invoice?.backgroundColor + '.400'}
            >
              {invoice.yourDetails.yourName}
            </Text>
            <Text
              align="end"
              fontWeight={'500'}
              color={invoice?.backgroundColor + '.400'}
            >
              {invoice.invoiceDate}
            </Text>
          </Box>
        </Stack>
      )}
    </>
  );
}
