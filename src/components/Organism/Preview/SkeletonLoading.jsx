import {
  Alert,
  AlertIcon,
  Center,
  Stack,
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
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react';

import React from 'react';
import { useContext } from 'react';
import { InvoiceContext } from 'core/InvoiceContext';

function SkeletonLoading() {
  const { invoice } = useContext(InvoiceContext);
  return (
    <>
      <Center>
        <Alert
          status="info"
          style={{ width: 'fit-content' }}
          mb={8}
          rounded="lg"
        >
          <AlertIcon />
          Please enter details in the Editor tab to preview the invoice.
        </Alert>
      </Center>
      <Stack
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
            <Box mt={6}>
              <SkeletonCircle
                rounded="2xl"
                size="40"
                startColor="purple.400"
                endColor="yellow.400"
              />
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
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
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
              <SkeletonText mt="4" noOfLines={4} spacing="4">
                <div>contents wrapped</div>
              </SkeletonText>
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
                  <SkeletonText mt="2" noOfLines={3} spacing="4">
                    <p>wrap text</p>
                  </SkeletonText>
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
              <Tr>
                <Td>
                  <Skeleton height="10px">Test item</Skeleton>
                </Td>
                <Td>
                  <Skeleton height="10px">Test</Skeleton>
                </Td>
                <Td>
                  <Skeleton height="10px">Test</Skeleton>
                </Td>
                <Td isNumeric>
                  {' '}
                  <Skeleton height="10px">Test</Skeleton>
                </Td>
              </Tr>
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
                <Skeleton height="10px" mt={2}>
                  Wrap
                </Skeleton>
                <Skeleton height="10px" mt={3} mb={2}>
                  Wrap
                </Skeleton>
                <Divider
                  borderBottom={`4px solid ${
                    invoice?.backgroundColor + '.400'
                  }`}
                  borderColor={invoice?.backgroundColor + '.400'}
                />
                <Skeleton height="10px" mt={3}>
                  Wrap
                </Skeleton>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Stack>
      <Stack
        mt={{
          base: '60px',
          md: '60px',
        }}
        spacing={3}
      >
        <Flex justifyContent={'flex-end'}>
          <Box
            className="stamp is-nope"
            borderWidth="0.5rem"
            borderStyle="double"
            borderRadius="10px"
            color={invoice.digitalSignature.sealColor}
            borderColor={invoice.digitalSignature.sealColor}
          >
            <SkeletonText mt="2" noOfLines={2} spacing="4">
              <p>Sample company name</p>
            </SkeletonText>
          </Box>
        </Flex>
        <Flex justifyContent={'flex-end'}>
          <SkeletonCircle size="20" />
        </Flex>
        <Box>
          <Flex justifyContent={'flex-end'}>
            <SkeletonText mt="2" noOfLines={2} spacing="4">
              <span>wrap sample text</span>
            </SkeletonText>
          </Flex>
        </Box>
      </Stack>
    </>
  );
}

export default SkeletonLoading;
