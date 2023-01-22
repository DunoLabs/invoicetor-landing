import { Text, Stack, Avatar, Link, useColorModeValue } from '@chakra-ui/react';

export default function SupporterCard({
  name,
  github,
  linkedin,
  profile,
  ...props
}) {
  return (
    <>
      <Stack
        direction={'row'}
        spacing={4}
        align={'center'}
        shadow="md"
        p="4"
        m={{
          base: '0',
          md: '4',
        }}
        rounded="xl"
        bg={useColorModeValue('white', 'gray.50')}
        color={useColorModeValue('gray.700', 'gray.900')}
      >
        <Avatar src={profile} alt={'Author'} />
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text fontWeight={600}>{name}</Text>
          <Link
            href={`https://github.com/${github}`}
            target={'_blank'}
            _focus={{
              outline: 'none',
            }}
          >
            <Text color={'gray.500'}>@{github}</Text>
          </Link>
        </Stack>
      </Stack>
    </>
  );
}
