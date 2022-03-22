import { Center, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Download from '../../Molecules/Download/Download';

export default function Share() {
  return (
    <>
      <Stack>
        <Text fontSize={'1.3rem'} align="center">
          Share your invoice with your friends and colleagues by downloading the
          PDF, you can also print the invoice.
        </Text>
      </Stack>
      <Center>
        <Download />
      </Center>
    </>
  );
}
