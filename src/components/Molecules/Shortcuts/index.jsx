import {
  Box,
  Button,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  Kbd,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';
import * as RiIcon from 'react-icons/ri';

export default function Shortcuts() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box mx={{ base: 1, md: 3 }}>
        <Button
          bg={useColorModeValue('gray.900', 'gray.100')}
          color={useColorModeValue('gray.100', 'gray.900')}
          _hover={{
            bg: useColorModeValue('gray.800', 'gray.200'),
          }}
          aria-label="Background"
          rightIcon={<RiIcon.RiKeyboardFill />}
          _focus={{
            outline: 'none',
          }}
          onClick={onOpen}
        >
          Shortcut
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
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
              <Text fontSize={'2xl'}>Keyboard Shortcuts</Text>
              <Text fontSize={'16px'} fontWeight="normal">
                These are the keys you can use to navigate the app.
              </Text>
            </ModalHeader>
            <ModalCloseButton
              _focus={{
                outline: 'none',
              }}
            />
            <ModalBody>
              <Box p={'2'}>
                <Text fontSize={'16px'} fontWeight="normal">
                  save - <Kbd>ctrl + s</Kbd>
                </Text>
                <Divider my="2" />
                <Text fontSize={'16px'} fontWeight="normal">
                  clear all data - <Kbd>ctrl + r</Kbd>
                </Text>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
