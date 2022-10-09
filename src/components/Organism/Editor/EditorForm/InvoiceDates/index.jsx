import 'components/Organism/Editor/Editor.scss';
import { useFormik } from 'formik';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';

import { useEffect } from 'react';

export default function InvoiceDates({ invoiceDates, getDates, resetForm }) {
  const formik = useFormik({
    initialValues: { invoiceDates },
  });
  const toast = useToast();
  useEffect(() => {
    getDates(formik.values.invoiceDates);
    if (resetForm) {
      formik.resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  const handleDateChange = e => {
    if (formik.values.invoiceDates[1] !== '') {
      formik.setFieldValue('invoiceDates[2]', e.target.value);
    } else {
      toast({
        status: 'error',
        title: 'Select an invoice Date',
        duration: 2000,
        isClosable: true,
        position: 'bottom-right',
      });

      formik.setFieldValue('invoiceDates[2]', '');
    }
  };

  // suppose the invoice date is cleared or changed  and the new invoice date selected is ahead of invoice due date, the useEffect runs
  useEffect(() => {
    if (formik.values.invoiceDates[1] > formik.values.invoiceDates[2]) {
      formik.setFieldValue('invoiceDates[2]', '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.invoiceDates[1], formik.values.invoiceDates[2]]);

  return (
    <>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={8} my="20">
        <Box>
          <FormControl id="invoiceNumber">
            <FormLabel>Invoice Number</FormLabel>
            <Input
              type="number"
              min={0}
              onKeyDown={e =>
                ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
              }
              size={'lg'}
              htmlSize={30}
              placeholder="Invoice Number"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              name="invoiceDates[0]"
              onChange={formik.handleChange}
              value={formik.values.invoiceDates[0]}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="invoiceDate">
            <FormLabel>Invoice Date</FormLabel>
            <Input
              type="date"
              size={'lg'}
              htmlSize={30}
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              name="invoiceDates[1]"
              onChange={formik.handleChange}
              value={formik.values.invoiceDates[1]}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="dueDate">
            <FormLabel>Due Date</FormLabel>
            <Input
              type="date"
              size={'lg'}
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              name="invoiceDates[2]"
              onChange={handleDateChange}
              min={formik.values.invoiceDates[1]}
              value={
                formik.values.invoiceDates[1] &&
                formik.values.invoiceDates[1] < formik.values.invoiceDates[2]
                  ? formik.values.invoiceDates[2]
                  : ''
              }
            />
          </FormControl>
        </Box>
      </Stack>
    </>
  );
}
