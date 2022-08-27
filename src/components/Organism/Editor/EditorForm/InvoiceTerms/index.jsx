import '../../Editor.scss';
import { useFormik } from 'formik';
import {
  Box,
  Stack,
  useColorModeValue,
  Text,
  Textarea,
  Flex,
  Tooltip,
  IconButton,
} from '@chakra-ui/react';
import * as BiIcons from 'react-icons/bi';

import { useEffect } from 'react';

export default function InvoiceTerms({ terms, getTerms, resetForm }) {
  const formik = useFormik({
    initialValues: { terms },
  });
  useEffect(() => {
    if (resetForm) {
      formik.resetForm();
    }
  }, [resetForm, formik]);

  useEffect(() => {
    getTerms(formik.values.terms);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  return (
    <>
      {/* Invocie Total Starts  */}
      <Stack my={10}>
        <Box>
          <Text mb="8px">Terms & Condition : </Text>
          <Flex>
            <Textarea
              isDisabled={formik.values.terms.termToggle ? true : false}
              size={'lg'}
              name="terms.term"
              placeholder="Please make the payment by the due date"
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              value={formik.values.terms.term}
              onChange={formik.handleChange}
            />
            {
              // TOGGLE Icon button
              <Tooltip label={formik.values.terms.termToggle ? 'Show' : 'Hide'}>
                <IconButton
                  variant="outline"
                  aria-label="Options"
                  mx={2}
                  icon={
                    formik.values.terms.termToggle ? (
                      <BiIcons.BiHide />
                    ) : (
                      <BiIcons.BiShow />
                    )
                  }
                  onClick={e =>
                    formik.setFieldValue(
                      'terms.termToggle',
                      !formik.values.terms.termToggle
                    )
                  }
                />
              </Tooltip>
            }
          </Flex>
        </Box>
      </Stack>
    </>
  );
}
