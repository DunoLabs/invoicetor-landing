import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

import Download from '../../Molecules/Download/Download';

export default function SimpleCookiePreference() {
  return (
    <>
      <Stack p="4" m="4" borderRadius="sm">
        <Text fontSize="3xl" fontWeight="bold" align={'center'}>
          Your Invoice is Ready to Download
        </Text>
        <Text fontSize="md" align={'center'}>
          Share your invoice with your friends and colleagues by downloading the
          PDF/ printable version.
        </Text>
      </Stack>
      <Download />
    </>
  );
}
