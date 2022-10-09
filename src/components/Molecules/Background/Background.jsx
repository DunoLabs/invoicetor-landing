import React, { useEffect } from 'react';
import {
  Box,
  Button,
  HStack,
  Circle,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  Text,
  IconButton,
  useDisclosure,
  DrawerCloseButton,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import * as RiIcon from 'react-icons/ri';
import { useState, useContext } from 'react';
import { InvoiceContext } from 'core/InvoiceContext';

export default function Background() {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { invoice, setInvoice } = useContext(InvoiceContext);
  const btnRef = React.useRef();
  const statuses = ['success', 'error', 'warning', 'info'];

  const alertMessage = (message, status) => {
    toast({
      status: statuses.includes(status) ? status : 'info',
      title: message,
      duration: 2000,
      isClosable: true,
      position: 'bottom-right',
    });
  };

  const colorsValues = ['red', 'purple', 'yellow', 'green', 'blue', 'pink'];
  const [colors, setColors] = useState('purple');

  useEffect(() => {
    setColors(invoice.backgroundColor);
  }, [invoice.backgroundColor]);

  const saveBackgroundColor = () => {
    setInvoice({
      ...invoice,
      backgroundColor: colors,
    });
    // show toast
    alertMessage('Background color changed', 'success');
  };

  return (
    <>
      <Box mx={{ base: 1, md: 3 }}>
        <IconButton
          bg={useColorModeValue('gray.900', 'gray.100')}
          color={useColorModeValue('gray.100', 'gray.900')}
          _hover={{
            bg: useColorModeValue('gray.800', 'gray.200'),
          }}
          ref={btnRef}
          aria-label="Background"
          icon={<RiIcon.RiPaintFill />}
          onClick={onOpen}
          _focus={{
            outline: 'none',
          }}
        />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          initialFocusRef={btnRef}
          blockScrollOnMount={false}
          size="xs"
        >
          <DrawerOverlay bg="none" backdropFilter="auto" />
          <DrawerCloseButton />
          <DrawerContent
            my={{
              base: '0',
              md: '20',
            }}
            mx={'2'}
            p={'3'}
            rounded={'xl'}
            bg={'white'}
            color={'gray.900'}
          >
            <DrawerBody p={'0'}>
              <Text mt={'5'} fontSize="xl" fontWeight={'semibold'} px="2">
                Background
              </Text>
              <Text
                fontSize={'sm'}
                px="2"
                mb={'6'}
                color={'gray.400'}
                fontWeight={'500'}
              >
                see how your invoice looks on different backgrounds on the
                preview page.
              </Text>

              <HStack
                justifyContent="center"
                bg={colors + '.100'}
                p="5"
                rounded={'xl'}
              >
                {colorsValues.map(color => (
                  <Circle
                    size="38px"
                    bg={color + '.400'}
                    _hover={{
                      bg: color + '.500',
                      cursor: 'pointer',
                    }}
                    _focus={{
                      outline: 'none',
                    }}
                    border="2px solid"
                    borderColor={'white'}
                    onClick={() => setColors(color)}
                  />
                ))}
              </HStack>
              <Button
                size="sm"
                my={'4'}
                variant="outline"
                color={'gray.900'}
                _hover={{
                  bg: colors + '.100',
                }}
                _focus={{
                  outline: 'none',
                }}
                onClick={() => {
                  setColors('gray');
                }}
                rightIcon={<RiIcon.RiPaintFill />}
              >
                Default Backgorund
              </Button>
            </DrawerBody>

            <DrawerFooter>
              <Button
                variant="outline"
                colorScheme={'gray.900'}
                size={'sm'}
                mr={3}
                _hover={{
                  bg: 'gray.100',
                }}
                onClick={onClose}
                _focus={{
                  outline: 'none',
                }}
              >
                Cancel
              </Button>
              <Button
                size={'sm'}
                bg="gray.900"
                color={'white'}
                _hover={{
                  bg: 'gray.800',
                }}
                _focus={{
                  outline: 'none',
                }}
                onClick={saveBackgroundColor}
              >
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
