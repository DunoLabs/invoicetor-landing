import { Box, Heading, Container, Text, Stack, Button } from '@chakra-ui/react';

export default function OpenSource() {
    return (
        <>
            <Container maxW={'4xl'} mt={5}>
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
                        <Text
                            as={'span'}
                            bgGradient="linear(to-l,purple.400, yellow.400)"
                            bgClip="text"
                        >
                            Features
                        </Text>
                    </Heading>
                    <Text fontSize={'1.9rem'} fontWeight={600} align="start">
                        One Time Editor
                    </Text>{' '}
                    <Text
                        fontSize={'1.5rem'}
                        align="start"
                        mb={{
                            base: 0,
                            md: 15,
                        }}
                    >
                         Invoices plays an important part in the day to day operations of any business and is generally termed as bills. This feature can assist companies to create them in not only correct format but also with all the essential elements.
                    </Text>
                    
                    <Text fontSize={'1.9rem'} fontWeight={600} align="start">
                        Invoice Format In PDF
                    </Text>{' '}
                    <Text
                        fontSize={'1.5rem'}
                        align="start"
                        mb={{
                            base: 0,
                            md: 15,
                        }}
                    >
                        In form of pdf invoices can be generated which will help in documenting the details of every transaction and make tax filing easier.
                    </Text>
                </Stack>
            </Container>
        </>
    );
}
