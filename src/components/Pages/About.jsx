import { Box, Heading, Container, Text, Stack, Button } from '@chakra-ui/react';
import * as FaIcons from 'react-icons/fa';

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
                            About Us
                        </Text>
                    </Heading>
                    <Text fontSize={'1.5rem'} align="start">
                    Invoicetor is a platform that helps businesses to digitize their finances in an easy manner and create invoices. Aim of this website is to avail a service that helps them to simplify their finances.</Text>{' '}
                    <Text
                        fontSize={'1.5rem'}
                        align="start"
                        mb={{
                            base: 0,
                            md: 15,
                        }}
                    >
                        It is a major part of DunoLabs which is an organisation that is created to empower companies to grow their businesses with its smart marketing technology. It builds trusted, useful and insightful platforms for the clients to reach the right people. 💜
                    </Text>
                                   </Stack>
            </Container>
        </>
    );
}
