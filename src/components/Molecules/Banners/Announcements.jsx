import { Tag, Link, Box, IconButton } from '@chakra-ui/react';
import * as RiIcon from 'react-icons/ri';
import { useState } from 'react';

export const Content = ({ setShow }) => (
  <>
    <Box alignSelf="center" fontWeight={'500'}>
      We are planning to release the{' '}
      <Tag
        bg={'gray.900'}
        variant="solid"
        mx="1"
        mb="1"
        size="sm"
        className="gradient-animation"
      >
        Free-Invoicetor
      </Tag>
      soon, and we need your help (feedback){' '}
      <Link isExternal textDecor="underline">
        Learn More
      </Link>{' '}
      about it !
    </Box>
    <IconButton
      aria-label="Close"
      alignItems={'center'}
      bg="gray.800"
      _hover={{ bg: 'gray.900' }}
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
