'use client'

import { Box, Heading, Text, Button, Link } from '@chakra-ui/react'

export default function NotFound() {
    return (
        <Box textAlign="center" my={{ base: '3rem', md: '6rem' }} py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, purple.300, purple.600)"
                backgroundClip="text">
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} mb={6}>
                The page you&apos;re looking for does not seem to exist
            </Text>

            <Link href='/'>
                <Button
                    colorScheme="teal"
                    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                    color="purple.300"
                    variant="outline" onClick={() => <Link href='/'></Link>}>
                    Go to Home
                </Button>
            </Link>
        </Box>
    )
}