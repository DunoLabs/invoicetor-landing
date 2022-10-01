import { NavLink } from 'react-router-dom';
import { Tag, Link, Box, IconButton } from '@chakra-ui/react';
import * as RiIcon from 'react-icons/ri';
import { useState } from 'react';

export const Content = ({ setShow }) => (
  <>
    <Box alignSelf="center">
      We are participating in{' '}
      <Link
        href="https://hacktoberfest.digitalocean.com/"
        isExternal
        _focus={{
          outline: 'none',
        }}
      >
        <Tag bg={'gray.900'} variant="solid" m="1" size="sm">
          Hacktoberfest 2022
        </Tag>
      </Link>
      contribute to our codebases and help us build a better product for
      everyone.
      <Link
        as={NavLink}
        to="/hacktoberfest"
        textDecoration="underline"
        _focus={{ outline: 'none' }}
        ms="2"
      >
        {' '}
        Learn more
      </Link>
    </Box>
    <IconButton
      aria-label="Close"
      alignItems={'center'}
      bg="gray.800"
      _hover={{ bg: 'gray.700' }}
      rounded={'md'}
      color="white"
      icon={<RiIcon.RiCloseFill />}
      size="sm"
      onClick={() => setShow(false)}
    />
  </>
);

export default function Announcements() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <Box
          width="100%"
          display={'flex'}
          justifyContent={'space-around'}
          fontSize="sm"
          bgGradient="linear(to-l, yellow.100, purple.100)"
          color="black"
          p="3"
        >
          <Content setShow={setShow} />
        </Box>
      )}
    </>
  );
}
