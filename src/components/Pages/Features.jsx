import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Divider,
} from '@chakra-ui/react';

import { FeaturesData } from 'data/FeaturesData';

export default function OpenSource() {
  return (
    <>
      <Container maxW={'5xl'} mt={5}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 3, md: 5 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            align="start"
            fontWeight={700}
            fontSize="6xl"
            my={{
              base: 0,
              md: 5,
            }}
          >
            <Text as={'span'} fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
              Features
            </Text>

            <Text
              align="start"
              color={'gray.400'}
              fontSize={{
                base: '1.2rem',
                lg: '1.3rem',
              }}
              fontWeight={'normal'}
            >
              All the features of Invoicetor are available in the free version
              ✨
            </Text>
          </Heading>
          {FeaturesData.map((feature, index) => (
            <>
              <Text
                id="free-invoicetor"
                fontSize={'1.5rem'}
                fontWeight={600}
                align="start"
              >
                <Text
                  as="span"
                  fontWeight={'900'}
                  bgGradient="linear(to-l, yellow.400, purple.400)"
                  bgClip="text"
                >
                  #
                </Text>{' '}
                {feature.title}
              </Text>{' '}
              <Text
                fontSize={'1.3rem'}
                align="start"
                mb={{
                  base: 0,
                  md: 15,
                }}
              >
                {feature.description}
              </Text>
              <Divider borderColor={'gray.400'} borderStyle={'solid'} />{' '}
            </>
          ))}
        </Stack>
      </Container>
    </>
  );
}
