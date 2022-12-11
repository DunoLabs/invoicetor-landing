import { useState, useEffect } from 'react';
import { IconButton, useColorModeValue } from '@chakra-ui/react';
import * as RiIcons from 'react-icons/ri';
export default function GoTop() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* <Show breakpoint="(min-width: 800px)"> */}
      {scrollPosition > 200 && (
        <IconButton
          icon={<RiIcons.RiArrowUpLine />}
          size="sm"
          borderRadius={'lg'}
          fontSize={'1.2rem'}
          textAlign={'center'}
          position="fixed"
          bottom={{
            base: '1rem',
            md: '1.5rem',
          }}
          right={{
            base: '10px',
            md: '40px',
          }}
          bg={'purple.800'}
          _hover={{
            bg: 'purple.700',
            outline: 'none',
          }}
          _focus={{
            outline: 'none',
          }}
          zIndex={1}
          color={'white'}
          shadow="md"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
      )}

      {/* </Show> */}
    </>
  );
}
