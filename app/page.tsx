import { Container, Box, Center, Flex, Square } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <Container maxW='container.sm'>
      <Flex color='white'>
        <Center w='100px' bg='green.500'>
          <h2>Box 1</h2>
        </Center>
        <Square bg='blue.500' size='150px'>
          <h2>Box 2</h2>
        </Square>
        <Box flex='1' bg='tomato'>
          <h2>Box 3</h2>
        </Box>
      </Flex>
    </Container >
  )
}
