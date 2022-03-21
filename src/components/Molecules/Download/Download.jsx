import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Preview from '../../Organism/Preview/Preview';
import { Box, Button, Stack, useColorModeValue, Text } from '@chakra-ui/react';
import * as RiIcons from 'react-icons/ri';
export default function Download() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div
        style={{
          display: 'none',
        }}
      >
        <Box
          ref={componentRef}
          p={5}
          bg={useColorModeValue('gray.100', '#1A202C')}
        >
          <Preview />
        </Box>
      </div>
      <Stack>
        <Text>
          Click on the button below to print your invoice. You can also save it
          as a PDF.
        </Text>
      </Stack>
      <Button
        onClick={handlePrint}
        variantColor="teal"
        variant="outline"
        size="lg"
        mr={4}
        mt={4}
        mb={4}
        leftIcon={<RiIcons.RiPrinterLine />}
      >
        Print
      </Button>
    </>
  );
}
