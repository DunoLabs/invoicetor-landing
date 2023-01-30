import 'components/Organism/Editor/Editor.scss';
import { useFormik } from 'formik';
import React from 'react';
import {
  Box,
 
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import { useEffect } from 'react';

export default function InvoiceDates({ invoiceDates, getDates, resetForm }) {
  const formik = useFormik({
    initialValues: { invoiceDates },
  });

  useEffect(() => {
    getDates(formik.values.invoiceDates);
    if (resetForm) {
      formik.resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  return (
    <React.Fragment>
      <Box
        className="userDetails"
        p={{
          base: '4',
          md: '8',
        }}
        bg={useColorModeValue('gray.50', 'gray.700')}
        rounded="3xl"
        mt="4"
        shadow={'sm'}
      >
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
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
                bg={useColorModeValue('gray.100', 'gray.800')}
                color={useColorModeValue('gray.800', 'gray.300')}
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
                bg={useColorModeValue('gray.100', 'gray.800')}
                color={useColorModeValue('gray.800', 'gray.300')}
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
                bg={useColorModeValue('gray.100', 'gray.800')}
                color={useColorModeValue('gray.800', 'gray.300')}
                name="invoiceDates[2]"
                onChange={formik.handleChange}
                value={formik.values.invoiceDates[2]}
              />
            </FormControl>
          </Box>
        </Stack>
      </Box>
    </React.Fragment>
  );
}
