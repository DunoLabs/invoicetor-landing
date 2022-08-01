import { useContext, useState } from 'react';
import '../Editor.scss';
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
  Table,
  Thead,
  Tbody,
  Text,
  Textarea,
  Tr,
  Th,
  Td,
  Tooltip,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Spacer,
  Grid,
  GridItem,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  TableContainer,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { InvoiceContext } from '../../../../core/InvoiceContext';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import CurrencyData from '../CurrencyData/CurrencyData.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditorForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDigitalModal,
    onOpen: onOpenDigitalModal,
    onClose: onCloseDigitalModal,
  } = useDisclosure();
  const customCurrency = ['US Dollar', 'Indian Rupee', 'Euro'];
  const [searchTerm, setSearchTerm] = useState('');
  const [currency, setCurrency] = useState('₹');
  const Search = CurrencyData.filter(item => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // aleart message
  const alertMessage = message => {
    toast(message, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false, // default value
      closeOnClick: true, // default value
      pauseOnHover: true, // default value
      draggable: true, // default value
      progress: undefined,
      className: 'alert-message',
    });
  };

  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };

  // getting the context from the provider
  const { invoice, setInvoice } = useContext(InvoiceContext);
  const formik = useFormik({
    initialValues: { invoice },
    onSubmit: values => {
      setInvoice(values.invoice);
      localStorage.setItem('invoice', JSON.stringify(values.invoice));
      alertMessage('✅ Invoice saved successfully');
    },
  });

  useEffect(() => {
    localStorage.setItem('invoice', JSON.stringify(invoice));
  }, [invoice]);

  // current Itemstate
  const [currentItem, setCurrentItem] = useState({
    itemName: '',
    itemQuantity: '',
    itemPrice: '',
    itemCurrency: '₹',
    itemTotal: '',
  });

  // Edit Item
  const [editItem, setEditItem] = useState({
    editIndex: null,
    editName: '',
    editQuantity: '',
    editPrice: '',
    editCurrency: '₹',
  });

  /* Edit Image Size */

  const [sliderValue, setSliderValue] = useState(50);
  const [isOpenPop, setIsOpenPop] = useState(false);
  const open = () => setIsOpenPop(!isOpen);
  const close = () => setIsOpenPop(false);

  // add invoice items
  const addInvoiceItem = e => {
    e.preventDefault();

    // check if item is empty
    if (
      currentItem.itemName === '' ||
      currentItem.itemQuantity === '' ||
      currentItem.itemPrice === ''
    ) {
      alertMessage('❌ Please fill all the fields');
      return;
    } else if (currentItem.itemName === '') {
      alertMessage('❌ Please fill Item Name');
      return;
    } else if (currentItem.itemQuantity === '') {
      alertMessage('❌ Please fill Item Quantity');
      return;
    } else if (currentItem.itemPrice === '') {
      alertMessage('❌ Please fill Item Price');
      return;
    }

    //creating new state
    const newItem = {
      itemName: currentItem.itemName,
      itemQuantity: currentItem.itemQuantity,
      itemPrice: currentItem.itemPrice,
      itemCurrency: currentItem.itemCurrency,
      itemTotal: currentItem.itemQuantity * currentItem.itemPrice,
    };
    // adding new item to invoice items
    setInvoice({
      ...invoice,
      items: [...invoice.items, newItem],
    });
    // adding new item to formik state
    formik.setFieldValue('invoice.items', [...invoice.items, newItem]);

    // resetting current item
    setCurrentItem({
      itemName: '',
      itemQuantity: '',
      itemPrice: '',
      itemCurrency: '₹',
      itemTotal: '',
    });

    alertMessage('✅ Item added successfully');
  };

  /* Edit Invoice Item Starts */
  const EditInvoiceItem = index => {
    onOpen();
    setEditItem({
      editIndex: index,
      editName: invoice.items[index].itemName,
      editQuantity: invoice.items[index].itemQuantity,
      editPrice: invoice.items[index].itemPrice,
      editCurrency: invoice.items[index].itemCurrency,
    });
  };

  // save edit items to localstorage
  const saveEditItem = () => {
    const newItems = invoice.items.map((item, index) => {
      if (index === editItem.editIndex) {
        return {
          itemName: editItem.editName,
          itemQuantity: editItem.editQuantity,
          itemPrice: editItem.editPrice,
          itemCurrency: editItem.editCurrency,
          itemTotal: editItem.editPrice * editItem.editQuantity,
        };
      }
      return item;
    });
    setInvoice({
      ...invoice,
      items: newItems,
    });
    formik.setFieldValue('invoice.items', newItems);
    alertMessage('✅ Item updated successfully');
    onClose();
  };

  /* Edit Invoice Item Ends */

  /*Delete invoice items from local storage starts */

  const removeInvoiceItem = index => {
    const item = [...invoice.items];
    item.splice(index, 1);
    setInvoice({
      ...invoice,
      items: item,
    });
    formik.setFieldValue('invoice.items', item);
    alertMessage('✅ Item deleted successfully');
  };

  /* Delete invoice items from local storage ends */

  // upload signature in localstorage starts
  const signatureUpload = e => {
    let file = e.target.files[0];
    const fileType = file.type;

    if (fileType === 'image/png' || fileType === 'image/jpeg') {
      getBase64(file).then(base64 => {
        setInvoice({
          ...invoice,
          digitalSignature: {
            ...invoice.digitalSignature,
            signature: base64,
          },
        });
        formik.setFieldValue('invoice.digitalSignature.signature', base64);
      });
      e.target.value = '';
    } else {
      e.target.value = '';
      alertMessage('❌ Please upload png or jpg file');
    }
  };

  // save digital signature in localstorage
  const saveDigitalSignature = () => {
    setInvoice({
      ...invoice,
      yourDetails: {
        ...invoice.yourDetails,
        yourRegistrationNumber:
          formik.values.invoice.yourDetails.yourRegistrationNumber,
      },
      digitalSignature: {
        signature: formik.values.invoice.digitalSignature.signature,
        sealColor: formik.values.invoice.digitalSignature.sealColor,
        signatureSize: formik.values.invoice.digitalSignature.signatureSize,
        signatureToggle: formik.values.invoice.digitalSignature.signatureToggle,
      },
    });
    localStorage.setItem('invoice', JSON.stringify(invoice));

    alertMessage('😎Digital Signature Saved');
  };
  // upload signature in localstorage ends

  // Upload Image in localstorage starts

  const imageUpload = e => {
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
      setInvoice({
        ...invoice,
        yourLogo: {
          ...invoice.yourLogo,
          image: base64,
        },
      });
      formik.setFieldValue('invoice.yourLogo.image', base64);
      formik.setFieldValue('invoice.yourLogo.imageName', sliderValue);
    });
    alertMessage('😎 Comapny Logo Uploaded');
  };

  // Upload Image in localstorage ends

  // Clear All Data
  const clearAllData = () => {
    localStorage.clear();
    setInvoice({
      yourLogo: {
        image: '',
        imageSize: '',
      },
      yourDetails: {
        yourCompany: '',
        yourName: '',
        yourAddress: '',
        yourCity: '',
        yourWebsite: '',
        yourEmail: '',
        yourPhone: '',
        yourBank: '',
        yourAccountNumber: '',
        yourBankBranch: '',
        yourRegistrationNumber: '',
      },
      clientDetails: {
        clientName: '',
        clientAddress: '',
        clientCity: '',
        clientWebsite: '',
        clientEmail: '',
        clientPhone: '',
        clientCompany: '',
      },

      invoiceNumber: '',
      invoiceDate: '',
      dueDate: '',
      items: [],
      notes: {
        note: '',
        noteToggle: true,
      },
      terms: {
        term: '',
        termToggle: true,
      },
      digitalSignature: {
        signature: '',
        signatureSize: '',
        signatureToggle: true,
        sealColor: '',
      },
    });
    alertMessage('🗑️ All data cleared');
  };

  // Styles for the editor
  const backgroundColor =
    useColorModeValue('gray.100', 'gray.700') || 'gray.200';

  const textColor = useColorModeValue('gray.800', 'gray.200') || 'gray.800';

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4}>
          <Box>
            <Popover isOpen={isOpenPop} onClose={close} placement="top-start">
              <PopoverTrigger>
                {formik.values.invoice.yourLogo.image ? (
                  <Flex>
                    <Image
                      src={formik.values.invoice.yourLogo.image}
                      alt="company logo"
                      className="company-logo"
                      style={{
                        borderRadius: '10px',
                        marginBottom: '10px',
                      }}
                      w={formik.values.invoice.yourLogo.imageSize}
                      h={formik.values.invoice.yourLogo.imageSize}
                      onClick={() => {
                        document.getElementById('uploadFile').click();
                      }}
                    />{' '}
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
                          onClick={() => {
                            document.getElementById('uploadFile').click();
                          }}
                          icon={<RiIcons.RiUpload2Fill />}
                        >
                          Upload Image
                        </MenuItem>
                        <MenuItem
                          icon={<MdIcons.MdPhotoSizeSelectLarge />}
                          onClick={open}
                        >
                          Resize Logo
                        </MenuItem>{' '}
                        <MenuItem
                          icon={<RiIcons.RiDeleteBin3Line />}
                          onClick={() => {
                            formik.setFieldValue('invoice.yourLogo.image', '');
                            setInvoice({
                              ...invoice,
                              yourLogo: {
                                ...invoice.yourLogo,
                                image: '',
                                imageSize: '',
                              },
                            });
                            alertMessage('🗑️ Company Logo Cleared');
                          }}
                        >
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                ) : (
                  <Center
                    w="200px"
                    h="200px"
                    style={{
                      borderRadius: '10px',
                      marginBottom: '10px',
                      border: '4px dotted #eaeaea',
                    }}
                    onClick={() => {
                      document.getElementById('uploadFile').click();
                    }}
                  >
                    Add Logo
                  </Center>
                )}
              </PopoverTrigger>
              <PopoverContent w={300}>
                <PopoverHeader fontWeight="semibold">Resize Logo</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Center>
                    <Slider
                      mb={7}
                      aria-label="slider-ex-3"
                      defaultValue={formik.values.invoice.yourLogo.imageSize}
                      orientation="horizontal"
                      colorScheme={'purple'}
                      maxW="200"
                      min={100}
                      max={250}
                      onChange={v => {
                        setSliderValue(v);
                        setInvoice({
                          ...invoice,
                          yourLogo: {
                            ...invoice.yourLogo,
                            imageSize: v,
                          },
                        });
                        formik.setFieldValue('invoice.yourLogo.imageSize', v);
                      }}
                      _hover={{
                        cursor: 'grab',
                      }}
                    >
                      <SliderMark value={100} mt="3" ml="-2.5" fontSize="sm">
                        100px
                      </SliderMark>{' '}
                      <SliderMark value={150} mt="3" ml="-2.5" fontSize="sm">
                        150px
                      </SliderMark>{' '}
                      <SliderMark value={200} mt="3" ml="-2.5" fontSize="sm">
                        200px
                      </SliderMark>{' '}
                      <SliderMark value={250} mt="3" ml="-2.5" fontSize="sm">
                        250px
                      </SliderMark>
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb
                        boxSize={6}
                        _hover={{
                          cursor: 'grab',
                        }}
                      >
                        <FaIcons.FaPaperPlane color="black" fontSize={10} />
                      </SliderThumb>
                    </Slider>
                  </Center>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            {/* Image Size Slider  */}

            <input
              id="uploadFile"
              type="file"
              name="image"
              className="img"
              onChange={e => imageUpload(e)}
            />
          </Box>
        </Stack>

        {/* User Details Start*/}
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} my="5">
          <Box>
            <FormControl id="firstName">
              <FormLabel>Your Name</FormLabel>
              <Input
                type="text"
                name="invoice.yourDetails.yourName"
                size={'lg'}
                htmlSize={30}
                placeholder="Your Name"
                bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
                onChange={formik.handleChange}
                value={formik.values.invoice.yourDetails.yourName}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="youremail">
              <FormLabel>Your Email</FormLabel>
              <Input
                id="email"
                name="invoice.yourDetails.yourEmail"
                type="email"
                size={'lg'}
                htmlSize={30}
                placeholder="Your Email"
                bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
                onChange={formik.handleChange}
                value={formik.values.invoice.yourDetails.yourEmail}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="yourphone">
              <FormLabel>Your Phone</FormLabel>
              <Input
                type="text"
                size={'lg'}
                name="invoice.yourDetails.yourPhone"
                htmlSize={30}
                placeholder="Your Phone"
                bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
                onChange={formik.handleChange}
                value={formik.values.invoice.yourDetails.yourPhone}
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
                name="invoice.yourDetails.yourCompany"
                placeholder="Your Company"
                bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
                onChange={formik.handleChange}
                value={formik.values.invoice.yourDetails.yourCompany}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="youraddress">
              <FormLabel>Your Address</FormLabel>
              <Input
                type="text"
                size={'lg'}
                name="invoice.yourDetails.yourAddress"
                htmlSize={30}
                placeholder="Your Address"
                bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
                onChange={formik.handleChange}
                value={formik.values.invoice.yourDetails.yourAddress}
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
                name="invoice.yourDetails.yourCity"
                placeholder="Your City"
                bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
                onChange={formik.handleChange}
                value={formik.values.invoice.yourDetails.yourCity}
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
                name="invoice.yourDetails.yourWebsite"
                placeholder="Your Website"
                bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
                onChange={formik.handleChange}
                value={formik.values.invoice.yourDetails.yourWebsite}
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
                name="invoice.yourDetails.yourAccountNumber"
                onChange={formik.handleChange}
                value={formik.values.invoice.yourDetails.yourAccountNumber}
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
                name="invoice.yourDetails.yourBank"
                onChange={formik.handleChange}
                value={formik.values.invoice.yourDetails.yourBank}
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
                name="invoice.yourDetails.yourBankBranch"
                onChange={formik.handleChange}
                value={formik.values.invoice.yourDetails.yourBankBranch}
              />
            </FormControl>
          </Box>
        </Stack>
        {/* User Details End */}
        {/* Client Details Starts  */}
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
                name="invoice.clientDetails.clientName"
                onChange={formik.handleChange}
                value={formik.values.invoice.clientDetails.clientName}
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
                name="invoice.clientDetails.clientEmail"
                onChange={formik.handleChange}
                value={formik.values.invoice.clientDetails.clientEmail}
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
                name="invoice.clientDetails.clientPhone"
                onChange={formik.handleChange}
                value={formik.values.invoice.clientDetails.clientPhone}
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
                name="invoice.clientDetails.clientCompany"
                onChange={formik.handleChange}
                value={formik.values.invoice.clientDetails.clientCompany}
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
                name="invoice.clientDetails.clientAddress"
                onChange={formik.handleChange}
                value={formik.values.invoice.clientDetails.clientAddress}
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
                name="invoice.clientDetails.clientCity"
                onChange={formik.handleChange}
                value={formik.values.invoice.clientDetails.clientCity}
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
                name="invoice.clientDetails.clientWebsite"
                onChange={formik.handleChange}
                value={formik.values.invoice.clientDetails.clientWebsite}
              />
            </FormControl>
          </Box>
        </Stack>
        {/* Clinet Details End */}
        {/* Invoice Number And Dates Starts */}
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
                name="invoice.invoiceNumber"
                onChange={formik.handleChange}
                value={formik.values.invoice.invoiceNumber}
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
                name="invoice.invoiceDate"
                onChange={formik.handleChange}
                value={formik.values.invoice.invoiceDate}
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
                name="invoice.dueDate"
                onChange={formik.handleChange}
                value={formik.values.invoice.dueDate}
              />
            </FormControl>
          </Box>
        </Stack>
        {/* Invoice Number And Dates End */}
        {/* Invoice Items Starts */}
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} my="20">
          <Box>
            <FormControl id="itemName">
              <FormLabel>Item Name</FormLabel>
              <Input
                type="text"
                size={'lg'}
                htmlSize={30}
                placeholder="Item Name"
                bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
                name="invoice.items.itemName"
                onChange={e => {
                  setCurrentItem({
                    ...currentItem,
                    itemName: e.target.value,
                  });
                }}
                value={currentItem.itemName}
              />
            </FormControl>
          </Box>

          <Box>
            <FormControl id="itemQuantity">
              <FormLabel>Item Quantity</FormLabel>
              <Input
                type="number"
                min={0}
                onKeyDown={e =>
                  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
                }
                size={'lg'}
                width="100%"
                placeholder="Item Quantity"
                bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
                name="invoice.items.itemQuantity"
                value={currentItem.itemQuantity}
                onChange={e => {
                  setCurrentItem({
                    ...currentItem,
                    itemQuantity: e.target.value,
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="itemPrice" width="100%">
              <FormLabel>Item Price</FormLabel>
              <InputGroup size={'lg'}>
                <Input
                  type="number"
                  min={0}
                  onKeyDown={e =>
                    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
                  }
                  width="100%"
                  placeholder="Item Price"
                  bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                  color={
                    useColorModeValue('gray.800', 'gray.300') || 'gray.800'
                  }
                  name="invoice.items.itemPrice"
                  value={currentItem.itemPrice}
                  onChange={e => {
                    setCurrentItem({
                      ...currentItem,
                      itemPrice: e.target.value,
                    });
                  }}
                />
              </InputGroup>
            </FormControl>
          </Box>
          <Box pt={8}>
            <Menu size={'sm'} autoSelect={false}>
              <MenuButton
                mt={'1'}
                bg={'green.100'}
                color={'gray.900'}
                as={Button}
                rounded={'lg'}
                _focus={{
                  outline: 'none',
                  bg: 'green.100',
                }}
                _hover={{
                  bg: 'green.200',
                }}
                _active={{
                  bg: 'green.100',
                }}
              >
                {' '}
                {currency}
              </MenuButton>
              <MenuList p="2" rounded="xl">
                {' '}
                <Menu>
                  <InputGroup>
                    <Input
                      onChange={e => setSearchTerm(e.target.value)}
                      value={searchTerm}
                      my={'2'}
                      type="text"
                      width="100%"
                      placeholder="Search currency.."
                      bg={
                        useColorModeValue('gray.100', 'gray.700') || 'gray.200'
                      }
                      color={
                        useColorModeValue('gray.800', 'gray.300') || 'gray.800'
                      }
                      _focus={{
                        outline: 'none',
                        boxShadow: 'none',
                      }}
                    />
                    <InputRightElement
                      children={<RiIcons.RiSearch2Line />}
                      mt={'2'}
                      color="green.500"
                    />
                  </InputGroup>
                </Menu>
                <Menu>
                  {Search && searchTerm.length > 0
                    ? Search.slice(0, 5).map((item, index) => (
                        <MenuItem
                          my={'1'}
                          key={item.name}
                          command={item.symbol}
                          bg={item.symbol === currency && 'green.100'}
                          color={item.symbol === currency && 'gray.900'}
                          onClick={() => {
                            setCurrency(item.symbol);
                            setCurrentItem({
                              ...currentItem,
                              itemCurrency: item.symbol,
                            });
                            formik.setFieldValue(
                              'invoice.items.itemCurrency',
                              item.symbol
                            );
                            setSearchTerm('');
                          }}
                          rounded="lg"
                          _focus={{
                            outline: 'none',
                            boxShadow: 'none',
                          }}
                        >
                          {item.name}
                        </MenuItem>
                      ))
                    : CurrencyData.filter(item =>
                        customCurrency.includes(item.name)
                      ).map(item => (
                        <MenuItem
                          my={'1'}
                          key={item.name}
                          command={item.symbol}
                          bg={item.symbol === currency && 'green.100'}
                          color={item.symbol === currency && 'gray.900'}
                          onClick={() => {
                            setCurrency(item.symbol);
                            setCurrentItem({
                              ...currentItem,
                              itemCurrency: item.symbol,
                            });
                            formik.setFieldValue(
                              'invoice.items.itemCurrency',
                              item.symbol
                            );
                            setSearchTerm('');
                          }}
                          rounded="lg"
                          _focus={{
                            outline: 'none',
                            boxShadow: 'none',
                          }}
                        >
                          {item.name}
                        </MenuItem>
                      ))}
                </Menu>
              </MenuList>
            </Menu>
          </Box>
          <Box pt={8}>
            <Button
              variant="outline"
              _focus={{
                outline: 'none',
              }}
              size={'lg'}
              fontWeight={600}
              color={'black'}
              bg={'white'}
              borderRadius={'lg'}
              _hover={{
                bg: 'whiteAlpha.800',
              }}
              onClick={addInvoiceItem}
            >
              {' '}
              Add Item
            </Button>
          </Box>
        </Stack>
        {/* Invoice Items End */}
        {/* Invoice Items List Starts */}
        <TableContainer mt="20" spacing={8} scrollBehavior="smooth">
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Item Name</Th>
                <Th>Item Quantity</Th>
                <Th>Item Price</Th>
                <Th>Item Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {invoice.items &&
                invoice.items.map((item, index) => (
                  <Tr key={index}>
                    <Td width={'20%'}>{item.itemName}</Td>
                    <Td>{item.itemQuantity} </Td>
                    <Td>
                      {item.itemCurrency} {item.itemPrice}
                    </Td>
                    <Td>
                      {item.itemCurrency} {item.itemTotal}
                    </Td>
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
                          icon={<FaIcons.FaRegEdit />}
                          onClick={() => EditInvoiceItem(index)}
                        >
                          Edit
                        </MenuItem>{' '}
                        <MenuItem
                          icon={<RiIcons.RiDeleteBin3Line />}
                          onClick={() => removeInvoiceItem(index)}
                        >
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
          <ModalContent
            p={4}
            rounded={'3xl'}
            border={2}
            borderColor={useColorModeValue('gray.700', 'gray.100')}
            borderStyle={'solid'}
          >
            <ModalHeader>Edit Item #{editItem.editIndex} </ModalHeader>
            <ModalCloseButton
              _focus={{
                outline: 'none',
              }}
            />
            <ModalBody>
              {' '}
              <Box>
                <FormControl id="editName">
                  <FormLabel>Edit Item Name</FormLabel>
                  <Input
                    type="text"
                    size={'lg'}
                    htmlSize={30}
                    placeholder="Edit Item Name"
                    bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                    color={
                      useColorModeValue('gray.800', 'gray.300') || 'gray.800'
                    }
                    value={editItem.editName}
                    onChange={e =>
                      setEditItem({ ...editItem, editName: e.target.value })
                    }
                  />
                </FormControl>
              </Box>{' '}
              <Box>
                <FormControl id="editQuantity">
                  <FormLabel>Edit Item Quantity</FormLabel>
                  <Input
                    type="number"
                    min={0}
                    onKeyDown={e =>
                      ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
                    }
                    size={'lg'}
                    htmlSize={30}
                    placeholder="Edit Item Quantity"
                    bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                    color={
                      useColorModeValue('gray.800', 'gray.300') || 'gray.800'
                    }
                    value={editItem.editQuantity}
                    onChange={e =>
                      setEditItem({ ...editItem, editQuantity: e.target.value })
                    }
                  />
                </FormControl>
              </Box>{' '}
              <Box>
                <FormControl id="editPrice">
                  <FormLabel>Edit Item Price</FormLabel>
                  <Input
                    type="number"
                    min={0}
                    onKeyDown={e =>
                      ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
                    }
                    size={'lg'}
                    htmlSize={30}
                    placeholder="Edit Item Price"
                    bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                    color={
                      useColorModeValue('gray.800', 'gray.300') || 'gray.800'
                    }
                    value={editItem.editPrice}
                    onChange={e =>
                      setEditItem({ ...editItem, editPrice: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button
                _focus={{
                  outline: 'none',
                }}
                colorScheme="primary"
                variant="outline"
                mr={3}
                onClick={saveEditItem}
              >
                {' '}
                Save
              </Button>
              <Button
                _focus={{
                  outline: 'none',
                }}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* Invoice Items List Ends */}
        {invoice.items.length > 0 && (
          <Stack my={10}>
            <Flex>
              <Spacer />
              <Box align="end">
                <Grid gap={4}>
                  <GridItem colSpan={2} h="10">
                    <FormControl id="invoiceTotal" mb={'20'}>
                      <FormLabel>Tax %</FormLabel>
                      <InputGroup>
                        <Input
                          type="number"
                          min={0}
                          onKeyDown={e =>
                            ['e', 'E', '+', '-'].includes(e.key) &&
                            e.preventDefault()
                          }
                          width="100%"
                          name="tax"
                          placeholder="Tax %"
                          bg={backgroundColor}
                          color={textColor}
                          value={formik.values.invoice.tax}
                          onChange={e => {
                            formik.setFieldValue('invoice.tax', e.target.value);
                          }}
                        />
                        <InputRightAddon
                          bg={'purple.100'}
                          color={'gray.700'}
                          children={<RiIcons.RiPercentLine color="green.500" />}
                        />
                      </InputGroup>
                    </FormControl>
                  </GridItem>
                </Grid>
              </Box>
            </Flex>
          </Stack>
        )}
        {/* Invoice Notes Starts  */}
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
                isDisabled={
                  formik.values.invoice.notes.noteToggle ? true : false
                }
                size={'lg'}
                name="invoice.notes.note"
                placeholder="It was great doing business with you."
                bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
                value={formik.values.invoice.notes.note}
                onChange={formik.handleChange}
              />

              {
                // TOGGLE Icon button
                <Tooltip label={invoice.notes.noteToggle ? 'Show' : 'Hide'}>
                  <IconButton
                    variant="outline"
                    aria-label="Options"
                    mx={2}
                    icon={
                      formik.values.invoice.notes.noteToggle ? (
                        <BiIcons.BiHide />
                      ) : (
                        <BiIcons.BiShow />
                      )
                    }
                    onClick={e =>
                      formik.setFieldValue(
                        'invoice.notes.noteToggle',
                        !formik.values.invoice.notes.noteToggle
                      )
                    }
                  />
                </Tooltip>
              }
            </Flex>
          </Box>
        </Stack>
        {/* Invoice Notes Ends  */}
        {/* Invocie Total Starts  */}
        <Stack my={10}>
          <Box>
            <Text mb="8px">Terms & Condition : </Text>
            <Flex>
              <Textarea
                isDisabled={
                  formik.values.invoice.terms.termToggle ? true : false
                }
                size={'lg'}
                name="invoice.terms.term"
                placeholder="Please make the payment by the due date"
                bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
                color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
                value={formik.values.invoice.terms.term}
                onChange={formik.handleChange}
              />
              {
                // TOGGLE Icon button
                <Tooltip
                  label={
                    formik.values.invoice.terms.termToggle ? 'Show' : 'Hide'
                  }
                >
                  <IconButton
                    variant="outline"
                    aria-label="Options"
                    mx={2}
                    icon={
                      formik.values.invoice.terms.termToggle ? (
                        <BiIcons.BiHide />
                      ) : (
                        <BiIcons.BiShow />
                      )
                    }
                    onClick={e =>
                      formik.setFieldValue(
                        'invoice.terms.termToggle',
                        !formik.values.invoice.terms.termToggle
                      )
                    }
                  />
                </Tooltip>
              }
            </Flex>
          </Box>
        </Stack>
        {/* Invoice Total Ends  */}

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
        >
          <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
          <ModalContent
            p={{
              base: '2',
              md: '4',
            }}
            rounded={'3xl'}
            border={2}
            borderColor={useColorModeValue('gray.700', 'gray.100')}
            borderStyle={'solid'}
          >
            <ModalHeader p={'2'}>
              <Text fontSize={'3xl'}>Digital Signature</Text>
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
                          'invoice.digitalSignature.sealColor',
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
                          'invoice.digitalSignature.sealColor',
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
                          'invoice.digitalSignature.sealColor',
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
                          'invoice.digitalSignature.sealColor',
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
                          'invoice.digitalSignature.sealColor',
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
                      value={
                        formik.values.invoice.yourDetails.yourRegistrationNumber
                      }
                      type="number"
                      min={0}
                      onKeyDown={e =>
                        ['e', 'E', '+', '-'].includes(e.key) &&
                        e.preventDefault()
                      }
                      onChange={e =>
                        formik.setFieldValue(
                          'invoice.yourDetails.yourRegistrationNumber',
                          e.target.value
                        )
                      }
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
                      {formik.values.invoice.digitalSignature.signature && (
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
                              'invoice.digitalSignature.signature',
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
                  rounded={'3xl'}
                  border={2}
                  borderColor={useColorModeValue('gray.700', 'gray.100')}
                  bg={'white'}
                  color={'gray.700'}
                  borderStyle={'solid'}
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
                        formik.values.invoice.digitalSignature
                          .signatureToggle ? (
                          <BiIcons.BiShow />
                        ) : (
                          <BiIcons.BiHide />
                        )
                      }
                      onClick={() => {
                        formik.setFieldValue(
                          'invoice.digitalSignature.signatureToggle',
                          !formik.values.invoice.digitalSignature
                            .signatureToggle
                        );
                      }}
                    />
                  </Flex>

                  {formik.values.invoice.digitalSignature.signatureToggle && (
                    <Stack my={'3rem'}>
                      {formik.values.invoice.yourDetails
                        .yourRegistrationNumber && (
                        <Box
                          className="stamp is-nope"
                          borderWidth="0.5rem"
                          borderStyle="double"
                          borderRadius="10px"
                          color={
                            formik.values.invoice.digitalSignature.sealColor
                          }
                          borderColor={
                            formik.values.invoice.digitalSignature.sealColor
                          }
                        >
                          {formik.values.invoice.yourDetails.yourCompany} <br />{' '}
                          Reg. No :
                          {
                            formik.values.invoice.yourDetails
                              .yourRegistrationNumber
                          }
                        </Box>
                      )}
                      {formik.values.invoice.digitalSignature.signature && (
                        <Flex justifyContent={'flex-end'}>
                          <Image
                            src={
                              formik.values.invoice.digitalSignature.signature
                            }
                            alt="signature"
                            className="signature"
                            width={
                              formik.values.invoice.digitalSignature
                                .signatureSize
                            }
                            height={
                              formik.values.invoice.digitalSignature
                                .signatureSize
                            }
                          />
                        </Flex>
                      )}
                      <Box>
                        <Text align="end" fontWeight={'500'}>
                          {formik.values.invoice.yourDetails.yourName}
                        </Text>
                        <Text align="end" fontWeight={'500'}>
                          {formik.values.invoice.invoiceDate}
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

        {/* Save Button */}
        <Flex>
          <Box mt={8}>
            <Button
              type="submit"
              _focus={{
                outline: 'none',
              }}
              fontWeight={600}
              color={'white'}
              bg={'purple.400'}
              borderRadius={'lg'}
              href={'#'}
              _hover={{
                bg: 'purple.700',
              }}
              rightIcon={<RiIcons.RiSaveLine />}
            >
              Save
            </Button>
          </Box>
          <Spacer />
          <Box mt={8}>
            <Button
              _focus={{
                outline: 'none',
              }}
              fontWeight={600}
              color={'black'}
              bg={'white'}
              borderRadius={'lg'}
              href={'#'}
              _hover={{
                bg: 'whiteAlpha.800',
              }}
              onClick={clearAllData}
              variant="outline"
              rightIcon={<RiIcons.RiDeleteBin2Line />}
            >
              Clear All
            </Button>
          </Box>
        </Flex>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
