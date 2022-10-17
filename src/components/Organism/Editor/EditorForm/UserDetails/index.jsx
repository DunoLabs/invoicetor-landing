import 'components/Organism/Editor/Editor.scss';
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

export default function UserDetails({
  yourDetails,
  getYourDetails,
  resetForm,
}) {
  const formik = useFormik({
    initialValues: { yourDetails },
  });
  useEffect(() => {
    if (resetForm) {
      formik.resetForm();
    }
  }, [resetForm, formik]);

  useEffect(() => {
    getYourDetails(formik.values.yourDetails);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  return (
    <>
      {/* User Details Start*/}
      <Stack direction={{ base: 'column', md: 'row' }} spacing={8} my="5">
        <Box>
          <FormControl id="firstName">
            <FormLabel>Your Name</FormLabel>
            <Input
              type="text"
              name="yourDetails.yourName"
              size={'lg'}
              htmlSize={30}
              placeholder="Your Name"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              onChange={formik.handleChange}
              value={formik.values.yourDetails.yourName}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="youremail">
            <FormLabel>Your Email</FormLabel>
            <Input
              id="email"
              name="yourDetails.yourEmail"
              type="email"
              size={'lg'}
              htmlSize={30}
              placeholder="Your Email"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              onChange={formik.handleChange}
              value={formik.values.yourDetails.yourEmail}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="yourphone">
            <FormLabel>Your Phone</FormLabel>
            <Input
              type="number"
              onKeyDown={e =>
                ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
              }
              size={'lg'}
              name="yourDetails.yourPhone"
              htmlSize={30}
              placeholder="Your Phone"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              onChange={formik.handleChange}
              value={formik.values.yourDetails.yourPhone}
            />
          </FormControl>
        </Box>
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={8} my="5">
        <Box>
          <FormControl id="yourcompany">
            <FormLabel>Your Company</FormLabel>
            <Input
              type="text"
              size={'lg'}
              htmlSize={30}
              name="yourDetails.yourCompany"
              placeholder="Your Company"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              onChange={formik.handleChange}
              value={formik.values.yourDetails.yourCompany}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="youraddress">
            <FormLabel>Your Address</FormLabel>
            <Input
              type="text"
              size={'lg'}
              name="yourDetails.yourAddress"
              htmlSize={30}
              placeholder="Your Address"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              onChange={formik.handleChange}
              value={formik.values.yourDetails.yourAddress}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="yourcity">
            <FormLabel>Your City</FormLabel>
            <Input
              type="text"
              size={'lg'}
              htmlSize={30}
              name="yourDetails.yourCity"
              placeholder="Your City"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              onChange={formik.handleChange}
              value={formik.values.yourDetails.yourCity}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="yourwebsite">
            <FormLabel>Your Website</FormLabel>

            <Input
              type="text"
              size={'lg'}
              htmlSize={30}
              name="yourDetails.yourWebsite"
              placeholder="Your Website"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              onChange={formik.handleChange}
              value={formik.values.yourDetails.yourWebsite}
            />
          </FormControl>
        </Box>
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={8} my="5">
        <Box>
          <FormControl id="yourAccount">
            <FormLabel>Your Account Number</FormLabel>
            <Input
              type="number"
              min={0}
              size={'lg'}
              htmlSize={30}
              onKeyDown={e =>
                ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
              }
              placeholder="Your Account Number"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              name="yourDetails.yourAccountNumber"
              onChange={formik.handleChange}
              value={formik.values.yourDetails.yourAccountNumber}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="yourBank">
            <FormLabel>Your Bank</FormLabel>
            <Input
              type="text"
              size={'lg'}
              htmlSize={30}
              placeholder="Your Bank"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              name="yourDetails.yourBank"
              onChange={formik.handleChange}
              value={formik.values.yourDetails.yourBank}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="yourBankBranch">
            <FormLabel>Your Bank Branch</FormLabel>
            <Input
              type="text"
              size={'lg'}
              htmlSize={30}
              placeholder="Your Bank Branch"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              name="yourDetails.yourBankBranch"
              onChange={formik.handleChange}
              value={formik.values.yourDetails.yourBankBranch}
            />
          </FormControl>
        </Box>
      </Stack>
      {/* User Details End */}
    </>
  );
}
