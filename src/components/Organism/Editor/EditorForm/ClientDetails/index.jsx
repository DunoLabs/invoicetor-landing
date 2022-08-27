import '../../Editor.scss';
import { useFormik } from 'formik';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import { useEffect } from 'react';

export default function ClientDetails({
  clientDetails,
  getClientDetails,
  resetForm,
}) {
  const formik = useFormik({
    initialValues: { clientDetails },
  });

  useEffect(() => {
    if (resetForm) {
      formik.resetForm();
    }
  }, [resetForm, formik]);

  useEffect(() => {
    getClientDetails(formik.values.clientDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.clientDetails]);

  return (
    <>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={8} mt="20">
        <Box>
          <FormControl id="clientName">
            <FormLabel>Client Name</FormLabel>
            <Input
              type="text"
              size={'lg'}
              htmlSize={30}
              placeholder="Client Name"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              name="clientDetails.clientName"
              onChange={formik.handleChange}
              value={formik.values.clientDetails.clientName}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="clientEmail">
            <FormLabel>Client Email</FormLabel>
            <Input
              type="text"
              size={'lg'}
              htmlSize={30}
              placeholder="Client Email"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              name="clientDetails.clientEmail"
              onChange={formik.handleChange}
              value={formik.values.clientDetails.clientEmail}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="clientPhone">
            <FormLabel>Client Phone</FormLabel>
            <Input
              type="text"
              size={'lg'}
              htmlSize={30}
              placeholder="Client Phone"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              name="clientDetails.clientPhone"
              onChange={formik.handleChange}
              value={formik.values.clientDetails.clientPhone}
            />
          </FormControl>
        </Box>
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={8} my="5">
        <Box>
          <FormControl id="clientCompany">
            <FormLabel>Client Company</FormLabel>
            <Input
              type="text"
              size={'lg'}
              htmlSize={30}
              placeholder="Client Company"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              name="clientDetails.clientCompany"
              onChange={formik.handleChange}
              value={formik.values.clientDetails.clientCompany}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="clientAddress">
            <FormLabel>Client Address</FormLabel>
            <Input
              type="text"
              size={'lg'}
              htmlSize={30}
              placeholder="Client Address"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              name="clientDetails.clientAddress"
              onChange={formik.handleChange}
              value={formik.values.clientDetails.clientAddress}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="clientCity">
            <FormLabel>Client City</FormLabel>
            <Input
              type="text"
              size={'lg'}
              htmlSize={30}
              placeholder="Client City"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              name="clientDetails.clientCity"
              onChange={formik.handleChange}
              value={formik.values.clientDetails.clientCity}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="clientWebsite">
            <FormLabel>Client Website</FormLabel>
            <Input
              type="text"
              size={'lg'}
              htmlSize={30}
              placeholder="Client Website"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              name="clientDetails.clientWebsite"
              onChange={formik.handleChange}
              value={formik.values.clientDetails.clientWebsite}
            />
          </FormControl>
        </Box>
      </Stack>
    </>
  );
}
