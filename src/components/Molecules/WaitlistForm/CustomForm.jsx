import React, { useState } from 'react';
import {
  Stack,
  Input,
  Button,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useToast,
  Text,
} from '@chakra-ui/react';

import { useEffect } from 'react';
export default function CustomForm({ status, message, onValidated }) {
  const [email, setEmail] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const statuses = ['success', 'error', 'warning', 'info'];

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

  const submit = () => {
    // check if email is valid and not empty using regex
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      onValidated({ EMAIL: email });
      setEmail('');
    } else {
      if (email === '') {
        alertMessage('Please enter your email', 'error');
      } else {
        alertMessage('Invalid email address provided', 'error');
      }
    }
  };

  useEffect(() => {
    if (status === 'success') {
      onOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, message]);

  return (
    <>
      <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
        <Input
          type="text"
          htmlSize={30}
          placeholder="Enter your email"
          bg={useColorModeValue('gray.100', 'gray.700') || 'gray.200'}
          color={useColorModeValue('gray.800', 'gray.300') || 'gray.800'}
          rounded={'lg'}
          border={0}
          _focus={{
            bg: useColorModeValue('gray.100', 'gray.700') || 'gray.200',
            outline: 'none',
          }}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Button
          color={useColorModeValue('gray.50', 'gray.700')}
          rounded={'lg'}
          px={10}
          mx={2}
          bg={useColorModeValue('gray.800', 'gray.50')}
          _hover={{
            bg: useColorModeValue('gray.700', 'gray.100'),
          }}
          _focus={{
            outline: 'none',
          }}
          onClick={submit}
        >
          Join Waitlist 💌
        </Button>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
        <ModalContent
          m={2}
          p={{
            base: 2,
            md: 4,
          }}
          rounded={'xl'}
          border={2}
          borderColor={useColorModeValue('gray.700', 'gray.100')}
          bg={useColorModeValue('gray.100', 'gray.900')}
          borderStyle={'solid'}
        >
          <ModalCloseButton
            _focus={{
              outline: 'none',
            }}
          />
          <ModalBody p={5} m={5}>
            <Text fontSize={{ base: 'sm', lg: 'md' }}>
              {status === 'success' ? (
                <>
                  <p>{message}</p>
                </>
              ) : (
                <>
                  <p>We are sorry but we could not add you to the waitlist.</p>
                  <p>Please try again later.</p>
                </>
              )}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
