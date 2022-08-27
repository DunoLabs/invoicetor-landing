import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';

import { getFeaturedUpdates } from './featured-updates';

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
  // ModalCloseButton,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  Icon,
  useColorModeValue,
  useBreakpointValue,
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  useDisclosure,
  Divider,
  Tooltip,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  // ArrowForwardIcon,
} from '@chakra-ui/icons';

const NAV_ITEMS = [
  // {
  //   label: 'Work',
  //   to: '/work',
  //   children: [
  //     {
  //       label: 'Explore Design Work',
  //       subLabel: 'Trending Design to inspire you',
  //       href: '#',
  //     },
  //     {
  //       label: 'New Templates and features',
  //       subLabel: "some of the best invoice designs we've seen",
  //       href: '#',
  //     },
  //   ],
  // },
  {
    to: '/opensource',
    label: 'Open Source',
  },
  {
    to: '/about',
    label: 'About Us',
  },
  {
    to: '/one-time-editor',
    label: 'One-Time Editor',
  },
];

const afterElement = {
  zIndex: '-1',
  content: '""',
  background: 'inherit',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      minW="100%"
      zIndex="4"
      _after={afterElement}
    >
      <Flex
        style={{
          backdropFilter: 'blur( 7px )',
          border: 'none',
        }}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue(
            'rgba(255, 255, 255, 0.8)',
            'rgba(26, 32, 44, 0.8)'
          ),
        }}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            _focus={{
              outline: 'none',
            }}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            fontSize="2xl"
            mx={10}
            fontWeight={600}
          >
            <Link
              as={NavLink}
              _hover={{
                textDecoration: 'none',
                color: useColorModeValue('purple.400', 'purple.400'),
              }}
              className="navbar-brand"
              style={{
                textDecoration: 'none',
              }}
              to="/"
              _focus={{
                outline: 'none',
              }}
            >
              Invoicetor
            </Link>
          </Text>
          <Center>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Center>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          align={'center'}
          spacing={6}
          mx={{
            base: 0,
            md: 12,
          }}
        >
          {/* <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}
            _focus={{
              outline: 'none',
            }}
          >
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'purple.400'}
            borderRadius={'lg'}
            size={'sm'}
            href={'#'}
            _hover={{
              bg: 'purple.700',
            }}
            _focus={{
              outline: 'none',
            }}
          >
            Sign Up
          </Button> */}
          <Flex
            justify={'start'}
            display={{
              base: 'none',
              md: 'flex',
            }}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  borderRadius={'lg'}
                  bg={useColorModeValue('gray.900', 'white') || 'gray.200'}
                  color={useColorModeValue('gray.100', 'gray.800')}
                  _hover={{
                    bg: useColorModeValue('gray.800', 'gray.100'),
                  }}
                  _focus={{
                    outline: 'none',
                  }}
                >
                  Sponsor 💜
                </Button>
              </PopoverTrigger>
              <PopoverContent
                bg={useColorModeValue('white', 'gray.700')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                boxShadow={'lg'}
                borderRadius={'lg'}
                _focus={{
                  outline: 'none',
                }}
              >
                <PopoverHeader fontWeight="semibold">
                  {' '}
                  Sponsor this project 🤝🏻
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  Invoicetor should remain free. Forever. Unfortunately, this
                  isn't possible without your support. If Invoicetor has made
                  your life easier, you can support our team.
                </PopoverBody>
                <PopoverFooter
                  border="0"
                  d="flex"
                  alignItems="center"
                  justifyContent="end"
                  pb={4}
                >
                  <Link
                    href="https://github.com/sponsors/wh0sumit"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    <Button
                      color={useColorModeValue('gray.100', 'gray.800')}
                      bg={
                        useColorModeValue('purple.400', 'white') || 'gray.200'
                      }
                      _hover={{
                        bg:
                          useColorModeValue('purple.500', 'white') ||
                          'gray.200',
                      }}
                      as={'a'}
                      target="_blank"
                      href="https://github.com/sponsors/wh0sumit"
                      _focus={{
                        outline: 'none',
                      }}
                    >
                      Buy us a coffee ☕
                    </Button>
                  </Link>
                </PopoverFooter>
              </PopoverContent>
            </Popover>
          </Flex>
          <ColorModeSwitcher
            justifySelf="flex-end"
            // display={{ base: 'none', md: 'inline-flex' }}
            _focus={{
              outline: 'none',
            }}
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

// Desktop Navbar Item

const DesktopNav = () => {
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const ActiveLinkColor = useColorModeValue('purple.600', 'purple.100');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const featuredUpdatesContentRef = useRef(getFeaturedUpdates());
  // const [moreFeaturedContentPopup, setMoreFeaturedContentPopup] =
  useState(false);
  return (
    <>
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem, index) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                {navItem.children ? (
                  <Link>{navItem.label}</Link>
                ) : (
                  <Link
                    as={NavLink}
                    end
                    style={{
                      padding: '0.5rem',
                      fontWeight: 500,
                    }}
                    to={navItem.to}
                    _activeLink={{
                      color: ActiveLinkColor,
                      fontWeight: 600,
                    }}
                    _hover={{
                      color: linkHoverColor,
                      textDecoration: 'none',
                    }}
                    _focus={{
                      outline: 'none',
                    }}
                  >
                    {navItem.label}
                  </Link>
                )}
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={1}
                  borderColor="dark"
                  boxShadow={'xl'}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}
                >
                  <Stack>
                    {navItem.children.map(child => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
        {/* <Button >
        Open
      </Button> */}
        <Tooltip
          hasArrow
          placement="right-end"
          label={
            getFeaturedUpdates().length > 0
              ? getFeaturedUpdates().length + ' New Updates'
              : 'No Updates'
          }
        >
          <Link
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            style={{
              fontWeight: 500,
            }}
            _activeLink={{
              color: ActiveLinkColor,
              fontWeight: 600,
            }}
            _hover={{
              color: linkHoverColor,
              textDecoration: 'none',
            }}
            _focus={{
              outline: 'none',
            }}
          >
            What's New 💜
          </Link>
        </Tooltip>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="md"
        >
          <DrawerOverlay bg="blackAlpha.300" />
          <DrawerContent
            my={'10'}
            mx={'2'}
            p={'3'}
            rounded={'xl'}
            bg={'white'}
            color={'gray.900'}
          >
            <DrawerCloseButton
              _focus={{
                outline: 'none',
              }}
            />
            <DrawerHeader>
              What's New? Featured Updates ✨
              <Text fontSize="xs" my="2">
                Latest <span>version {'(0.1.9)'}</span>
              </Text>
              <Divider />
            </DrawerHeader>

            <DrawerBody>
              {featuredUpdatesContentRef.current?.map(
                (featuredContent, featuredContentIndex) => {
                  return (
                    <FeaturedContentWrapper
                      key={featuredContentIndex}
                      content={featuredContent}
                    />
                  );
                }
              )}
              {/* <Text
                as={Link}
                size={'sm'}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('purple.400', 'purple.100'),
                }}
                onClick={() =>
                  setMoreFeaturedContentPopup(!moreFeaturedContentPopup)
                }
              >
                {'More Updates'} <ArrowForwardIcon />
              </Text> */}
            </DrawerBody>

            <DrawerFooter>
              <Button
                variant="outline"
                mr={3}
                onClick={onClose}
                size="sm"
                bg="gray.900"
                _hover={{ bg: 'gray.700' }}
              >
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Stack>

      {/* What's New Modal  */}
      {/* 
      <Modal
        isOpen={moreFeaturedContentPopup}
        onClose={() => setMoreFeaturedContentPopup(!moreFeaturedContentPopup)}
        size={'2xl'}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            filter: 'blur(80%)',
          }}
        />
        <ModalContent
          bg={useColorModeValue('white', 'gray.800')}
          style={{
            borderColor: 'transparent',
            width: '560px',
            height: 'fit-content',
            // centering content
            marginRight: 'auto',
            marginLeft: 'auto',
            marginBottom: 'auto',
            marginTop: 'auto',
            // removing default padding from modal
            padding: '16px 24px',
          }}
          p={{
            base: '2',
            md: '4',
          }}
          rounded="xl"
          border={2}
          borderColor={useColorModeValue('gray.700', 'gray.100')}
          borderStyle={'solid'}
        >
          <ModalHeader>
            What's New? Featured Updates ✨
            <Text fontSize="xs" my="2">
              Latest <span>version {'(0.1.9)'}</span>
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {featuredUpdatesContentRef.current?.map(
              (featuredContent, featuredContentIndex) => {
                return (
                  <FeaturedContentWrapper
                    key={featuredContentIndex}
                    content={featuredContent}
                  />
                );
              }
            )}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal> */}
      {/* End of What's New Modal */}
    </>
  );
};

// Desktop Sub Nav Item
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ textDecoration: 'none' }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box align={'start'}>
          <Text transition={'all .3s ease'} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'start'}
          flex={1}
        >
          <Icon w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

