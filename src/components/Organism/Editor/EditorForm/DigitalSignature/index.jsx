import { useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  HStack,
  Circle,
  FormControl,
  FormLabel,
  Input,
  Image,
  Stack,
  Flex,
  Button,
  useColorModeValue,
  Text,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spacer,
} from '@chakra-ui/react';

import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

export default function DigitalSignature({
  digitalSignature,
  registrationNumber,
  yourName,
  yourCompany,
  invoiceDate,
  getDigitalSignature,
  resetForm,
  alertMessage,
}) {
  const {
    isOpen: isOpenDigitalModal,
    onOpen: onOpenDigitalModal,
    onClose: onCloseDigitalModal,
  } = useDisclosure();

  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const formik = useFormik({
    initialValues: { digitalSignature, registrationNumber },
  });
  useEffect(() => {
    if (resetForm) {
      formik.resetForm();
    }
  }, [resetForm, formik]);

  useEffect(() => {
    getDigitalSignature(formik.values);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  // upload signature in localstorage starts
  const signatureUpload = e => {
    let file = e.target.files[0];
    const fileType = file.type;

    if (fileType === 'image/png' || fileType === 'image/jpeg') {
      getBase64(file).then(base64 => {
        formik.setFieldValue('digitalSignature.signature', base64);
      });
      e.target.value = '';
    } else {
      e.target.value = '';
      alertMessage('❌ Please upload png or jpg file');
    }
  };
  // save digital signature in localstorage
  const saveDigitalSignature = () => {
    alertMessage('😎Digital Signature Saved');
  };
  // upload signature in localstorage ends

  return (
    <>
      {/* Invoice Digital Signature start */}
      <Stack my={10}>
        <Box>
          <Button
            onClick={onOpenDigitalModal}
            variant="outline"
            _focus={{
              outline: 'none',
            }}
            fontWeight={600}
            color={'black'}
            bg={'white'}
            borderRadius={'lg'}
            _hover={{
              bg: 'whiteAlpha.800',
            }}
            rightIcon={<FaIcons.FaSignature />}
          >
            Add Signature
          </Button>
        </Box>
      </Stack>
      <Modal
        isOpen={isOpenDigitalModal}
        onClose={onCloseDigitalModal}
        size={'3xl'}
        isCentered
      >
        <ModalOverlay bg="blackAlpha.300" />
        <ModalContent
          p={{
            base: '2',
            md: '4',
          }}
          rounded={'xl'}
          border={2}
          borderColor={useColorModeValue('gray.700', 'gray.100')}
          borderStyle={'solid'}
        >
          <ModalHeader p={'2'}>
            <Text fontSize={'2xl'}>Digital Signature</Text>
            <Text fontSize={'16px'} fontWeight="normal">
              Add your signature to the invoice.
            </Text>
          </ModalHeader>
          <ModalCloseButton
            _focus={{
              outline: 'none',
            }}
          />
          <ModalBody px={'4'}>
            <Flex flexWrap={'wrap'} justifyContent="space-around">
              <Box
                p={{
                  base: '2',
                  md: '3',
                }}
                m={'2'}
                alignSelf={'center'}
                width={{
                  base: '100%',
                  md: '45%',
                }}
              >
                <HStack
                  my={'4'}
                  justifyContent="center"
                  p={'4'}
                  rounded={'3xl'}
                  border={2}
                  borderColor={useColorModeValue('gray.300', 'gray.200')}
                  borderStyle={'solid'}
                >
                  <Circle
                    size="40px"
                    bg="red.400"
                    color="white"
                    as="button"
                    onClick={() => {
                      formik.setFieldValue(
                        'digitalSignature.sealColor',
                        'red.400'
                      );
                    }}
                  />{' '}
                  <Circle
                    size="40px"
                    bg="blue.400"
                    color="white"
                    as="button"
                    onClick={() => {
                      formik.setFieldValue(
                        'digitalSignature.sealColor',
                        'blue.400'
                      );
                    }}
                  />{' '}
                  <Circle
                    size="40px"
                    bg="purple.400"
                    color="white"
                    as="button"
                    onClick={() => {
                      formik.setFieldValue(
                        'digitalSignature.sealColor',
                        'purple.400'
                      );
                    }}
                  />{' '}
                  <Circle
                    size="40px"
                    bg="yellow.400"
                    color="white"
                    as="button"
                    onClick={() => {
                      formik.setFieldValue(
                        'digitalSignature.sealColor',
                        'yellow.400'
                      );
                    }}
                  />{' '}
                  <Circle
                    size="40px"
                    bg="green.400"
                    color="white"
                    as="button"
                    onClick={() => {
                      formik.setFieldValue(
                        'digitalSignature.sealColor',
                        'green.400'
                      );
                    }}
                  />
                </HStack>

                <FormControl>
                  <FormLabel htmlFor="signature">
                    Registration Number{' '}
                  </FormLabel>
                  <Input
                    placeholder={'Enter Business Reg. Number'}
                    value={formik.values.registrationNumber}
                    type="number"
                    name="registrationNumber"
                    min={0}
                    onKeyDown={e =>
                      ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
                    }
                    onChange={formik.handleChange}
                    mb={'5'}
                  />
                </FormControl>

                <Box mb={'5'}>
                  <Flex>
                    <input
                      id="signatureUpload"
                      type="file"
                      name="image"
                      className="img"
                      onChange={e => signatureUpload(e)}
                    />
                    <Button
                      _focus={{
                        outline: 'none',
                      }}
                      borderRadius={'lg'}
                      bg={useColorModeValue('purple.400', 'purple.400')}
                      color={'white'}
                      _hover={{
                        bg: useColorModeValue('purple.500', 'purple.500'),
                      }}
                      variant="ghost"
                      rightIcon={<RiIcons.RiUpload2Line />}
                      onClick={() =>
                        document.getElementById('signatureUpload').click()
                      }
                    >
                      Upload Signature
                    </Button>
                    <Spacer />
                    {formik.values.digitalSignature.signature && (
                      <IconButton
                        variant="solid"
                        bg={'red.400'}
                        color={'white'}
                        _hover={{
                          bg: 'red.500',
                          color: 'white',
                        }}
                        rounded={'lg'}
                        onClick={() =>
                          formik.setFieldValue(
                            'digitalSignature.signature',
                            null
                          )
                        }
                      >
                        <RiIcons.RiDeleteBinLine />
                      </IconButton>
                    )}
                  </Flex>
                  <Text
                    fontSize="xs"
                    my={'2'}
                    fontWeight={'600'}
                    color={'gray.400'}
                  >
                    Upload image in png or jpg format.
                  </Text>
                </Box>
              </Box>
              <Spacer />
              <Stack
                width={{
                  base: '100%',
                  md: '50%',
                }}
                p={4}
                border={2}
                borderColor={useColorModeValue('gray.700', 'gray.100')}
                bg={'white'}
                color={'gray.700'}
                alignSelf={'center'}
              >
                <Flex justifyContent={'space-between'}>
                  <Text
                    fontSize={'lg'}
                    fontWeight="600"
                    mb={{
                      base: '2',
                      md: '6',
                    }}
                  >
                    Preview Signature
                  </Text>

                  <IconButton
                    variant="outline"
                    aria-label="Options"
                    bg={'gray.700'}
                    color={'white'}
                    _hover={{
                      bg: 'gray.600',
                    }}
                    _focus={{
                      outline: 'none',
                    }}
                    rounded={'lg'}
                    mx={2}
                    icon={
                      formik.values.digitalSignature.signatureToggle ? (
                        <BiIcons.BiShow />
                      ) : (
                        <BiIcons.BiHide />
                      )
                    }
                    onClick={() => {
                      formik.setFieldValue(
                        'digitalSignature.signatureToggle',
                        !formik.values.digitalSignature.signatureToggle
                      );
                    }}
                  />
                </Flex>

                {formik.values.digitalSignature.signatureToggle && (
                  <Stack my={'3rem'}>
                    <Box
                      className="stamp is-nope"
                      borderWidth="0.5rem"
                      borderStyle="double"
                      borderRadius="10px"
                      color={
                        formik.values.digitalSignature?.sealColor || 'red.400'
                      }
                      borderColor={formik.values.digitalSignature.sealColor}
                    >
                      {yourCompany} <br /> Reg. No :
                      {formik.values.registrationNumber}
                    </Box>

                    {formik.values.digitalSignature.signature && (
                      <Flex justifyContent={'flex-end'}>
                        <Image
                          src={formik.values.digitalSignature.signature}
                          alt="signature"
                          className="signature"
                          width={formik.values.digitalSignature.signatureSize}
                          height={formik.values.digitalSignature.signatureSize}
                        />
                      </Flex>
                    )}
                    <Box>
                      <Text align="end" fontWeight={'500'}>
                        {yourName}
                      </Text>
                      <Text align="end" fontWeight={'500'}>
                        {invoiceDate}
                      </Text>
                    </Box>
                  </Stack>
                )}
              </Stack>{' '}
            </Flex>
          </ModalBody>

          <ModalFooter gap={'2'} p={'2'}>
            <Button
              variant={'outline'}
              fontWeight={600}
              borderRadius={'lg'}
              bg={useColorModeValue('gray.900', 'white') || 'gray.200'}
              color={useColorModeValue('gray.100', 'gray.800')}
              _hover={{
                bg: useColorModeValue('gray.800', 'gray.100'),
              }}
              onClick={saveDigitalSignature}
            >
              Save
            </Button>
            <Button
              _focus={{
                outline: 'none',
              }}
              mr={3}
              onClick={onCloseDigitalModal}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Invoice Digital Signature End */}
    </>
  );
}
