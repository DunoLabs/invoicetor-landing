import { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import * as BiIcons from 'react-icons/bi';

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
          icon={<BiIcons.BiCaretUpSquare />}
          size="sm"
          borderRadius={'lg'}
          fontSize={'1.5rem'}
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
          zIndex={1}
          color={'white'}
          bgGradient="linear(purple.400, purple.900)"
          _hover={{
            bgGradient: 'linear(purple.400, purple.700)',
          }}
          _focus={{
            outline: 'none',
            bgGradient: 'linear(purple.400, purple.700)',
          }}
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
