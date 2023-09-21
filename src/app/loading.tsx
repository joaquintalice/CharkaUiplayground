import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

export default function Loading() {
    return (
        <Center minH="100vh">
            <Spinner size='xl' color='purple.500' thickness='4px' />
        </Center>
    )
}
