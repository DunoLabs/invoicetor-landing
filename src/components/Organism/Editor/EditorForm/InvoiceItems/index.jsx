import 'components/Organism/Editor/Editor.scss';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Grid,
  GridItem,
  InputRightAddon,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  TableContainer,
  Button,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
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
  useToast,
} from '@chakra-ui/react';
import CurrencyData from '../../CurrencyData/CurrencyData.json';

import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';

export default function InvoiceItems({
  invoiceItems,
  tax,
  getItems,
  resetForm,
}) {
  const toast = useToast();
  const statuses = ['success', 'error', 'warning', 'info'];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formik = useFormik({
    initialValues: { invoiceItems, tax },
  });

  useEffect(() => {
    if (resetForm) {
      formik.resetForm();
    }
  }, [resetForm, formik]);

  useEffect(() => {
    getItems(formik.values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.invoiceItems, formik.values.tax]);

  // aleart message
  const alertMessage = (message, status) => {
    toast({
      status: statuses.includes(status) ? status : 'info',
      title: message,
      duration: 2000,
      isClosable: true,
      position: 'bottom-right',
    });
  };

  const customCurrency = ['US Dollar', 'Indian Rupee', 'Euro'];
  const [searchTerm, setSearchTerm] = useState('');
  const [currency, setCurrency] = useState('₹');
  const Search = CurrencyData.filter(item => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
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

  // add invoiceItems items
  const addInvoiceItem = e => {
    e.preventDefault();

    // check if item is empty
    if (
      currentItem.itemName === '' ||
      currentItem.itemQuantity === '' ||
      currentItem.itemPrice === ''
    ) {
      alertMessage('Please fill all the fields', 'error');
      return;
    } else if (currentItem.itemName === '') {
      alertMessage('Please enter item name', 'error');
      return;
    } else if (currentItem.itemQuantity === '') {
      alertMessage('Please enter item quantity', 'error');
      return;
    } else if (currentItem.itemPrice === '') {
      alertMessage('Please enter item price', 'error');
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
    // adding new item to formik state
    formik.setFieldValue('invoiceItems', [
      ...formik.values.invoiceItems,
      newItem,
    ]);

    // resetting current item
    setCurrentItem({
      itemName: '',
      itemQuantity: '',
      itemPrice: '',
      itemCurrency: '₹',
      itemTotal: '',
    });

    alertMessage('Item added successfully', 'success');
  };

  // save edit items to localstorage
  const saveEditItem = () => {
    const newItems = invoiceItems.map((item, index) => {
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

    formik.setFieldValue('invoiceItems', newItems);
    alertMessage('Item updated successfully', 'success');
    onClose();
  };
  /* Edit invoiceItems Item Starts */
  const EditInvoiceItem = index => {
    onOpen();
    setEditItem({
      editIndex: index,
      editName: formik.values.invoiceItems[index].itemName,
      editQuantity: formik.values.invoiceItems[index].itemQuantity,
      editPrice: formik.values.invoiceItems[index].itemPrice,
      editCurrency: formik.values.invoiceItems[index].itemCurrency,
    });
  };

  /* Edit invoiceItems Item Ends */
  /*Delete invoiceItems items from local storage starts */

  const removeInvoiceItem = index => {
    const item = [...formik.values.invoiceItems];
    item.splice(index, 1);
    formik.setFieldValue('invoiceItems', item);
    alertMessage('Item deleted successfully', 'success');
  };

  /* Delete invoiceItems items from local storage ends */

  // Styles for the editor
  const backgroundColor =
    useColorModeValue('gray.100', 'gray.700') || 'gray.200';

  const textColor = useColorModeValue('gray.800', 'gray.200') || 'gray.800';

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
        {/* invoiceItems Items Starts */}
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
          <Box>
            <FormControl id="itemName">
              <FormLabel>Item Name</FormLabel>
              <Input
                type="text"
                size={'lg'}
                htmlSize={30}
                placeholder="Item Name"
                bg={useColorModeValue('gray.100', 'gray.800')}
                color={useColorModeValue('gray.800', 'gray.300')}
                name="invoiceItems.itemName"
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
                bg={useColorModeValue('gray.100', 'gray.800')}
                color={useColorModeValue('gray.800', 'gray.300')}
                name="invoiceItems.itemQuantity"
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
                  bg={useColorModeValue('gray.100', 'gray.800')}
                  color={useColorModeValue('gray.800', 'gray.300')}
                  name="invoiceItems.itemPrice"
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
                      bg={useColorModeValue('gray.100', 'gray.800')}
                      color={useColorModeValue('gray.800', 'gray.300')}
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
                              'invoiceItems.itemCurrency',
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
                              'invoiceItems.itemCurrency',
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
        {/* invoiceItems Items End */}
        {/* invoiceItems Items List Starts */}
        <TableContainer mt="20" spacing={8} scrollBehavior="smooth">
          <Table
            variant="striped"
            bg={useColorModeValue('gray.100', 'gray.800')}
            color={useColorModeValue('gray.800', 'gray.300')}
            rounded="lg"
          >
            <Thead>
              <Tr>
                <Th>Item Name</Th>
                <Th>Item Quantity</Th>
                <Th>Item Price</Th>
                <Th>Item Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {formik.values.invoiceItems &&
                formik.values.invoiceItems.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.itemName}</Td>
                    <Td>{item.itemQuantity} </Td>
                    <Td>
                      {item.itemCurrency} {item.itemPrice}
                    </Td>
                    <Td>
                      {item.itemCurrency} {item.itemTotal}
                    </Td>
                    <Td>
                      <Menu>
                        <MenuButton
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
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay bg="blackAlpha.300" />
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
        {/* invoiceItems Items List Ends */}
        {formik.values.invoiceItems.length > 0 && (
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
                          value={formik.values.tax}
                          onChange={e => {
                            formik.setFieldValue('tax', e.target.value);
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
      </Box>
    </React.Fragment>
  );
}
