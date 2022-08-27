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

export default function InvoiceNotes({ notes, getNotes, resetForm }) {
  const formik = useFormik({
    initialValues: { notes },
  });
  useEffect(() => {
    if (resetForm) {
      formik.resetForm();
    }
  }, [resetForm, formik]);

  useEffect(() => {
    getNotes(formik.values.notes);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  return (
    <>
      <Stack
        mt={{
          base: '10',
          md: '10',
        }}
      >
        <Box>
          <Text mb="8px">Add a Note : </Text>
          <Flex>
            <Textarea
              isDisabled={formik.values.notes.noteToggle ? true : false}
              size={'lg'}
              name="notes.note"
              placeholder="It was great doing business with you."
              bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
              color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
              value={formik.values.notes.note}
              onChange={formik.handleChange}
            />

            {
              // TOGGLE Icon button
              <Tooltip label={formik.values.notes.noteToggle ? 'Show' : 'Hide'}>
                <IconButton
                  variant="outline"
                  aria-label="Options"
                  mx={2}
                  icon={
                    formik.values.notes.noteToggle ? (
                      <BiIcons.BiHide />
                    ) : (
                      <BiIcons.BiShow />
                    )
                  }
                  onClick={e =>
                    formik.setFieldValue(
                      'notes.noteToggle',
                      !formik.values.notes.noteToggle
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
