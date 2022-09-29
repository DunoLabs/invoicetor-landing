import '../../Editor.scss';
import { useFormik } from 'formik';
import {
  Box,
  Stack,
  useColorModeValue,
  Text,
  Textarea,
  Flex,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton,
} from '@chakra-ui/react';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';

import { useEffect } from 'react';

export default function InvoiceNotes({
  notes,
  getNotes,
  resetForm,
  clientName,
  usersCompany,
  userName,
}) {
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

  const customNotes = [
    {
      id: 1,
      content: `Thank you for your support, ${clientName}. We truly appreciate your business and look forward to helping you again soon.`,
    },
    {
      id: 2,
      content: `Thank you for choosing ${usersCompany}. We hope our service and work brought a smile to your face and made your life just a little easier.`,
    },
    {
      id: 3,
      content: `On behalf of ${usersCompany}, we wanted to say “thanks for choosing us.” Please let us know if there's any other work we can help you with.`,
    },
    {
      id: 4,
      content: `Thank you for your business. We look forward to working with you again in the future.`,
    },
    {
      id: 5,
      content: `${userName} from ${usersCompany} here. Thank you for your business, ${clientName}. Our team thoroughly enjoyed doing the work, and we look forward to coming back again soon.`,
    },
  ];

  // randomly select a note from the customNotes array
  const suggestNotes = () => {
    const randomNote =
      customNotes[Math.floor(Math.random() * customNotes.length)];
    formik.setFieldValue('notes.note', randomNote.content);
  };

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

            <Menu>
              <MenuButton
                m={2}
                as={IconButton}
                aria-label="Options"
                icon={<RiIcons.RiMenu3Fill />}
                variant="outline"
              />

              <MenuList>
                <MenuItem
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
                >
                  {formik.values.notes.noteToggle ? 'Show' : 'Hide'}
                </MenuItem>
                <MenuItem icon={<RiIcons.RiMagicFill />} onClick={suggestNotes}>
                  Suggest Notes
                </MenuItem>{' '}
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Stack>
    </>
  );
}