// Mobile Navbar
const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('gray.800', 'gray.50')}
      m={2}
      p={4}
      borderRadius={'lg'}
      display={{ md: 'none' }}
    >
      {MOBILE_NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, to }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        to={to ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
        _focus={{
          outline: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.50', 'gray.800')}>
          <NavLink to={to}>{label}</NavLink>
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
          _focus={{
            outline: 'none',
          }}
        >
          {children &&
            children.map(child => (
              <Link
                key={child.label}
                py={2}
                href={child.to}
                _focus={{
                  outline: 'none',
                }}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const MOBILE_NAV_ITEMS = [
  {
    to: '/opensource',
    label: 'Open Source',
  },
  {
    to: '/about',
    label: 'About Us',
  },
  {
    to: '/one-time-editor',
    label: 'One-Time Editor',
  },
  {
    to: '/features',
    label: 'Features',
  },
  {
    to: '/sponsor',
    label: 'Sponsor',
  },
];

const FeaturedContentWrapper = ({ content }) => {
  return (
    <>
      <Box my={'5'}>
        <Text fontSize={'md'} fontWeight="bold">
          {content?.title}
        </Text>
        <Text fontSize={'sm'}>{content?.description}</Text>
        {content?.hasAction && content?.action?.type === 'button' ? (
          <Link
            href={content?.action?.url}
            style={{
              textDecoration: 'none',
            }}
            _focus={{
              outline: 'none',
            }}
            target={'_blank'}
          >
            <Button
              as={'NavLink'}
              mt={3}
              to={content?.action?.url}
              variant="outline"
              colorScheme={'purple'}
              color={'purple.500'}
              size="sm"
              _focus={{
                outline: 'none',
              }}
            >
              {content?.action?.label}
            </Button>
          </Link>
        ) : (
          <Link
            href={content?.action?.url}
            _focus={{
              outline: 'none',
            }}
            target={'_blank'}
            marginTop={'5rem'}
            fontSize={'sm'}
            color={'purple.400'}
          >
            {content?.action?.label}
          </Link>
        )}
      </Box>
      <Divider my={'4'} bg={'gray.300'} />
    </>
  );
};
