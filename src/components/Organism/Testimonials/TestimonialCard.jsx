import React from 'react';
// Chakra imports
import {
  Link,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  Image,
  Icon,
  Box,
} from '@chakra-ui/react';
// Assets
import * as RiIcon from 'react-icons/ri';

function TestimonialCard({
  content,
  name,
  handle,
  date,
  image,
  url,
  platform,
}) {
  let secondaryBg = useColorModeValue('white', 'purple.900');

  return (
    <Link
      href={url}
      isExternal
      target="_blank"
      rel="noopener noreferrer"
      _hover={{
        textDecoration: 'none',
      }}
      _focus={{
        outline: 'none',
      }}
    >
      <Flex
        boxShadow={'md'}
        bg={secondaryBg}
        borderRadius="20px"
        border={'2px solid'}
        borderColor="transparent"
        w="100%"
        p="20px"
        direction="column"
        wrap={'wrap'}
        _hover={{
          borderColor: useColorModeValue('purple.200', 'purple.400'),
          transition: 'all 0.2s ease-in',
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Text>— {handle}</Text>
          <Icon
            as={
              platform === 'Twitter'
                ? RiIcon.RiTwitterFill
                : RiIcon.RiLinkedinFill
            }
            w={5}
            h={5}
            mb="4"
            color={useColorModeValue('gray.900', 'gray.200')}
          />
        </Box>
        <Text
          align="start"
          color={useColorModeValue('gray.600', 'gray.400')}
          fontSize={{
            base: '16px',
            sm: '18px',
          }}
          lineHeight="24px"
          mt="1rem"
          mb={'2rem'}
        >
          {content}
        </Text>
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
          <Image
            borderRadius="full"
            boxSize="40px"
            src={image || 'https://via.placeholder.com/40'}
            alt={`Avatar of ${name}`}
          />
          <Text fontWeight="medium" align={'start'}>
            {name}

            <br />
            <Text
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {date}
            </Text>
          </Text>
        </HStack>
      </Flex>
    </Link>
  );
}

export default TestimonialCard;
