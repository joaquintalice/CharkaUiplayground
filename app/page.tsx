import Navbar from '@/components/Navbar'
import { Container, Box, Center, Flex, Square, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const styleObj = {
  p: '2rem',
  color: 'white',
  bgColor: 'purple.300',
  filter: 'blur(2px)',
  ':hover': {
    bgColor: 'black',
    filter: 'blur(1px)',
    color: 'white',
    my: '3rem'
  }
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Heading my='3rem'>
          heading component
        </Heading>
        <Text color='red'>Text component je</Text>

        <Box bgColor='yellow' p='2rem'>
          <Text bgColor='gray' color='white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cupiditate voluptatem, ullam praesentium magni soluta recusandae iste omnis velit facere sapiente porro hic error libero eveniet provident sit magnam accusamus.</Text>
        </Box>

        <Box sx={styleObj}>
          <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cupiditate voluptatem, ullam praesentium magni soluta recusandae iste omnis velit facere sapiente porro hic error libero eveniet provident sit magnam accusamus.</Text>
        </Box>

      </Container>
    </>
  )
}
