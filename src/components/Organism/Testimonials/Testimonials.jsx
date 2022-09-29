import {
  Heading,
  Text,
  Stack,
  Container,
  Link,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import TestimonialCard from './TestimonialCard';

import TestimonialsData from './TestimonialsData';

export default function Testimonials() {
  return (
    <Container maxW={'6xl'} my={'7rem'} as={Stack} spacing={20}>
      <Stack>
        <Heading
          fontSize={{
            base: '1.5rem',
            md: '2.3rem',
          }}
        >
          Kudos from people who love our work 🙌
        </Heading>
        <Text
          mt={'2'}
          color={'gray.400'}
          fontSize={{
            base: '16px',
            sm: '18px',
          }}
        >
          Thanks for using @Invoicetor! Please leave us a review or kudos on
          twitter and mention us at{' '}
          <Link
            href="https://twitter.com/dunolabs"
            target={'_blank'}
            rel="noopener noreferrer"
            color={useColorModeValue('purple.500', 'purple.200')}
          >
            @dunolabs
          </Link>{' '}
          so we can improve it.
        </Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 10, md: 4, lg: 10 }}
      >
        <SimpleGrid
          templateColumns={{
            base: 'repeat(1, minmax(0, 1fr))',
            md: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(3, minmax(0, 1fr))',
          }}
          gap={5}
          alignItems={'center'}
          justifyContent={'center'}
        >
          {TestimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              platform={testimonial.platform}
              handle={testimonial.handle}
              date={testimonial.date}
              image={testimonial.image}
              url={testimonial.url}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
