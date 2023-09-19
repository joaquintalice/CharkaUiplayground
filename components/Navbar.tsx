import { Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Flex as='nav' p='10px' alignItems='center' justifyContent='center' wrap='wrap'>
            <Heading as='h1'>Talice's Stock</Heading>

            <Spacer />

            <HStack spacing='10px'>
                <Box bg='gray.300' p='10px'>M</Box>
                <Text>jtg@gmail.com</Text>
                <Button colorScheme="purple" color='black'>Logout</Button>
            </HStack>
        </Flex>
    )
}
