import { Box, Grid, SimpleGrid, Text } from "@chakra-ui/react";

// const styleObj = {
//   p: '2rem',
//   color: 'white',
//   bgColor: 'purple.300',
//   filter: 'blur(2px)',
//   ':hover': {
//     bgColor: 'black',
//     filter: 'blur(1px)',
//     color: 'white',
//     my: '3rem'
//   }
// }


export default function Home() {
  return (

    <SimpleGrid p='1rem' spacing='10px' minChildWidth='150px'>
      <Box bg='white' h='200px' border='1px solid'>
        <Text>Hola</Text>
      </Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>

      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>

      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
    </SimpleGrid>
  )
}
