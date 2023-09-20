import { Text, Avatar, Center, Heading, Skeleton, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, SkeletonCircle } from '@chakra-ui/react'
import React from 'react'

export default function loading() {
    return (
        <>
            <Center my={{ base: '2rem' }}>
                <Heading as='h1'>
                    <Text>Employee's list</Text>
                </Heading>
            </Center>
            <TableContainer maxWidth='100%'>
                <Table variant='striped' colorScheme='purple' size='lg'>
                    <TableCaption><Skeleton height='20px' /></TableCaption>
                    <Thead>
                        <Skeleton>
                            <Tr>
                                <Th><Skeleton height='20px' /></Th>
                                <Th><Skeleton height='20px' /></Th>
                                <Th><Skeleton height='20px' /></Th>
                                <Th><Skeleton height='20px' /></Th>
                                <Th><Skeleton height='20px' /></Th>
                            </Tr>
                        </Skeleton>
                    </Thead>
                    <Tbody>
                        <Skeleton>
                            <Tr>
                                <Td><Skeleton height='20px' /></Td>
                                <Td>
                                    <SkeletonCircle height='50px' width='50px' />
                                </Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                            </Tr>
                        </Skeleton>
                        <Skeleton>
                            <Tr>
                                <Td><Skeleton height='20px' /></Td>
                                <Td>
                                    <SkeletonCircle height='50px' width='50px' />
                                </Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                            </Tr>
                        </Skeleton>
                        <Skeleton>
                            <Tr>
                                <Td><Skeleton height='20px' /></Td>
                                <Td>
                                    <SkeletonCircle height='50px' width='50px' />
                                </Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                            </Tr>
                        </Skeleton>
                        <Skeleton>
                            <Tr>
                                <Td><Skeleton height='20px' /></Td>
                                <Td>
                                    <SkeletonCircle height='50px' width='50px' />
                                </Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                            </Tr>
                        </Skeleton>
                        <Skeleton>
                            <Tr>
                                <Td></Td>
                                <Td>
                                    <SkeletonCircle height='50px' width='50px' />
                                </Td>
                                <Td></Td>
                                <Td></Td>
                                <Td></Td>
                            </Tr>
                        </Skeleton>
                        <Skeleton>
                            <Tr>
                                <Td><Skeleton height='20px' /></Td>
                                <Td>
                                    <SkeletonCircle height='50px' width='50px' />
                                </Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                            </Tr>
                        </Skeleton>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}
