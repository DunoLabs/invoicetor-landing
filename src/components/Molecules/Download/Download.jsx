import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Preview from '../../Organism/Preview/Preview';
import { Box, Button, Stack, useColorModeValue } from '@chakra-ui/react';
import * as RiIcons from 'react-icons/ri';
export default function Download() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Stack
        style={{
          display: 'none',
        }}
        bg={useColorModeValue('gray.100', '#1A202C')}
      >
        <Box ref={componentRef} p={5} bg={useColorModeValue('#fff', '#1A202C')}>
          <Preview />
        </Box>
      </Stack>

      <Button
        m={10}
        fontWeight={600}
        color={'white'}
        bg={'purple.400'}
        borderRadius={'lg'}
        href={'#'}
        _hover={{
          bg: 'purple.700',
        }}
        onClick={handlePrint}
        leftIcon={<RiIcons.RiPrinterLine />}
      >
        Print
      </Button>
    </>
  );
}
